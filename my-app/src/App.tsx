import React, {useState} from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
import Api, {WeatherData} from "./component/Api/Api";
import {Routes, Route} from "react-router-dom";
import ShowToday from "./pages/ShowToday";
import ShowTomorrow from "./pages/ShowTomorrow";
import ShowThirdDay from "./pages/ShowThirdDay";
import ShowFourthDay from "./pages/ShowFourthDay";
import ShowLastDay from "./pages/ShowLastDay";
import Error from "./component/ErrorBoundry/ErrorBoundry";
import ContactForm from "./component/Contact/ContactForm";



function App() {
    const [weatherData, setWeatherData] = useState<WeatherData>();
    const handleSubmit = () => {
    };

    return (
        <div className="App">
            <Header />


            <Error>
                <Routes>
                    <Route path="/" element={<Api weatherData={weatherData} onNewWeatherData={setWeatherData}/>}/>
                    <Route path="/" element={<Main onNewWeatherData={setWeatherData}/>}/>
                    <Route path="/" element={<Header/>}/>
                    <Route path="/ShowToday" element={<ShowToday weatherData={weatherData} onNewWeatherData={setWeatherData}/>}/>
                    <Route path="/ShowTomorrow" element={<ShowTomorrow weatherData={weatherData} onNewWeatherData={setWeatherData}/>}/>
                    <Route path="/ShowThirdDay" element={<ShowThirdDay weatherData={weatherData} onNewWeatherData={setWeatherData}/>}/>
                    <Route path="/ShowFourthDay" element={<ShowFourthDay weatherData={weatherData} onNewWeatherData={setWeatherData}/>}/>
                    <Route path="/ShowLastDay" element={<ShowLastDay weatherData={weatherData} onNewWeatherData={setWeatherData}/>}/>
                    <Route path="/Contact" element={<ContactForm onSubmit={handleSubmit}/>}
                    />
                </Routes>
            </Error>

            <Footer />
        </div>
    );
}

export default App;
