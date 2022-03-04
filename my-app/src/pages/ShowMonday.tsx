import React from "react";
import { date } from "yup/lib/locale";
import { WeatherData } from "../component/Api/Api";
import DetailPages from "../component/Detailpages/DetailPages";

interface Props {
    weatherData?: WeatherData;
    onNewWeatherData: (weatherData: WeatherData) => void;
  }
  
  export default function ShowMonday({weatherData, onNewWeatherData}: Props) {

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
            <h2>Today</h2>
            <ul className="DetailPages">
                <li className="DetailListItem">Temperature: {Math.round(weatherData.list[0].main.temp)} °C</li>
                <li className="DetailListItem">Feels like: {Math.round(weatherData.list[0].main.feels_like)} °C </li>
                <li className="DetailListItem">Wind: {weatherData.list[0].wind.speed} m/s</li>
                <li className="DetailListItem">Humidity: {weatherData.list[0].main.humidity} %</li>
                <li className="DetailListItem">Sunrise: {sunrise}</li>
                <li className="DetailListItem">Sunset: {sunset}</li>
            </ul>
        </div>
    )
}
