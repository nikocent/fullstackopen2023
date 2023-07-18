import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl)

const create = (newObject) => axios.post(baseUrl, newObject)

const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject)

const app = {getAll, update, create}
export default app