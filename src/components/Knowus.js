import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import logo from "./images/logomelongwhite.png";
import { Link, useLocation } from "react-router-dom";
import Banner from "./Banner";

export default function Knowus() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Banner />


      <div className="container py-5">
        <h1 className="text-center mb-4">Know Us</h1>

        <p className="text-center mb-5">
          About Melong Tours & Treks: With over 20 years of experience, Melong Tours & Treks has been proudly guiding travelers through the breathtaking landscapes of Bhutan. From cultural journeys to adventurous treks, we handle every detail so you can simply enjoy the experience. Let us do the hard work — planning, organizing, and fine-tuning — while you focus on creating unforgettable memories.
        </p>

        <h3 className="mb-4 text-center">Meet Our Team</h3>

        <div className="row g-4 justify-content-center">

          {/* Team Member 1 */}
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              {/* Optional: Add <img src={...} className="card-img-top" /> if you have a photo */}
              <div className="card-body">
                <h5 className="card-title">Passang Singye</h5>
                <h6 className="card-subtitle mb-2 text-muted">Founder & Proprietor</h6>
                <p className="card-text">
                  A passionate traveler with a deep love for Bhutan’s culture and nature. With decades of experience in the travel industry, he has built Melong on a foundation of trust, expertise, and personal care.
                  <br /><br />
                  Our General Manager brings a wealth of operational experience, ensuring that every tour runs smoothly and every guest feels at home. Together, they lead a team dedicated to making your journey through Bhutan seamless, memorable, and truly special.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              {/* Optional: Add <img src={...} className="card-img-top" /> if you have a photo */}
              <div className="card-body">
                <h5 className="card-title">Gaula</h5>
                <h6 className="card-subtitle mb-2 text-muted">Head Guide</h6>
                <p className="card-text">
                  With over 15 years of experience in guiding tours and treks across Bhutan, our Head Guide is a passionate expert dedicated to offering you an unforgettable adventure. Highly knowledgeable about Bhutan’s rich culture, history, and landscapes, they ensure every journey is safe, informative, and enjoyable. Their leadership and commitment to quality service make them an integral part of the team, helping travelers experience the true essence of Bhutan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
