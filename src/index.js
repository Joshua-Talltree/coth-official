import React from 'react';
import {createRoot} from 'react-dom/client';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LivePage from './components/live/LivePage';
import SermonsPage from './components/sermons/SermonsPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import COTH from "./components/coth/COTH";
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (
    <BrowserRouter>
        <COTH>
            <Routes>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/live" component={LivePage}/>
                <Route path="/sermons" exact component={SermonsPage}/>
            </Routes>
        </COTH>
    </BrowserRouter>
)

const container = document.getElementById('root')
const root = createRoot(container);

root.render(<Index tab="home-page"/>)