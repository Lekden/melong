
import { useNavigate } from "react-router-dom";
import './faq.css';
import './Home.css';
import { Link } from 'react-router-dom';


export default function Faq() {
    const navigate = useNavigate();

    return (
        <div className="wrapper-faq">
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
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h3>What is the best time to visit Bhutan?</h3>
                    <p>The best time to visit Bhutan is during the spring
                        (March to May) and autumn (September to November) seasons when the weather is pleasant and the landscapes are stunning.</p>
                </div>
                <div className="faq-item">
                    <h3>Do I need a visa to visit Bhutan?</h3>
                    <p>Yes, all foreign visitors to Bhutan require a visa.
                        You can apply for a visa through a licensed travel agency in Bhutan.</p>
                </div>
                <div className="faq-item">
                    <h3>What currency is used in Bhutan?</h3>
                    <p>The currency used in Bhutan is the Ngultrum (BTN), which is pegged to
                        the Indian Rupee (INR). <br /> USD, AUD and most major currencies are accepted for exdchange in Bhutanese bannks.</p>

                </div>
                <div className="faq-item">
                    <h3>Is it safe to travel in Bhutan?</h3>
                    <p>Yes, Bhutan is considered one of the safest countries to travel to. The crime rate is low, and the locals are friendly and welcoming.</p>


                </div>
                <button className="button" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div >
        </div >
    );
}