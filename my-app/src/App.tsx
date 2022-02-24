import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Api from "./component/Api";


// import REACT_APP_TOKEN  from "react-dotenv";
// import API from './component/Api';
// import Weather from './component/Api';


function App() {
    return (
        <div className="App">
            <Header/>
            <Api />
            <Main/>
        </div>
    )
}

export default App;