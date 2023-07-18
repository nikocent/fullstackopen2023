import {useState, useEffect} from 'react'
import axios from 'axios'

const ShowInfo = ({countries}) => {
  if (countries.length === 1){
    return (
      <>
        <h1>{countries[0].name.common}</h1>
        <span>capital {countries[0].capital[0]}<br></br></span>
        <span>area {countries[0].area}</span>
        <h3>languages:</h3>
          <ul>
            {Object.values(countries[0].languages).map(item => <li key={item}>{item}</li>)}
          </ul>
        <img 
          alt="Country's flag"
          src={countries[0].flags.svg}
          style={{ height: "120px"}}
        /> 
      </>
    )
  }
  return(
      <>
        {countries.map(item => 
          <span key={item.flag}>{item.name.common}<br></br></span>  
        )}
      </>
    )
}

function App() {
  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
  const [newSearch, setNewSearch] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => { 
    axios
      .get(baseUrl)
      .then(response => {
        setCountries(response.data)
      }
     )
  }, [])

  useEffect(() => {
    const newList = countries.filter(item =>
      (item.name.common.toLowerCase()).includes(newSearch.toLowerCase()))
    setFilteredCountries(newList)
  }, [newSearch, countries])

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <>
      <span>find countries</span>
      <input
        onChange={handleNewSearch} 
        value={newSearch}
      />
      <div>
        <ShowInfo countries={filteredCountries}/>
      </div>
    </>
  )
}


export default App;
