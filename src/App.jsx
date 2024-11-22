import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Footer from './Footer'
import WeatherInformations from './components/weatherInformations/weatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days'


function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

   async function searchCity(){
    
    const city = inputRef.current.value

    const key = "9fc37e6362f8d5e85f98ad060179c992"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt&units=metric`

    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt&units=metric`

    const apiInfo = await axios.get(url)
    const api5Days = await axios.get(url5Days)
    setWeather(apiInfo.data)
    setWeather5Days(api5Days.data)

    console.log(api5Days)

    }
  
  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input type="text" ref={inputRef} placeholder='digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformations weather = {weather}/>}
      {weather5Days && <WeatherInformations5Days weather5Days = {weather5Days}/>}
      
      <Footer/>
    </div>
  )
}

export default App
