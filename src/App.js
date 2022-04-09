import React from 'react';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LivePage from './components/live/LivePage';
import SermonsPage from './components/sermons/SermonsPage';
import SermonSeriesPage from './components/sermons/SermonSeriesPage';
import ContactPage from './components/contact/ContactPage';
import GivingPage from './components/giving/GivingPage';
import WordForTheWeekPage from './components/word-for-the-week/WordForTheWeekPage';
import { Routes, BrowserRouter, Route} from "react-router-dom";
import COTH from "./components/coth/COTH";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <BrowserRouter>
                <COTH>
                    <Routes>
                        <Route path="/" element={<HomePage/>} exact/>
                        <Route path="/about" element={<AboutPage/>} exact/>
                        <Route path="/live" element={<LivePage/>}/>
                        <Route path="/sermons" element={<SermonsPage/>} exact/>
                        <Route path="/sermons/series/:title" element={<SermonSeriesPage/>}/>
                        <Route path="/sermons/:sermonId/:title" element={<SermonsPage/>}/>
                        <Route path="/contact" element={<ContactPage/>} exact/>
                        <Route path="/giving" element={<GivingPage/>}/>
                        <Route path="/word-for-the-week" element={<WordForTheWeekPage/>} exact />
                    </Routes>
                </COTH>
            </BrowserRouter>
        </div>
    );
}

export default App;