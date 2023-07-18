import FilterList from './FilterList'

const RenderSingle = ({name, number, id}, deletePerson) => 
  <div key={id}>
    <span>{name} {number} </span>
    <button onClick={() => deletePerson(id, name)}>
      delete
    </button>
  </div>
  

const RenderAll = (list, deletePerson) =>
  <div>
    {list.map(item => RenderSingle(item, deletePerson))}
  </div>

const Persons = ({list, searchTerm, deletePerson}) => {
  const newSearchTerm = searchTerm.toLowerCase()
  if (newSearchTerm === '') return RenderAll(list, deletePerson)
  const newList = FilterList(list, newSearchTerm)
  return RenderAll(newList, deletePerson)
}

export default Persons