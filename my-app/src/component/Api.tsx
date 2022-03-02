import React, {useState} from "react";

interface State {
    main?: string
    name?: string
    weather?: string

}

export default function Api(state: State) {
    //Väder API
    
    const APIKey = "661acb0f32a6cfbc4b06bb0c529a83aa";
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event: { key: string; }) => {
        if (event.key === "Enter") {
            fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${city}&units=metric&lang=se`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "75e98c42c0msh040a2d7d7173d7bp1a61bdjsn476606d3bf4b"
	        }
            })
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

    let date = new Date;
    
    let first = date.getDate() - date.getDay() + 5;
    let second = first + 1;
    let third = first + 2;
    let fourth = first + 3;
    let fifth = first + 4;
    let sixth = first + 5;
    let last = first + 6;
    
    let today = new Date(date.setDate(first)).toDateString().substring(0,3);
    let tomorrow = new Date(date.setDate(second)).toDateString().substring(0,3);
    let thirdDay = new Date(date.setDate(third)).toDateString().substring(0,3);
    let fourthDay = new Date(date.setDate(fourth)).toDateString().substring(0,3);
    let fifthDay = new Date(date.setDate(fifth)).toDateString().substring(0,3);
    let sixthDay = new Date(date.setDate(sixth)).toDateString().substring(0,3);
    let lastday = new Date(date.setDate(last)).toDateString().substring(0,3);

    // let days = [today, tomorrow, thirdDay, fourthDay, lastday];
    let day = date.getDay();
    

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
            {typeof weatherData.list ==='undefined' ?(
                <div>

                </div>
            ): (
                <div>
                    <h2>Stad: {weatherData.city.name}</h2>
                    <h3>Idag</h3>
                    <p>Temperatur: {Math.round(weatherData.list[0].main.temp)} grader</p>
                    <p>Väder: {weatherData.list[0].weather[0].description}</p>

                    <h3>Imorgon</h3>
                    <p>Temperatur: {Math.round(weatherData.list[1].main.temp)} grader</p>
                    <p>Väder: {weatherData.list[1].weather[0].description}</p>

                    <h3>{thirdDay}</h3>
                    <p>Temperatur: {Math.round(weatherData.list[2].main.temp)} grader</p>
                    <p>Väder: {weatherData.list[2].weather[0].description}</p>

                    <h3>{fourthDay}</h3>
                    <p>Temperatur: {Math.round(weatherData.list[3].main.temp)} grader</p>
                    <p>Väder: {weatherData.list[3].weather[0].description}</p>

                    <h3>{fifthDay}</h3>
                    <p>Temperatur: {Math.round(weatherData.list[4].main.temp)} grader</p>
                    <p>Väder: {weatherData.list[4].weather[0].description}</p>
                </div>
            )}

        </div>
    );
}
// export default Api;
