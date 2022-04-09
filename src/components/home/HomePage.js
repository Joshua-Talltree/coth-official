import React from 'react';
import HomePageSlider from './HomePageSlider';
import HomePageIntro from './HomePageIntro';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
// import Map from '../map/Map';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home-page">
            <HomePageSlider/>
            <HomePageIntro/>
            <HomePageText/>
            <HomePageMeetingTimes/>
        </div>
    )
}

