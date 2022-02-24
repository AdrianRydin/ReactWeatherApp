import React from 'react';
import './Main.css'
import { Link } from "react-router-dom";


class Main extends React.Component {

    render() {
        return (
            <div className="main-container">
                <main>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Måndag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                            <Link to="ShowMonday">Visa mer
                            <span className="material-icons main-icon">
                                    chevron_right</span></Link>
                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Tisdag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                        <Link to="ShowTuesday">Visa mer
                            <span className="material-icons main-icon">
                                    chevron_right</span></Link>

                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Onsdag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                        <Link to="ShowWednesday">Visa mer
                            <span className="material-icons main-icon">
                                    chevron_right</span></Link>

                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Torsdag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                        <Link to="ShowThursday">Visa mer
                            <span className="material-icons main-icon">
                                    chevron_right</span></Link>

                    </ul>
                    <ul className="weekDayList">
                        <li className="dayOfTheWeek">Fredag</li>
                        <li>Temperatur</li>
                        <li>Vindhastighet</li>
                        <li>Nederbörd</li>
                        <Link to="ShowFriday">Visa mer
                            <span className="material-icons main-icon">
                                    chevron_right</span></Link>

                    </ul>
                </main>
            </div>
        )
    }
}

export default Main;
