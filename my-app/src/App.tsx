import React from "react";
import {render} from "react-dom";
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Api from "./component/Api";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route path="/Monday" element={<ShowMonday/>}/>
                        <Route path="/Tuesday" element={<ShowTuesday/>}/>
                        <Route path="/Wednesday" element={<ShowWednesday/>}/>
                        <Route path="/Thursday" element={<ShowThursday/>}/>
                        <Route path="/Friday" element={<ShowFriday/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App;