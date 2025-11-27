import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3">
            <div className="container">
                <div className="row">

                    {/* Brand Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Melong Tours & Treks</h5>
                        <p>Treks Beyond Trails. Stories Beyond Mountains.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><Link className="text-light text-decoration-none" to="/">Home</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/tripplanner">Trip Planner</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/landmarkteaser">Landmarks</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4 mb-4">
                        <h6 className="fw-bold">Contact Us</h6>
                        <p className="mb-1">Email: info@melongtours.bt</p>
                        <p className="mb-1">Phone: +975-12345678</p>
                        <p className="mb-0">Address: Thimphu, Bhutan</p>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-4 pt-3 border-top border-secondary">
                    © {new Date().getFullYear()} Melong Tours & Treks. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
