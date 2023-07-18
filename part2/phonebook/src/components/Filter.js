const Filter = ({handleNewSearch, newSearch}) =>
<div>
  filter shown with <input 
                    onChange={handleNewSearch} value={newSearch}
                    />
</div>

export default Filter