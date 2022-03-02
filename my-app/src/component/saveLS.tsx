import React from "react";
import {LSState} from "../hooks/localstorage";
import weatherData from "./Api"

export default function SaveCityToLS() {
    const [city, setCity] = LSState("", "city")


    return (
        <div>
            <button className="saveCityBtn" type="submit" onClick={() => setCity((weatherData.name))}>Save city </button>
        </div>
    )
}