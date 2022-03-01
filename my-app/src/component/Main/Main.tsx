import React from 'react';
import './Main.css'
import {Link} from "react-router-dom";


export default class Main extends React.Component {

    render() {
        return (
            <div className="main-container">
                <main>

                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Monday</li>
                        <li>Temperature</li>
                        <li>Wind speed</li>
                        <li>Rainfall</li>
                        <Link className="LinkShowMore" to="/ShowMonday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Tuesday</li>
                        <li>Temperature</li>
                        <li>Wind speed</li>
                        <li>Rainfall</li>
                        <Link className="LinkShowMore" to="/ShowTuesday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Wednesday</li>
                        <li>Temperature</li>
                        <li>Wind speed</li>
                        <li>Rainfall</li>
                        <Link className="LinkShowMore" to="/ShowWednesday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Thursday</li>
                        <li>Temperature</li>
                        <li>Wind speed</li>
                        <li>Rainfall</li>
                        <Link className="LinkShowMore" to="/ShowThursday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Friday</li>
                        <li>Temperature</li>
                        <li>Wind speed</li>
                        <li>Rainfall</li>
                        <Link className="LinkShowMore" to="/ShowFriday">Show more</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <div className="WarningsBox">
                    <p className="WeatherWarning">Weather warnings</p>
                    <p>Storm in South of Sweden</p>
                    </div>

                </main>
            </div>
        )
    }
}

