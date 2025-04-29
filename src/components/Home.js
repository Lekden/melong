import React from 'react';
import './Home.css'; // Import the CSS file
import HomeGallery from './HomeGallery'; // Import the HomeGallery component
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Banner from './Banner';



const Home = () => {
    console.log("Home component rendered");
    const navigate = useNavigate(); // Initialize the navigate function
    return (
        <div>   <Banner />
            <div className='wrapper'>
                <div className='home-info'>
                    <div className="moving-text">
                        We are registered with APTO - Assoication of Bhutanese Guide Operators, approved by TCB.
                    </div>
                    <div className="info-container">
                        <div className='welcome-container'>
                            <div className="welcome-text1">
                                <span className="welcome-heading">Whats in store?</span>
                                <br />We are a travel agency with over 20 years of experience dedicated to providing you with the best travel experiences.
                                Our team of experts is here to help you plan your next adventure.</div>

                            <div className="welcome-text">Whether you're looking for a relaxing vacation, an adventurous trek in the mountains,
                                or a cultural experience, our job is to get things working for you. Leave the undesirable job of planning and organizing to us!</div>

                            <br />
                            <div className='info-table' >Currency info</div>
                            <iframe src=" " title="Embedded Content" width="300" height="300"></iframe>
                        </div>

                        <HomeGallery />
                    </div>

                </div>
            </div >
        </div>
    );
};

export default Home;
