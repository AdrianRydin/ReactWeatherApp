import react from 'react';
import './Main.css'

export default function Main() {
    return (
        <div>
        <main>
            <h2>Göteborg</h2>

            <div className="hamburger">
                <ul className="hamburger-content">
                    <li>Göteborg</li>
                    <li>Stockholm</li>
                    <li>Malmö</li>
                    <li>Umeå</li>
                </ul>
            </div>
            <ul className="weekDayList">
                <li className="dayOfTheWeek">Måndag</li>
                <li className="infoWeekDay">Temperatur Vindhastighet Nederbörd Visa mer</li>
                <li className="dayOfTheWeek">Tisdag</li>
                <li className="infoWeekDay">Temperatur Vindhastighet Nederbörd Visa mer</li>
                <li className="dayOfTheWeek">Onsdag</li>
                <li className="infoWeekDay">Temperatur Vindhastighet Nederbörd Visa mer</li>
                <li className="dayOfTheWeek">Torsdag</li>
                <li className="infoWeekDay">Temperatur Vindhastighet Nederbörd Visa mer</li>
                <li className="dayOfTheWeek">Fredag</li>
                <li className="infoWeekDay">Temperatur Vindhastighet Nederbörd Visa mer</li>
            </ul>
        </main>
        </div>
    )

}