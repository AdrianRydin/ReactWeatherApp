import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Api, { WeatherData } from "../Api";
import thirdDay from "../Api";
import fourthDay from "../Api";
import fifthDay from "../Api";

interface Props {
  weatherData?: WeatherData;
  onNewWeatherData: (weatherData: WeatherData) => void;
}

export default class Main extends React.Component<Props> {
  render() {
    const {weatherData, onNewWeatherData} = this.props;

    if (!weatherData) {
      return <p>Please enter a city!</p>
    }

      return (
          <div className="main-container">
            <main>
              <h2>Stad: {weatherData.city.name}</h2>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">Today</li>
                <li>Weather: {weatherData.list[0].weather[0].main} </li>
                <li>Temperature: {Math.round(weatherData.list[0].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[0].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowMonday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">Tomorrow</li>
                <li>Weather: {weatherData.list[8].weather[0].main}</li>
                <li>Temperature: {Math.round(weatherData.list[8].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[8].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowTuesday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{thirdDay}</li>
                <li>Weather: {weatherData.list[16].weather[0].main}</li>
                <li>Temperature: {Math.round(weatherData.list[16].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[16].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowWednesday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{fourthDay}</li>
                <li>Weather: {weatherData.list[24].weather[0].main}</li>
                <li>Temperature: {Math.round(weatherData.list[24].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[24].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowThursday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{fifthDay}</li>
                <li>Weather: {weatherData.list[32].weather[0].main}</li>
                <li>Temperature: {Math.round(weatherData.list[32].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[32].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowFriday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <div className="WarningsBox">
                <p className="WeatherWarning">Weather warnings</p>
                <p>Storm in South of Sweden</p>
              </div>
            </main>
          </div>
      );
    }



}
