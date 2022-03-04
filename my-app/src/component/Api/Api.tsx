import React, {useState} from "react";
import SaveCityToLS from "../LS/saveLS";
import Main from "../Main/Main";
import Error from "../ErrorBoundry/ErrorBoundry";

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

    return (
        <div className="ApiContainer">
            <p>Welcome to weather app!</p>
                <p>Write a city to see the weather</p>
            <input
                type="text"
                className="input"
                placeholder="City name..."
                onChange={(e) => setCity(e.target.value)}
                value={city}
                onKeyPress={getWeather}
            />
            <Error>
                <SaveCityToLS/>
            </Error>

            {!weatherData?.list ? (
                <div>

                </div>
            ) : (
                <Error>
                    <Main weatherData={weatherData} onNewWeatherData={onNewWeatherData}/>
                </Error>
            )}

        </div>
    );
}

export default Api;

