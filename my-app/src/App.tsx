// import React from 'react';
import React, {useState} from "react";
import './App.css';
import Header from './component/Header';
import Main from './component/Main';

// import REACT_APP_TOKEN  from "react-dotenv";
// import API from './component/Api';
// import Weather from './component/Api';

console.log(process.env)


function App() {
  //Väder API 
  const APIKey = "661acb0f32a6cfbc4b06bb0c529a83aa";
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event: { key: string; }) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKey}`)
            .then(
                response => response.json()
            ).then(
                data => {
                    let api = data.main;
                    setWeatherData(data)
                    setCity("")
                    return api;
                }
            ).then(
              
            )
        }
    }
  return (
    <div className="App">
     <Header />
     <Main />
     {/* <Weather /> */}
     <input 
            className="input" 
            placeholder="Skriv en stad..." 
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            />
            {typeof weatherData.main ==='undefined' ?(
              <div>
                <p>Välkommen till Weather app! Skriv en stad för att se vädret!</p>
              </div>
            ): (
              <div>
                <p>{weatherData.name}</p>
                <p>{Math.round(weatherData.main.temp)}</p>
                <p>{weatherData.weather[0].main}</p>
              </div>
            )}
    </div>
  );
}

export default App;
