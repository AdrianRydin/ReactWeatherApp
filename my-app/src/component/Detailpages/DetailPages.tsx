import React from "react";
import '../../pages/pages.css'

//Creates the ul list for all the detail pages
export default function DetailPages() {
    return (
        <div className="PagesContainer">
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