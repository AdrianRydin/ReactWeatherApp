import React from "react";
import '../pages/pages.css'
import { WeatherData } from "./Api";

interface Props {
    weatherData?: WeatherData;
    onNewWeatherData: (weatherData: WeatherData) => void;
  }

export default function DetailPages({weatherData, onNewWeatherData}: Props) {

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
        <div></div>
    )
}