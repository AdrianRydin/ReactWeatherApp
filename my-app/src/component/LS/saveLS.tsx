import React from "react";
import {useLSState} from "../../hooks/localstorage";
import './saveLS.css'

//Saves the city from the input field to LS
export default function SaveCityToLS() {
    let [cityName, setCityName] = useLSState("", "city")

    return (
        <div>
            <form>
                <p>Here you can save a city</p>
                <input
                    type="text"
                    value={cityName}
                    className="saveCityInputField"
                    onChange={(e) => setCityName(e.target.value)}
                />

                <input
                    type="submit"
                    value="Save a city"
                />
            </form>
        </div>
    )
}