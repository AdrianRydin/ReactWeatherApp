import React from "react";
import './pages.css';

export default function ShowMonday() {
    return (
        <div className="PagesContainer">
            <h2>Monday</h2>
            <ul className="DetailPages">
                <li className="DetailListItem">Temperature: </li>
                <li className="DetailListItem">Rainfall: </li>
                <li className="DetailListItem">Wind: </li>
                <li className="DetailListItem">Humidity: </li>
                <li className="DetailListItem">Sunrise: </li>
                <li className="DetailListItem">Sunset: </li>
            </ul>
        </div>
    )
}
