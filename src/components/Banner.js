import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Banner.css";
import { AiFillHome } from "react-icons/ai";
import { FaQuestion, FaPeoplePulling } from "react-icons/fa6";
import { MdContactMail, MdRateReview } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import Hamburger from "./Hamburger";

export default function Banner() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div className="wrapper">
                <div className="banner">

                    {/* <div className="banner-background"></div> */}
                    <div className="hamburger">
                        <Hamburger />
                    </div>
                    <div className="banner-content">
                        <div className="logo">
                            <div className="banner-image"></div>
                            <div className="text-block">
                                <p className="heading">Melong Tours & Treks</p>
                                <p className="subheading">Treks Beyond Trails. Stories Beyond Mountains.</p>
                            </div>
                        </div>

                        <div className="dropdown-container">
                            <div className="dropdown">
                                <button className="dropdown-btn">Services <span className="arrow">&#9662;</span></button>
                                <div className="dropdown-content">
                                    <Link to="/treks">Trek</Link>
                                    <Link to="#">Hotel & Logistics</Link>
                                    <Link to="#">Guide Service</Link>
                                    <Link to="#">Hire Cars</Link>
                                </div>
                            </div>

                            <div className="dropdown">
                                <button className="dropdown-btn">Placeholder <span className="arrow">&#9662;</span></button>
                                <div className="dropdown-content">
                                    <Link to="#">option1</Link>
                                    <Link to="#">option2</Link>
                                    <Link to="#">option3</Link>
                                </div>
                            </div>

                            <div className="dropdown">
                                <button className="dropdown-btn">Holiday Checklist <span className="arrow">&#9662;</span> </button>
                                <div className="dropdown-content">
                                    <Link to="#">Pre Departure Guide</Link>
                                </div>
                            </div>
                        </div>
                        <div className="tabs-container">
                            <div className="tabs">
                                {location.pathname !== "/" && (
                                    <Link className="home-icon" to="/">
                                        <span className="icon-label">To Home</span>
                                    </Link>
                                )}
                                <Link className="home-icon" to="/knowus">
                                    <span className="icon-label">Know us</span>
                                </Link>
                                <Link className="home-icon contact-link" to="/contactus">
                                    <span className="icon-label">Contact us</span>
                                </Link>
                                <Link className="home-icon" to="/faq">
                                    <span className="icon-label">FAQ</span>
                                </Link>
                            </div>

                        </div>

                        <div className="mobile-tabs">
                            {location.pathname !== "/" && (
                                <Link className="home-icon" to="/">
                                    <AiFillHome />
                                    <span className="icon-label">To Home</span>
                                </Link>
                            )}

                            <Link className="home-icon" to="/knowus">
                                <FaPeoplePulling />
                                <span className="icon-label">Know us</span>
                            </Link>
                            <Link className="home-icon" to="/contactus">
                                <MdContactMail />
                                <span className="icon-label">Contact us</span>
                            </Link>
                            <Link className="home-icon" to="/faq">
                                <FaQuestion />
                                <span className="icon-label">FAQ</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="banner-bottom">
                    <div className="moving-text">
                        Your trusted guide to unforgettable adventures and heartfelt journeys.
                        We are registered with the <strong>Tourism Council of Bhutan</strong> and <strong>ABTO (Association of Bhutanese Tour Operators)</strong>.
                    </div>
                </div>



            </div >
        </>
    );
}