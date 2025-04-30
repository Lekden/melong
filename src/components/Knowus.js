import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Knowus.css";
import { AiFillHome } from "react-icons/ai";
import Banner from "./Banner";

export default function Knowus() {
  const navigate = useNavigate();

  return (
    <div>
      <Banner />
      <div className="knowus">
        <h1 className="knowus-title">Know Us</h1>
        <p>
          About Melong Tours & Treks With over 20 years of experience, Melong
          Tours & Treks has been proudly guiding travelers through the
          breathtaking landscapes of Bhutan. From cultural journeys to
          adventurous treks, we handle every detail so you can simply enjoy the
          experience. Let us do the hard work — planning, organizing, and
          fine-tuning — while you focus on creating unforgettable memories.
        </p>
        <br />
        <h3>Meet our team</h3>
        <div className="knowus-intro">
          <div>
            <strong>
              Passang Singye
              <br />
              Founder & Proprietor{" "}
            </strong>
            <br />
            <br />
            A passionate traveler with a deep love for Bhutan’s culture and
            nature. With decades of experience in the travel industry, he has
            built Melong on a foundation of trust, expertise, and personal care.{" "}
            <br />
            Our General Manager brings a wealth of operational experience,
            ensuring that every tour runs smoothly and every guest feels at
            home. Together, they lead a team dedicated to making your journey
            through Bhutan seamless, memorable, and truly special.
          </div>
          <br />
          <div>
            <strong>
              {" "}
              Sonam Tshering
              <br />
              Head Guide
            </strong>
            <br />
            <br />
            With over 15 years of experience in guiding tours and treks across
            Bhutan, our Head Guide is a passionate expert dedicated to offering
            you an unforgettable adventure. Highly knowledgeable about Bhutan’s
            rich culture, history, and landscapes, they ensure every journey is
            safe, informative, and enjoyable. Their leadership and commitment to
            quality service make them an integral part of the team, helping
            travelers experience the true essence of Bhutan.
          </div>
        </div>
      </div>
    </div>
  );
}
