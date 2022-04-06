import React from 'react';
import {NavLink, Link} from "react-router-dom";
import './Header.css'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }

    navBarToggleClick = (event) => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    navLinkClick = (event) => {
        this.setState({
            collapsed: true
        });
    }

    render() {

        let collapsedClass = "collapse";

        if (!this.state.collapsed) {
            collapsedClass = "";
        }


        return (
            <nav className="coth-navbar navbar fixed-top navbar-expand-xl navbar-light">
                <Link to="/" className="navbar-brand" onClick={this.navLinkClick}>
                    <img className="coth-navbar-logo" src="" srcSet="" alt="Church On The Hill"/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navBarToggleClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={collapsedClass + " navbar-collapse coth-navbar-collapse"} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav coth-navbar-content">
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/sermons" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Sermons</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/live" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Watch Live</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/giving" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Giving</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/word-of-the-week" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Word Of The Day</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    };
}



export default Header;