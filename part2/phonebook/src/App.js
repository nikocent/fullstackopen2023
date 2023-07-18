import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  
  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const handleNewSearch = (event) => setNewSearch(event.target.value)

  const isNameDuplicated = (name) => (persons.find(item => item.name === name) !== undefined)

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.slice(-1)[0].id + 1
    }

    if (!isNameDuplicated(newName)){
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to the phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
        <Persons list={persons} searchTerm={newSearch}/>
    </div>
  )
}

export default App