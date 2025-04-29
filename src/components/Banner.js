import { Link, useNavigate } from "react-router-dom";
import './Banner.css'
import { AiFillHome } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { FaPeoplePulling } from "react-icons/fa6";


export default function Banner() {
    console.log("Home component rendered");
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <div className='wrapper'>
            <div className="banner">
                <div className='banner-content'>
                    <div className='banner-image'></div>
                    <div className="overlay">
                        <h1 className="heading">Welcome to Melong Tours & Treks</h1>
                        <p className="subheading">Explore the beauty of Bhutan</p>
                    </div>
                    <div className="tabs">
                        <Link
                            className='home-icon'
                            to="/"
                        >
                            <AiFillHome size={28} />
                            <span style={{ fontSize: '14px' }}>To Home</span>
                        </Link>
                        <Link
                            className='home-icon'
                            to="/faq"
                        >
                            <FaQuestion size={28} />

                            <span style={{ fontSize: '14px' }}>FAQ</span>
                        </Link>
                        <Link
                            className='home-icon'
                            to="/knowus"
                        >
                            <FaPeoplePulling size={28} />
                            <span style={{ fontSize: '14px' }}>Know us</span>
                        </Link>
                        <Link
                            className='home-icon'
                            to="/contactus"
                        >
                            <MdContactMail size={28} />
                            <span style={{ fontSize: '14px' }}>Contact us</span>
                        </Link>

                    </div>

                </div>

            </div>
            <div className='navigation'>
                <div className="dropdown-container">
                    <div className="dropdown">
                        <button className="dropdown-btn">Services</button>
                        <div className="dropdown-content">
                            <Link to="/treks">Trek</Link>
                            <Link href="#">Hotel & Logistics</Link>
                            <Link href="#">Guide Service</Link>
                            <Link href="#">Hire Cars</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button style={{ background: "linear-gradient(to right,rgb(56, 131, 41),rgb(225, 238, 225))", color: "black" }} className="dropdown-btn">Booking</button>
                        <div className="dropdown-content">
                            <Link href="#">Manage Booking</Link>
                            <Link href="#">Booking Inquiries</Link>
                            <Link href="#">Festival Guide</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-btn">Landmarks</button>
                        <div className="dropdown-content">
                            <Link href="#">Taksang</Link>
                            <Link href="#">Jumolhari</Link>
                            <Link href="#">Paro Rinpung</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}