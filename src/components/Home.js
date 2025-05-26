import React from "react";
import "./Home.css";
import HomeGallery from "./HomeGallery";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Banner /> {/* This stays outside of layout centering */}

      <div className="home-info">

        <div className="info-container">

          <div className="welcome-text">
            <div className="welcome-heading">
              Welcome to Melong Tours & Treks
            </div>

            <div className="welcome-subheading" style={{ color: '#272525' }}>
              Your trusted guide to unforgettable adventures and heartfelt journeys.
            </div>

            <div> <br /></div>
            <div className="welcome-text-inner">

              <div onClick={() => navigate('/tripplanner')}
                className="trip-planner-button">
                Get an obligation free tour plan from us today!
              </div>
              <div> <br /></div>
              <div onClick={() => navigate('/landmarkteaser')} className="inner-widget-base">
                Discover landmarks that will make your trip unforgettable
              </div>

            </div>



          </div>
          <div className="welcome-text-1" >
            <div className="welcome-heading-1"
            >Sneak peak at Bhutan</div>
            <div className="gallery-container">
              <HomeGallery />
            </div>
          </div>


        </div>
      </div>
    </div >
  );
};

export default Home;
