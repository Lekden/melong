import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Banner.css";
import { AiFillHome } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { FaPeoplePulling } from "react-icons/fa6";
import Hamburger from "./Hamburger";
import { MdRateReview } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";



export default function Banner() {
    console.log("Home component rendered");
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <>
            <h1 className="headingmobile">Melong Tours & Treks</h1>
            <div className="wrapper">
                <div className="banner">
                    <div className="banner-background"></div>
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

                        <div className="tabs">
                            {location.pathname !== "/" && (
                                <Link className="home-icon" to="/">
                                    <span className="icon-label" >To Home</span>
                                </Link>
                            )}

                            <Link className="home-icon" to="/knowus">
                                <span className="icon-label"> Reviews</span>
                            </Link>
                            <Link className="home-icon" to="/knowus">
                                <span className="icon-label">Know us</span>
                            </Link>
                            <Link
                                className="home-icon"
                                to="/contactus"
                                style={{ color: '#13f031' }} >
                                <span
                                    className="icon-label"
                                >Contact us</span>
                            </Link>
                            <Link className="home-icon" to="/faq">
                                <span className="icon-label">FAQ</span>
                            </Link>
                        </div>
                        <div onClick={() => navigate('/tripplanner')}
                            className="trip-planner-button">
                            <strong>Plan your trip with us</strong>
                        </div>

                        <div className="mobile-tabs">
                            {location.pathname !== "/" && (
                                <Link className="home-icon" to="/">
                                    <AiFillHome />
                                    <span className="icon-label" >To Home</span>
                                </Link>
                            )}

                            <Link className="home-icon" to="/knowus">
                                <MdRateReview />
                                <span className="icon-label"> Reviews</span>
                            </Link>
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
                <div className="navigation">
                    <div className="dropdown-container">
                        <div className="dropdown">
                            <button className="dropdown-btn">Services <span style={{ fontSize: '12px' }}>▼</span> </button>
                            <div className="dropdown-content">
                                <Link to="/treks">Trek</Link>
                                <Link href="#">Hotel & Logistics</Link>
                                <Link href="#">Guide Service</Link>
                                <Link href="#">Hire Cars</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropdown-btn">Landmarks <span style={{ fontSize: '12px' }}>▼</span></button>
                            <div className="dropdown-content">
                                <Link href="#">Taksang</Link>
                                <Link href="#">Jumolhari</Link>
                                <Link href="#">Paro Rinpung</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropdown-btn">Holiday Checklist <span style={{ fontSize: '12px' }}>▼</span></button>
                            <div className="dropdown-content">
                                <Link href="#">Pre Departure Guide</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
