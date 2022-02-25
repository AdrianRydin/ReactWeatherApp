import React from "react";
import {render} from "react-dom";
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Api from "./component/Api";
import {Routes, Route} from "react-router-dom";
import ShowMonday from "./pages/ShowMonday"
import ShowTuesday from "./pages/ShowTuesday"
import ShowWednesday from "./pages/ShowWednesday";
import ShowThursday from "./pages/ShowThursday";
import ShowFriday from "./pages/ShowFriday";


function App() {
    return (
        <div className="App">
            <Header/>
            <Api/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                        <Route path="/" element={<Header/>}/>
                        <Route path="/ShowMonday" element={<ShowMonday/>}/>
                        <Route path="/ShowTuesday" element={<ShowTuesday/>}/>
                        <Route path="/ShowWednesday" element={<ShowWednesday/>}/>
                        <Route path="/ShowThursday" element={<ShowThursday/>}/>
                        <Route path="/ShowFriday" element={<ShowFriday/>}/>

                </Routes>
        </div>
    )
}

export default App;