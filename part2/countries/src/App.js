import {useState, useEffect} from 'react'
import axios from 'axios'

const CountryInfo = ({country}) => {
  return (
    <>
        <h1>{country.name.common}</h1>
        <span>capital {country.capital[0]}<br></br></span>
        <span>area {country.area}</span>
        <h3>languages:</h3>
          <ul>
            {Object.values(country.languages).map(item => <li key={item}>{item}</li>)}
          </ul>
        <img 
          alt="Country's flag"
          src={country.flags.svg}
          style={{ height: "120px"}}
        /> 
      </>
  )
}

const ShowInfo = ({countries, setFilteredCountries}) => {
  if (countries.length === 1){
    return (
      <CountryInfo country={countries[0]}/>
    )
  }
  return(
      <>
        {countries.map(item => 
          <span 
          key={item.flag}>
            {item.name.common}
            <button onClick={() => {
              setFilteredCountries([item])
              }}>show</button>
            <br></br>
          </span>  
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
        <ShowInfo 
        countries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
        />
      </div>
    </>
  )
}


export default App;
