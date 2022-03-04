import React from "react";
import {LSState} from "../../hooks/localstorage";
import './saveLS.css'

export default function SaveCityToLS() {
    let [cityName, setCityName] = LSState("", "city")

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={cityName}
                    className="saveCityInputField"
                    onChange={(e) => setCityName(e.target.value)}
                />
                <input type="submit" value="Save a city"/>
            </form>
        </div>
    )
}