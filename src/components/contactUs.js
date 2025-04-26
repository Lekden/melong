import './Home.css';
import './contactUs.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function ContactUs() {
    const navigate = useNavigate();


    return (

        <div className='wrapper-contactUs'>
            <div className="banner">
                <div className='banner-image'></div>
                <div className="overlay">
                    <h1 className="heading">Welcome to Melong Tours & Treks</h1>
                    <p className="subheading">Explore the beauty of Bhutan</p>
                </div>
                <div className="tabs">
                    <div className="nav-button" onClick={() => navigate('/')}>
                        Home
                    </div>

                    <div className="nav-button" onClick={() => navigate('/faq')}>
                        FAQ
                    </div>
                    <div className="nav-button" onClick={() => navigate('/knowus')}>
                        Know us
                    </div>

                    <div className="nav-button" onClick={() => navigate('/contactUs')}>
                        contact us
                    </div>
                </div>
            </div>
            <div className='navigation'>
                <div className="dropdown-container">
                    <div className="dropdown">
                        <button className="dropdown-btn">Services</button>
                        <div className="dropdown-content">
                            <Link to="/test">Travel</Link>
                            <Link href="#">Trek</Link>
                            <Link href="#">Guide</Link>
                            <Link href="#">Others</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-btn">Booking</button>
                        <div className="dropdown-content">
                            <Link href="#">Online Form</Link>
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
                    <h1 className="heading">Contact Us</h1>
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