import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => axios.get(baseUrl)

const createPerson = (newObject) => axios.post(baseUrl, newObject)

const updatePerson = (id, newObject) => 
    axios
        .put(`${baseUrl}/${id}`, newObject)
        .catch(err => err.response)

const deletePerson = (id) => 
    axios
        .delete(`${baseUrl}/${id}`)
        .catch(err => err.response)

const app = {getAllPersons, updatePerson, createPerson, deletePerson}

export default app