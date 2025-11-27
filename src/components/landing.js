import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";

import Footer from "./Footer";
import { TbTrekking } from "react-icons/tb";
import { PiPersonSimpleHikeBold } from "react-icons/pi";
import { BsFillHousesFill, BsPersonArmsUp } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import './Landing.css';
import Banner from "./Banner";
import bgImg from "./images/taksang.jpg";



export default function Landing() {
    const navigate = useNavigate();
    const location = useLocation();

    const services = [
        { icon: <TbTrekking size={40} />, title: "Trekking", desc: "Enjoy Bhutanese treks through scenic mountains and lush valleys.", link: "/treks" },
        { icon: <PiPersonSimpleHikeBold size={40} />, title: "Hiking", desc: "Discover hidden trails and breathtaking views on foot." },
        { icon: <BsFillHousesFill size={40} />, title: "Logistics", desc: "We manage your travel plans, gear, and local transport." },
        { icon: <BsPersonArmsUp size={40} />, title: "Guide", desc: "Experienced guides share stories and ensure a safe journey." },
        { icon: <FaCarSide size={40} />, title: "Hire Cars", desc: "Comfortable vehicles with drivers for city and rural travel." },
        { icon: <FaRegCalendarAlt size={40} />, title: "Tour Plan", desc: "Click here for an obligation-free tour plan.", link: "/tripplanner" }
    ];

    return (
        <div className="w-100 p-0 m-0 bg-dark" style={{ overflowX: "hidden" }}>

            <Banner />

            {/*background image*/}
            <div
                className="w-100 py-5 mb-15"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",


                }}
            >
                {/* SERVICES GRID */}
                <div className="w-100">
                    <h2 className="text-left fw-bold mb-5 text-white px-5">Explore Our Services</h2>


                    <div className="row g-4 px-3 px-md-5">
                        {services.map((s, idx) => (
                            <div key={idx} className="col-12 col-md-6 col-lg-4">
                                <div
                                    className="card h-100 shadow-sm border-0 p-2 service-card"
                                    style={{
                                        cursor: s.link ? "pointer" : "default",
                                        opacity: 0.85,
                                        backgroundColor: idx === services.length - 1 ? "#e2e071ff" : undefined, // only last card
                                    }}
                                    onClick={() => s.link && navigate(s.link)}
                                >
                                    <div className="card-body d-flex">
                                        <div className="me-3">{s.icon}</div>
                                        <div>
                                            <h5 className="fw-bold">{s.title}</h5>
                                            <p>{s.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>



                    {/* CTA BUTTON */}
                    <div className="text-center mt-5 px-2 px-sm-0">
                        <button className="btn btn-warning btn-lg px-4" style={{ backgroundColor: "#85bbd4ff", borderColor: "#a0d8f1", color: "#000" }} onClick={() => navigate("/landmarkteaser")}>
                            Click to discover landmarks that will make your trip unforgettable
                        </button>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    );
}
