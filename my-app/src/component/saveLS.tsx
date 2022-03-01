import {LSState} from "../hooks/localstorage";

export default function SaveCityToLS() {
    const [city, setCity] = LSState("", "city")


    return (
        <div>
            {/*<button className="saveCityBtn" onClick={() => setCity((" "))}>Lägg till </button>*/}
        </div>
    )
}