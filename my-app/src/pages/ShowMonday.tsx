import React from "react";
import './pages.css';

function ShowMonday() {
    return (
        <div className="PagesContainer">
            <h2>Måndag</h2>
            <ul className="DetailPages">
                <li>Temperatur: </li>
                <li>Nederbörd: </li>
                <li>Vind: </li>
                <li>Luftfuktighet: </li>
                <li>Soluppgång: </li>
                <li>Soluppgång: </li>
            </ul>
        </div>
    )
}


export default ShowMonday;