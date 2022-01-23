import React, {useState} from 'react'
import './App.css'

function App() {

  const apiKey = '9319d56a80b86e802e703823240dd14d'
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('');
  const getWeather = (e) =>{
    if(e.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
        }
      )
    }
  }

  return (
    <div className='container'>
      <input 
      className='input' 
      placeholder='Enter a City...' 
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />
      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome to my Weather App! Please enter a City name</p>
          </div>
      ): (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}F</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
          {/* <p>{weatherData.weather[1].main}</p> */}
          </div>
      )}
  
      {weatherData.cod === "404" ? (
        <p>The city not found</p>
      ): (
        <></>
      )}
      
    </div>
  )
}

export default App
