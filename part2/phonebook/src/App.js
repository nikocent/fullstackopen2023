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
  const [notification, setNotification] = useState(null)
  
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
          setPersons(persons.map(item => item.id !== person.id ? item : response.data))
          setNewName('')
          setNewNumber('')
          setNotification(
            `Updated ${newPerson.name}'s number`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
      }
    } else {
      personsService
        .createPerson(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setNotification(
            `Added ${newPerson.name}`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
  }
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)){
      personsService
        .deletePerson(id)
        .then(response => {
          const updatedPersons = persons.filter(person => person.id !== id)
          setPersons(updatedPersons)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={notification}/>
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