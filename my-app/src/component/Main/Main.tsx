import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { WeatherData } from "../Api/Api";

interface Props {
  weatherData?: WeatherData;
  onNewWeatherData: (weatherData: WeatherData) => void;
}

//Creates the main page with the city name and an ul list with weather information
export default class Main extends React.Component<Props> {
  render() {
    const {weatherData, onNewWeatherData} = this.props;

    if (!weatherData) {
      return <p>Please enter a city!</p>
    }

    let date = new Date();

    let first = date.getDate() - date.getDay() + 4;
    let second = first + 1;
    let third = first + 2;
    let fourth = first + 3;
    let fifth = first + 4;

    let today = new Date(date.setDate(first)).toDateString().substring(0, 3);
    let tomorrow = new Date(date.setDate(second)).toDateString().substring(0, 3);
    let thirdDay = new Date(date.setDate(third)).toDateString().substring(0, 3);
    let fourthDay = new Date(date.setDate(fourth)).toDateString().substring(0, 3);
    let fifthDay = new Date(date.setDate(fifth)).toDateString().substring(0, 3);

    let day = date.getDay();

      return (
          <div className="main-container">
            <main>
              <h2>Stad: {weatherData.city.name}</h2>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{today}</li>
                <li>Weather: {weatherData.list[0].weather[0].main} </li>
                <li>Temperature: {Math.round(weatherData.list[0].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[0].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowToday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{tomorrow}</li>
                <li>Weather: {weatherData.list[8].weather[0].main}</li>
                <li>Temperature: {Math.round(weatherData.list[8].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[8].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowTomorrow">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{thirdDay}</li>
                <li>Weather: {weatherData.list[16].weather[0].main}</li>
                <li>Temperature: {Math.round(weatherData.list[16].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[16].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowThirdDay">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{fourthDay}</li>
                <li>Weather: {weatherData.list[24].weather[0].main}</li>
                <li>Temperature: {Math.round(weatherData.list[24].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[24].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowFourthDay">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{fifthDay}</li>
                <li>Weather: {weatherData.list[32].weather[0].main}</li>
                <li>Temperature: {Math.round(weatherData.list[32].main.temp)} °C</li>
                <li>Feels like: {Math.round(weatherData.list[32].main.feels_like)} °C</li>
                <Link className="LinkShowMore" to="/ShowLastDay">
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
