
import { useNavigate } from "react-router-dom";
import './faq.css';
import './Home.css';
import { IoHome } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

export default function Faq() {
    const navigate = useNavigate();

    return (
        <div className="wrapper-faq">
            <div className="banner">
                <div className='banner-image'></div>
                <div className="overlay">
                    <h1 className="heading">Welcome to Melong Tours & Treks</h1>
                    <p className="subheading">Explore the beauty of our world</p>
                </div>
                <div className="tabs">
                    <button className="button" onClick={() => navigate('/')}>
                        Home <IoHome className='icon' />
                    </button>

                    <button className="button" onClick={() => navigate('/faq')}>
                        FAQ <FaQuestion className='icon' />
                    </button>

                    <button className="button" onClick={() => navigate('/contactUs')}>
                        contact us  <MdMarkEmailUnread className="icon2" />
                    </button>
                </div>
            </div>
            <div className='navigation'>
                <div className="dropdown-container">
                    <div className="dropdown">
                        <button className="dropdown-btn">Services</button>
                        <div className="dropdown-content">
                            <a href="#">Travel</a>
                            <a href="#">Trek</a>
                            <a href="#">Guide</a>
                            <a href="#">Others</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-btn">Booking</button>
                        <div className="dropdown-content">
                            <a href="#">Online Form</a>
                            <a href="#">Booking Inquiries</a>
                            <a href="#">Festival Guide</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-btn">Landmarks</button>
                        <div className="dropdown-content">
                            <a href="#">Taksang</a>
                            <a href="#">Jumolhari</a>
                            <a href="#">Paro Rinpung</a>
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
                        the Indian Rupee (INR).</p>
                </div>
                <button className="button" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div >
        </div>
    );
}