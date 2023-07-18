import {RenderAll} from './RenderPersons'

const filterList = (list, newSearchTerm) => {
  return list.filter(item => (item.name.toLowerCase()).includes(newSearchTerm))
}

const Persons = ({list, searchTerm}) => {
  const newSearchTerm = searchTerm.toLowerCase()
  if (newSearchTerm === '') return RenderAll(list)
  const newList = filterList(list, newSearchTerm)
  return RenderAll(newList)
}

export default Persons