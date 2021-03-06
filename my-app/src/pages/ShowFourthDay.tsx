import React from "react";
import { WeatherData } from "../component/Api/Api";
import DetailPages from "../component/Detailpages/DetailPages";
import fourthDay from "../component/Main/Main";
import "./pages.css";

interface Props {
    weatherData?: WeatherData;
    onNewWeatherData: (weatherData: WeatherData) => void;
  }

//Prints out the detail page
  export default function ShowFourthDay({weatherData, onNewWeatherData}: Props) {
      if (!weatherData) {
          return <p>Please enter a city!</p>
        }
        let sunriseUnix = weatherData.city.sunrise * 1000;
        let date = new Date(sunriseUnix);
        let sunrise = date.toTimeString().substring(0, 5);

        let sunsetUnix = weatherData.city.sunset * 1000;
        let date2 = new Date(sunsetUnix);
        let sunset = date2.toTimeString().substring(0, 5);
      return (
        <div className="PagesContainer">

            <ul className="DetailPages">
                <li className="DetailListItem">Temperature: {Math.round(weatherData.list[24].main.temp)} °C</li>
                <li className="DetailListItem">Feels like: {Math.round(weatherData.list[24].main.feels_like)} °C </li>
                <li className="DetailListItem">Wind: {weatherData.list[24].wind.speed} m/s</li>
                <li className="DetailListItem">Humidity: {weatherData.list[24].main.humidity} %</li>
                <li className="DetailListItem">Sunrise: {sunrise}</li>
                <li className="DetailListItem">Sunset: {sunset}</li>
            </ul>
        </div>
    )
}


