import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '040-1234567',
      id: 1
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewPhone = (event) => setNewPhone(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      phone: newPhone,
      id: persons.slice(-1)[0].id + 1
    }
    const isDuplicated = (persons.find(item => item.name === newName) !== undefined)
    if (!isDuplicated){
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
    } else {
      alert(`${newName} is already added to the phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          onChange={handleNewName}
          value={newName}/>
        </div>
        <div>
          number: <input
          onChange={handleNewPhone}
          value={newPhone}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(item => <p key={item.id}>{item.name} {item.phone}</p>)}
      <div>debug: {newName} {newPhone}</div>
    </div>
  )
}

export default App