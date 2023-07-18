const FilterList = (list, newSearchTerm) => {
    return list.filter(item => (item.name.toLowerCase()).includes(newSearchTerm))
}

export default FilterList