import React from 'react';
import './LivePage.css'


const LivePage = (props) => {

    const style = {
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '56.25%'
    }

    const iFrameStyle = {
        position: 'absolute',
        left: 0,
        top: 0
    }

    const contents = (
        <div style={style}>
            <iframe
                title="Live"
                tabIndex="-1"
                width="100%"
                height="100%"
                src="https://embed.sermonaudio.com/player/l/saintfieldbaptist/?autoplay=true"
                style={iFrameStyle}
                allowFullScreen
                frameBorder="0"
                scrolling="no"
                allow="autoplay">
            </iframe>
        </div>
    );

    return (
        <div className="live-page">
            <h1>Watch Live</h1>
            <hr/>
            {contents}
        </div>
    )
}

export default LivePage;