import './Home.css';
import './contactUs.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";


export default function ContactUs() {
    const navigate = useNavigate();


    return (

        <div className='wrapper'>
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


            <div className='contactUs'>
                <div>
                    <h1 className="heading1">Contact Us</h1>
                    <label>Your Name</label>
                    <input type="text" placeholder="Name" className="input-field" />
                    <label>Your Email</label>
                    <input type="email" placeholder="Email" className="input-field" />
                    <label>Your Phone Number</label>
                    <input type="text" placeholder="Subject" className="input-field" />
                    <label>Your Message</label>
                    <textarea placeholder="Message" className="input-field" rows="4"></textarea>
                </div>
                <div>
                    <p style={{ fontWeight: '600', fontSize: '1rem' }}>Contact Information</p>
                    <p>Phone: +975 12345678 || Email: abc@melong.bt</p>
                </div>
                <div className='button-contactUs'>
                    <button className="button" style={{ width: '150px' }} onClick={() => navigate('/')}>
                        Submit
                    </button>
                    <button className="button" style={{ width: '150px' }} onClick={() => navigate('/')}>
                        Back to Home
                    </button>
                </div>
            </div>

        </div>
    )

}