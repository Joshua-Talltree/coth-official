import React from 'react';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LivePage from './components/live/LivePage';
import SermonsPage from './components/sermons/SermonsPage';
import SermonSeriesPage from './components/sermons/SermonSeriesPage';
import ContactPage from './components/contact/ContactPage';
import GivingPage from './components/giving/GivingPage';
import WordForTheWeekPage from './components/word-for-the-week/WordForTheWeekPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import COTH from "./components/coth/COTH";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <COTH>
                <Routes>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/live" component={LivePage}/>
                    <Route path="/sermons" exact component={SermonsPage}/>
                    <Route path="/sermons/series/:title" component={SermonSeriesPage}/>
                    <Route path="/sermons/:sermonId/:title" component={SermonsPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/giving" component={GivingPage}/>
                    <Route path="/word-for-the-week" component={WordForTheWeekPage}/>
                </Routes>
            </COTH>
        </BrowserRouter>
    );
}

export default App;