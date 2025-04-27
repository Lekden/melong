import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Home.css';
import './Knowus.css';
import { AiFillHome } from "react-icons/ai";

export default function Knowus() {
    const navigate = useNavigate();

    return (
        <div className="wrapper-knowus">
            <div className="banner">
                <div className='banner-content'>
                    <div className='banner-image'></div>
                    <div className="overlay">
                        <h1 className="heading">Welcome to Melong Tours & Treks</h1>
                        <p className="subheading">Explore the beauty of Bhutan</p>
                        <div className='image-banner'></div>
                    </div>
                    <div className="tabs">

                        <div className="nav-button" onClick={() => navigate('/faq')}>
                            FAQ
                        </div>
                        <div className="nav-button" onClick={() => navigate('/Knowus')}>
                            Know us
                        </div>

                        <div className="nav-button" onClick={() => navigate('/contactUs')}>
                            contact us
                        </div>
                    </div>
                    <Link
                        to="/"
                        style={{
                            marginTop: '4.7rem',
                            color: "black",
                            marginRight: "1%",
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textDecoration: 'none'
                        }}
                    >
                        <AiFillHome size={28} />
                        <span style={{ fontSize: '14px' }}>To Home</span>
                    </Link>

                </div>
            </div>
            <div className='navigation'>
                <div className="dropdown-container">
                    <div className="dropdown">
                        <button className="dropdown-btn">Services</button>
                        <div className="dropdown-content">
                            <Link to="/test">Trek</Link>
                            <Link href="#">Hotel & Logistics</Link>
                            <Link href="#">Guide Service</Link>
                            <Link href="#">Hire Cars</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button style={{ background: "linear-gradient(to right,rgb(106, 165, 168),rgb(206, 223, 228))", color: "black" }} className="dropdown-btn">Booking</button>
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
            <div className="knowus-container">
                <div className="knowus">
                    <h1 className="knowus-title">Know Us</h1>
                    <p>About Melong Tours & Treks
                        With over 20 years of experience, Melong Tours & Treks has been proudly guiding
                        travelers through the breathtaking landscapes of Bhutan.
                        From cultural journeys to adventurous treks, we handle every detail
                        so you can simply enjoy the experience. Let us do the hard work — planning,
                        organizing, and fine-tuning — while you focus on creating unforgettable memories.
                    </p><br />
                    <h3>Meet our team</h3>
                    <p>
                        <strong>Passang Singye<br />
                            Founder & Proprietor </strong><br /><br />
                        A passionate traveler
                        with a deep love for Bhutan’s culture and nature. With decades of experience in
                        the travel industry, he has built Melong on a foundation of trust, expertise, and
                        personal care. <br />
                        Our General Manager brings a wealth of operational experience,
                        ensuring that every tour runs smoothly and every guest feels at home. Together,
                        they lead a team dedicated to making your journey through Bhutan seamless, memorable,
                        and truly special.</p>
                </div>
            </div>
        </div>
    )
}