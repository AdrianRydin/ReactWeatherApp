import React, {useState} from "react";

    interface WeatherData {

        base: string
        clouds: { all: number }
        cod: number
        coord: { lon: number, lat: number }
        dt: number
        id: number
        main: { temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, humidity: number }
        name: string
        sys: { type: number, id: number, country: string, sunrise: number, sunset: number }
        timezone: number
        visibility: number
        weather: [{ id: number, main: string, description: string, icon: string }]
        wind: { speed: number, deg: number }

    }

    function Api() {
        //Väder API
        const APIKey = "661acb0f32a6cfbc4b06bb0c529a83aa";
        const language = "sv";
        const [weatherData, setWeatherData] = useState<WeatherData[]>([])
        const [city, setCity] = useState("")

        const getWeather = (event: { key: string; }) => {
            if (event.key === "Enter") {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKey}&lang=se`)
                    .then(
                        response => response.json()
                    ).then(
                    data => {
                        setWeatherData(data)
                        setCity("")
                    }
                )
            }
        }
        return (
            <div className="Api">

                {/* <Weather /> */}
                <input
                    className="input"
                    placeholder="Skriv en stad..."
                    onChange={e => setCity(e.target.value)}
                    value={city}
                    onKeyPress={getWeather}
                />
                {typeof weatherData.main === 'undefined' ? (
                    <div>
                        <p>Välkommen till Weather app! Skriv en stad för att se vädret!</p>
                    </div>
                ) : (
                    <div>
                        <h2>Stad: {weatherData.name}</h2>
                        <p>Temperatur: {Math.round(weatherData.main.temp)} grader</p>
                        <p>{weatherData.weather[0].description}</p>
                    </div>
                )}

            </div>
        );

}
export default Api;



