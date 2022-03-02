import React from "react";
import './App.css';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Footer from "./component/Footer/Footer";
import Api from "./component/Api";
import {Routes, Route} from "react-router-dom";
import ShowMonday from "./pages/ShowMonday"
import ShowTuesday from "./pages/ShowTuesday"
import ShowWednesday from "./pages/ShowWednesday";
import ShowThursday from "./pages/ShowThursday";
import ShowFriday from "./pages/ShowFriday";
import Error from "./component/ErrorBoundry/ErrorBoundry";
import ContactForm from "./component/Contact/ContactForm";
import  {Form} from "./component/Contact/ContactForm"


function App() {
    const handleSubmit = (newForm: Form) => {}

    return (
        <div className="App">
            <Header/>

            <Error>
                <Api/>
            </Error>

            <Error>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/" element={<Header/>}/>
                <Route path="/ShowMonday" element={<ShowMonday />} />
                <Route path="/ShowTuesday" element={<ShowTuesday />} />
                <Route path="/ShowWednesday" element={<ShowWednesday />} />
                <Route path="/ShowThursday" element={<ShowThursday />} />
                <Route path="/ShowFriday" element={<ShowFriday />} />
                <Route path="/Contact" element={<ContactForm onSubmit={handleSubmit} />} />
            </Routes>
            </Error>

            <Footer/>
        </div>
    )
}

export default App;