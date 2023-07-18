import { useState, useEffect } from 'react'
import personsService from './services/personsServices'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [notification, setNotification] = useState({message: null, type:'hide'})
  
  useEffect(() => {
    personsService
    .getAllPersons()
    .then((response) => {
      setPersons(response.data)
    })
  },[])

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const handleNewSearch = (event) => setNewSearch(event.target.value)

  const isNameDuplicated = (name) => (persons.find(item => item.name === name) !== undefined)

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (isNameDuplicated(newName))
    {
      if(window.confirm(`${newName} already exists, do you wanna replace the old number with a new one?`))
      {
        const person = persons.find(item => item.name === newName)
        personsService
        .updatePerson(person.id, newPerson)
        .then(response => {
          if (response.status === 200) {
            personsService
              .getAllPersons()
              .then(response => setPersons(response.data))
            newNotification(`Updated ${newPerson.name}'s number`, 'success')
            setNewName('')
            setNewNumber('')
          } else if (response.status === 404){
            personsService
              .getAllPersons()
              .then(response => setPersons(response.data))
            newNotification(`${newPerson.name} was already deleted from the phonebook`, 'error')
          }
        })
      }
    } else {
      personsService
        .createPerson(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          newNotification(`Added ${newPerson.name}`, 'success')
        })
    }
  }
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)){
      personsService
        .deletePerson(id)
        .then(response => {
          if (response.status === 200){
            personsService
              .getAllPersons()
              .then(response => setPersons(response.data))
            newNotification(`Deleted ${name}`, 'success')
          } else if (response.status === 404) {
            personsService
              .getAllPersons()
              .then(response => setPersons(response.data))
            newNotification(`${name} was already deleted from the phonebook`, 'error')
          }
        })
        
    }
  }

  const newNotification = (message, type) => {
      setNotification({
        message, type
      })
      setTimeout(() => {
        setNotification({message: null, type: 'hide'})
      }, 5000)
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <Notification 
        message={notification.message}
        type={notification.type}
        />
        <Filter
          handleNewSearch={handleNewSearch}
          newSearch={newSearch}
        />
      <h2>add a new</h2>
        <PersonForm 
          addPerson={addPerson}
          newName={newName}
          handleNewName={handleNewName}
          newNumber={newNumber}
          handleNewNumber={handleNewNumber}
        />
      <h2>Numbers</h2>
        <Persons
          list={persons}
          searchTerm={newSearch}
          deletePerson={deletePerson}
        />
    </div>
  )
}

export default App