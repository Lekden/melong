import React from 'react';
import './Home.css'; // Import the CSS file
import HomeGallery from './HomeGallery'; // Import the HomeGallery component
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { IoHome } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";



const Home = () => {
    console.log("Home component rendered");
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <div className="wrapper">
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


            <div className="info-container">
                <div className='welcome-container'>

                    <p className="welcome-text"> <span className="welcome-heading">Whats in store?</span>
                        <br />We are a travel agency with over 20 years of experience dedicated to providing you with the best travel experiences.
                        Our team of experts is here to help you plan your next adventure.</p>
                    <p className="welcome-text">Whether you're looking for a relaxing vacation, an adventurous trek in the mountains,
                        or a cultural experience, our job is to get things working for you. Leave the undesirable job of planning and organizing to us!</p>
                </div>


                <HomeGallery />


            </div>
        </div >

    );
};

export default Home;
