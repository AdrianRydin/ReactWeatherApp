import React, {useState} from "react";
import SaveCityToLS from "./LS/saveLS";
import Main from "./Main/Main";

export interface WeatherData {
    list: {
        wind: {
            speed: number;
        };
        main: {
            temp: number;
            feels_like: number;
            humidity: number;
        };
        weather: {
            description: string;
            main: string;
        }[];
    }[];
    city: {
        name: string;
        sunrise: number;
        sunset: number;
    };
}

interface Props {
    weatherData?: WeatherData;
    onNewWeatherData: (weatherData: WeatherData) => void;
}

function Api({weatherData, onNewWeatherData}: Props) {
    //Väder API

    const APIKey = "661acb0f32a6cfbc4b06bb0c529a83aa";

    const [city, setCity] = useState("");

    const getWeather = (event: { key: string }) => {
        if (event.key === "Enter") {
            fetch(
                `https://community-open-weather-map.p.rapidapi.com/forecast?q=${city}&units=metric&lang=se`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                        "x-rapidapi-key":
                            "75e98c42c0msh040a2d7d7173d7bp1a61bdjsn476606d3bf4b",
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    onNewWeatherData(data);
                    setCity("");
                });
        }
    };

    let date = new Date();

    let first = date.getDate() - date.getDay() + 4;
    let second = first + 1;
    let third = first + 2;
    let fourth = first + 3;
    let fifth = first + 4;
    let sixth = first + 5;
    let last = first + 6;

    let today = new Date(date.setDate(first)).toDateString().substring(0, 3);
    let tomorrow = new Date(date.setDate(second)).toDateString().substring(0, 3);
    let thirdDay = new Date(date.setDate(third)).toDateString().substring(0, 3);
    let fourthDay = new Date(date.setDate(fourth)).toDateString().substring(0, 3);
    let fifthDay = new Date(date.setDate(fifth)).toDateString().substring(0, 3);
    let sixthDay = new Date(date.setDate(sixth)).toDateString().substring(0, 3);
    let lastday = new Date(date.setDate(last)).toDateString().substring(0, 3);

    let day = date.getDay();

    return (
        <div className="ApiContainer">
            <p>Welcome to weather app! Write a city to see the weather</p>
            <input
                type="text"
                className="input"
                placeholder="City name..."
                onChange={(e) => setCity(e.target.value)}
                value={city}
                onKeyPress={getWeather}
            />

            <SaveCityToLS/>

            {!weatherData?.list ? (
                <div></div>
            ) : (
                <Main weatherData={weatherData} onNewWeatherData={onNewWeatherData} />
            )}

        </div>
    );
}

export default Api;
