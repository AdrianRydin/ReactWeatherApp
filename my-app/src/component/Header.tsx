import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div>
    <header>
        <Link className="LinkStart" to="/">Weather App</Link>
        <span className="material-icons" id="hamburgerIcon">
        menu
        </span>
    </header>
    </div>
    )
}

