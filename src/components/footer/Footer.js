import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = (props) => {

    return (
        <div className="footer fixed-bottom">
            <div className="footer-links">
                <Link to="about">About</Link><span className="footer-link-slash">/</span>
                <a href="/" target="_blank">Bulletin</a><span className="footer-link-slash">/</span>
                <Link to="/sermons">Sermons</Link><span className="footer-link-slash">/</span>
                <Link to="/contact">Contact</Link><span className="footer-link-slash">/</span>
                <Link to="/live">Watch Live</Link>
            </div>
            <div className="row">
                <div className="col-sm">
                    <p>Church On The Hill<br/>2610 30th St, Hondo, TX 78861<br/>2022 &copy; Church On The Hill</p>
                </div>
                <div className="col-sm">
                    <p className="footer-social-title">STAY CONNECTED</p>
                    <div className="footer-social-links">
                        <a href="https://www.facebook.com/churchonthehillhondo78861/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div className="col-sm d-none d-sm-none d-md-none d-lg-block">
                    <img alt="footer-logo" srcSet="" className="footer-logo float-right" src=""/>
                </div>
            </div>
        </div>
    )
};



export default Footer;