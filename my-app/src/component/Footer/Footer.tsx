import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

export default function Footer() {
return (
    <div className="FooterContainer">
        <footer>
      <Link className="ContactUs" to="/Contact">Contact us</Link>
        </footer>
    </div>
)
}

