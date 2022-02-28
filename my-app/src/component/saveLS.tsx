import React, {useEffect, useState} from "react";
import {LSState} from "../hooks/localstorage";

 export default function SaveCityToLS() {
    const [city, setCity] = LSState("", "city")


    return (
        <div>
            <button onClick={() => setCity((" "))}>Lägg till </button>
        </div>
    )
}