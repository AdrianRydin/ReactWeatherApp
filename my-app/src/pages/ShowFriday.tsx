import React from "react";
import './pages.css';

export default function ShowFriday() {
    return (
        <div className="PagesContainer">
            <h2>Friday</h2>
            <ul className="DetailPages">
                <li>Temperature: </li>
                <li>Rainfall: </li>
                <li>Wind: </li>
                <li>Humidity: </li>
                <li>Sunrise: </li>
                <li>Sunset: </li>
            </ul>
        </div>
    )
}

