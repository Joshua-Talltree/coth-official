import React from 'react';
import Page from '../page/Page';
import Map from '../map/Map';
import './ContactPage.css'


const ContactPage = (props) => {
    return (
        <Page>
            <Map fullWidth={true}/>
            <div className="contact-page">
                <br/>
                <p>
                    Church On The Hill<br/>
                    2610 30th St<br/>
                    Hondo, TX 78245<br/>
                </p>
                <br/>
                <a href="mailto:churchonthehill@gmail.com"><i className="far fa-envelope"></i> Email Us</a>
            </div>
        </Page>
    )
}

export default ContactPage;
