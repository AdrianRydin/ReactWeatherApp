import React from 'react';
import Header from './Header';
import './Main.css'
import Error from "./ErrorBoundry";
import VisaMer from "./VisaMer";
import Api from './Api';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import App from '../App';

function Main() {
  return (
    <div className="main-container">
        <main>
            <ul className="weekDayList">
                <li className="dayOfTheWeek">Måndag</li>
                <li>Temperatur</li>
                <li>Vindhastighet</li>
                <li>Nederbörd</li>
                <li>
                <nav>
                    <Link to="./VisaMer">
                    Visa mer
                    <span className="material-icons main-icon">
                            chevron_right</span>
                    </Link>
                </nav>
                </li>
            </ul>
            <ul className="weekDayList">
                <li className="dayOfTheWeek">Tisdag</li>
                <li>Temperatur</li>
                <li>Vindhastighet</li>
                <li>Nederbörd</li>
                <li>Visa mer
                    <span className="material-icons main-icon">
                            chevron_right</span>
                </li>
            </ul>
            <ul className="weekDayList">
                <li className="dayOfTheWeek">Onsdag</li>
                <li>Temperatur</li>
                <li>Vindhastighet</li>
                <li>Nederbörd</li>
                <li>Visa mer
                    <span className="material-icons main-icon">
                            chevron_right</span>
                </li>
            </ul>
            <ul className="weekDayList">
                <li className="dayOfTheWeek">Torsdag</li>
                <li>Temperatur</li>
                <li>Vindhastighet</li>
                <li>Nederbörd</li>
                <li>Visa mer
                    <span className="material-icons main-icon">
                            chevron_right</span>
                </li>
            </ul>
            <ul className="weekDayList">
                <li className="dayOfTheWeek">Fredag</li>
                <li>Temperatur</li>
                <li>Vindhastighet</li>
                <li>Nederbörd</li>
                <li>Visa mer
                    <span className="material-icons main-icon">
                            chevron_right</span>
                </li>
            </ul>
        </main>
    </div>
  )
}
export default Main;