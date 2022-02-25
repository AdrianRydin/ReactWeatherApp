import React from 'react';
import './Main.css'
import {Link} from "react-router-dom";


 export default class Main extends React.Component {

    render() {
        return (
            <div className="main-container">
                <main>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Måndag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                        <Link className="LinkShowMore" to="/ShowMonday">Visa mer</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Tisdag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                        <Link className="LinkShowMore" to="/ShowTuesday">Visa mer</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Onsdag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                        <Link className="LinkShowMore" to="/ShowWednesday">Visa mer</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Torsdag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                        <Link className="LinkShowMore" to="/ShowThursday">Visa mer</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Fredag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                        <Link className="LinkShowMore" to="/ShowFriday">Visa mer</Link>
                        <span className="material-icons main-icon">chevron_right</span>
                    </ul>
                </main>
            </div>
        )
    }
}

