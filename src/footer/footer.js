import React from 'react';
import "./styles.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3A8jaWYnBSgDuFYD9F4WpzNraBjl6iuWKQ&usqp=CAU" alt="Plex Logo" className="logoImg" />
                </div>
                <div className="footer-columns">
                    <div className="column">
                        <h3>Company</h3>
                        <ul className="list">
                            <li> About</li>
                            <li> Careers</li>
                            <li> Our Culture</li>
                            <li> Giving</li>
                            <li> Partners</li>
                            <li> Press Room</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Plex Gear</h3>
                        <ul className="list">
                            <li> Plex Blog</li>
                            <li> Plex Pass</li>
                            <li> Go Premium</li>
                            <li> Plexamp</li>
                            <li> Plex Labs</li>
                            <li> Get Perks</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Downloads</h3>
                        <ul className="list">
                            <li> Plex Media Server</li>
                            <li> Apps & Devices</li>
                            <li> Where to Watch</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Support</h3>
                        <ul className="list">
                            <li> Finding Help</li>
                            <li> Support Library</li>
                            <li> Community Forums</li>
                            <li> Billing Questions</li>
                            <li> Status</li>
                            <li> Bug Bounty</li>
                            <li> CordCutter</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Get in Touch</h3>
                        <ul className="list">
                            <li> Watch Free</li>
                            <li> TV Channel Finder</li>
                            <li> What to Watch</li>
                            <li> What To Watch on Hulu</li>
                            <li> A24 collection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
