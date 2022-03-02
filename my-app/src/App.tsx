import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
  } from "react-router-dom";
import ReactDOM from "react-dom";
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Api from "./component/Api";
import VisaMer from "./component/VisaMer";
import ChangeCity from "./component/Main";

// import REACT_APP_TOKEN  from "react-dotenv";
// import API from './component/Api';
// import Weather from './component/Api';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={[<Header/>, <Api/>,  <Main />]}> 
                </Route>
                {/* <Route path="/" element={<Header/>} /> */}
                <Route path="/VisaMer" element={[<Header/>,<VisaMer/>]} />
            </Routes>
        </Router>
    )
}


export default App;