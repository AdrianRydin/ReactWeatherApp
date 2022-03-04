import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import TodaysDate from "../Todaysdate/TodaysDate";


export default function Header(){
    return(
        <div className="HeaderContainer">
    <header>
        <TodaysDate/>
        <Link className="LinkStart" to="/">Weather App</Link>
        <span className="material-icons" id="hamburgerIcon">
        menu
        </span>
    </header>
    </div>
    )
}


