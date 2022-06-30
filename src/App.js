import React from "react";
import MainComponent from "./components/Main";
import NavComponent from "./components/NavBar";
import {Routes , Route} from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import News from "./components/News";
import Education from "./components/Education";
import Forecast from "./components/Forecast";
import Error from './components/Error';

export default function App(){


        
    
    return(
        <div>
            <NavComponent/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/education' element={<Education/>}/>
                <Route path='/forecast' element={<Forecast/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
          
        </div>
    )
}