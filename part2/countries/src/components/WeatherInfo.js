import axios from 'axios'
import {useState, useEffect} from 'react'

const API_KEY = process.env.REACT_APP_API_KEY
const WeatherInfo = ({capital, lat, lon}) => {
    const [weather, setWeather] = useState(null)
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    useEffect(() => {
            axios
                .get(URL)
                .then(res => {
                    setWeather(res.data)
                })
    }, [weather, URL])
    if (!weather){
        return <></>
    }
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>temperature: {weather.main.temp} Celsius</p>
            <img 
            alt='Weather icon' 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
            <p>wind: {weather.wind.speed} m/s</p>
        </div>
    )
    }

export default WeatherInfo