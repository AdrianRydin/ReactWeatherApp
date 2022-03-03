import React from "react";
import {LSState} from "../hooks/localstorage";

export default function SaveCityToLS() {
    let [cityName, setCityName] = LSState("", "city")

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}

                />
                <input type="submit" value="Save"/>
            </form>

            {/*<button value={cityName} onChange={(e) => (e.target.value)}>Save city</button>*/}
        </div>
    )
}