import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">

                <div className="footer-section">
                    <h3 className="footer-title">Melong Tours & Treks</h3>
                    <p>Crafting journeys, building memories.</p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tripplanner">Trip Planner</Link></li>
                        <li><Link to="/landmarkteaser">Landmarks</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-heading">Contact Us</h4>
                    <p>Email: info@melongtours.bt</p>
                    <p>Phone: +975-12345678</p>
                    <p>Address: Thimphu, Bhutan</p>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Melong Tours & Treks. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
