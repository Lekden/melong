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
        <div className="moving-text">
          We are registered with APTO - Association of Bhutanese Guide Operators, approved by TCB.
        </div>

        <div className="info-container">

          <div className="welcome-text">
            <div className="welcome-heading">What's in store?</div>
            <p>
              We are a travel agency with over 20 years of experience dedicated to
              providing you with the best travel experiences.

              Whether you're looking for a relaxing vacation, an adventurous trek, or a cultural experience — we've got you.
            </p>
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
