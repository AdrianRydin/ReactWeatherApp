import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { WeatherData } from "../Api/Api";
import today from "../Api/Api"
import tomorrow from "../Api/Api"
import thirdDay from "../Api/Api";
import fourthDay from "../Api/Api";
import fifthDay from "../Api/Api";


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

      return (
          <div className="main-container">
            <main>
              <h2>Stad: {weatherData.city.name}</h2>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">Today</li>
                <li>Temperature {Math.round(weatherData.list[0].main.temp)}</li>
                <li>Weather: {weatherData.list[0].weather[0].description} </li>
                <li>Rainfall</li>
                <Link className="LinkShowMore" to="/ShowMonday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">Tomorrow</li>
                <li>Temperature: {Math.round(weatherData.list[1].main.temp)}</li>
                <li>Weather: {weatherData.list[1].weather[0].description}</li>
                <li>Rainfall</li>
                <Link className="LinkShowMore" to="/ShowTuesday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{thirdDay}</li>
                <li>Temperature: {Math.round(weatherData.list[2].main.temp)}</li>
                <li>Weather: {weatherData.list[2].weather[0].description}</li>
                <li>Rainfall</li>
                <Link className="LinkShowMore" to="/ShowWednesday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{fourthDay}</li>
                <li>Temperature: {Math.round(weatherData.list[3].main.temp)}</li>
                <li>Weather: {weatherData.list[3].weather[0].description}</li>
                <li>Rainfall</li>
                <Link className="LinkShowMore" to="/ShowThursday">
                  Show more
                </Link>
                <span className="material-icons main-icon">chevron_right</span>
              </ul>
              <ul className="weekDayList">
                <li className="dayOfTheWeek">{fifthDay}</li>
                <li>Temperature: {Math.round(weatherData.list[4].main.temp)}</li>
                <li>Weather: {weatherData.list[4].weather[0].description}</li>
                <li>Rainfall</li>
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
