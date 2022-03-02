import React, { useState } from 'react';
import './Main.css'
import {Link} from "react-router-dom";


interface props{

}


export function Main() {
    
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
    
    let first = date.getDate() - date.getDay() + 3;
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
    // let locationIcon = document.querySelector('.weather-icon');
    // let icon = {weatherData.list[0].weather[0].icon};
    
    return (
        
        <div className="ApiContainer">
                <p>Welcome to WeatherApp! Type a city in the field below to see the weather!</p>
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
                ):(
                    
            <div className="main-container">
                <div>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Today</li>
                        <li>{weatherData.list[0].weather[0].main}</li>
                        <li>Temperature: {Math.round(weatherData.list[0].main.temp)}°C</li>
                        <li>Wind speed: {weatherData.list[0].wind.speed}m/s</li>
                        <Link className="LinkShowMore" to="/ShowMonday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Tomorrow</li>
                        <li>{weatherData.list[8].weather[0].main}</li>
                        <li>Temperature: {Math.round(weatherData.list[1].main.temp)}°C</li>
                        <li>Wind speed: {weatherData.list[1].wind.speed}m/s</li>
                        <Link className="LinkShowMore" to="/ShowTuesday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">{thirdDay}</li>
                        <li>{weatherData.list[16].weather[0].main}</li>
                        <li>Temperature: {Math.round(weatherData.list[2].main.temp)}°C</li>
                        <li>Wind speed: {weatherData.list[2].wind.speed}m/s</li>
                        <Link className="LinkShowMore" to="/ShowWednesday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">{fourthDay}</li>
                        <li>{weatherData.list[24].weather[0].main}</li>
                        <li>Temperature: {Math.round(weatherData.list[3].main.temp)}°C</li>
                        <li>Wind speed: {weatherData.list[3].wind.speed}m/s</li>
                        <Link className="LinkShowMore" to="/ShowThursday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">{fifthDay}</li>
                        <li>{weatherData.list[32].weather[0].main}</li>
                        <li>Temperature: {Math.round(weatherData.list[4].main.temp)}°C</li>
                        <li>Wind speed: {weatherData.list[4].wind.speed}m/s</li>
                        <Link className="LinkShowMore" to="/ShowFriday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <div className="WarningsBox">
                    <p className="WeatherWarning">Weather warnings</p>
                    <p>Storm in South of Sweden</p>
                    </div>

                </div>
            </div>
            )}

        </div>
        )
    
}

