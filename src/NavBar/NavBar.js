import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../NavBar/style.css';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3A8jaWYnBSgDuFYD9F4WpzNraBjl6iuWKQ&usqp=CAU" alt="The Dojo Blog Logo" />
            </div>
            <div className={`navbar-links ${showLinks ? "show-links" : ""}`}>
                <Link to="/" className="navbar-link">Movies</Link>
                <Link to="/series" className="navbar-link">Series</Link>
                <Link to="/kids" className="navbar-link">Kids</Link>
            </div>
            <div className="hamburger-menu" onClick={() => setShowLinks(!showLinks)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z" /></svg>
            </div>
        </nav>
    );
}

export default Navbar;
