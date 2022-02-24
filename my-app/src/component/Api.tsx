import React, {useState} from "react";

interface State {
    main: string
    name: string
    weather: string

}


function Api() {
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
            )
        }
    }
    return (
        <div className="App">
            <p>Välkommen till Weather app! Skriv en stad för att se vädret!</p>
            <input
                className="input"
                placeholder="Skriv en stad..."
                onChange={e => setCity(e.target.value)}
                value={city}
                onKeyPress={getWeather}
            />
            {typeof weatherData.main ==='undefined' ?(
                <div>

                </div>
            ): (
                <div>
                    <h2>Stad: {weatherData.name}</h2>
                    {console.log(weatherData)}
                    <p>Temperatur: {Math.round(weatherData.main.temp)} grader</p>
                    <p>Väder: {weatherData.weather[0].main}</p>
                </div>
            )}

        </div>
    );
}

export default Api;
