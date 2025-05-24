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
            <div className="welcome-heading">Melong Tours & Treks</div>


            <h2 className="welcome-text-inner">
              Discover Bhutan’s beauty with Melong Tours & Treks — your trusted guide to unforgettable adventures and heartfelt journeys.
            </h2>


            <div className="welcome-text-inner">
              <div onClick={() => navigate('/knowus')} className="inner-widget-base inner-widget">
                <strong>Festivals to Catch</strong> <br />
                Celebrate the vibrant local culture you simply can’t miss!<br />
                <span style={{ fontStyle: 'italic', fontSize: '1rem' }}>click to read more</span>
              </div>

              <div onClick={() => navigate('/landmarkteaser')} className="inner-widget-base inner-widget-1">
                <strong>Must-See Landmarks</strong> <br />
                Discover iconic spots that will make your trip unforgettable.
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
    </div>
  );
};

export default Home;
