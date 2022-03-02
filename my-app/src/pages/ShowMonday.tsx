import React from "react";
import './pages.css';

export default function ShowMonday() {


    
    return (
        <div className="PagesContainer">
            <h2>Today 15:00</h2>
            <ul className="DetailPages">
                <li className="DetailListItem">Temperature: 7 °C </li>
                <li className="DetailListItem">Wind: 2,41 m/s </li>
                <li className="DetailListItem">Humidity: 73%</li>
                <li className="DetailListItem">Sunrise: 07:01</li>
                <li className="DetailListItem">Sunset: 17:45</li>
            </ul>
            <h2>Today 18:00</h2>
            <ul className="DetailPages">
                <li className="DetailListItem">Temperature: 6 °C </li>
                <li className="DetailListItem">Wind: 1,74 m/s </li>
                <li className="DetailListItem">Humidity: 78%</li>
                <li className="DetailListItem">Sunrise: 07:01</li>
                <li className="DetailListItem">Sunset: 17:45</li>
            </ul>
        </div>
    )
}
