import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

const treks = [
  {
    name: "Jumolhari Trek",
    duration: "7-9 days",
    description:
      "A scenic trek to the base of Mount Jumolhari, offering stunning views of Bhutan's tallest mountains and pristine landscapes.",
    preparation:
      "Good fitness level, warm clothing for cold nights, trekking gear.",
  },
  {
    name: "Druk Path Trek",
    duration: "5-6 days",
    description:
      "A beautiful trek connecting Paro and Thimphu, passing through alpine lakes, ridges, and old dzongs (fortresses).",
    preparation: "Moderate fitness, basic trekking equipment, warm layers.",
  },
  {
    name: "Snowman Trek",
    duration: "25-30 days",
    description:
      "One of the hardest treks in the world, traversing remote Himalayan regions and crossing high passes over 5,000 meters.",
    preparation:
      "Excellent physical condition, acclimatization training, cold weather survival gear.",
  },
  {
    name: "Dagala Thousand Lakes Trek",
    duration: "5-6 days",
    description:
      "A scenic trek through beautiful high-altitude lakes, offering great views of the Himalayan ranges.",
    preparation: "Moderate fitness, waterproof clothing, good hiking boots.",
  },
  {
    name: "Merak Sakteng Trek",
    duration: "6-7 days",
    description:
      "A cultural trek into the isolated valleys of eastern Bhutan, home to the semi-nomadic Brokpa people.",
    preparation: "Moderate fitness, rain protection, cultural sensitivity.",
  },
];

const Trek = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Trek cards */}
      <div className="container py-4">
        <h1 className="text-center mb-4">Treks in Bhutan</h1>
        <div className="row g-3">
          {treks.map((trek, index) => (
            <div className="col-12" key={index}>
              <div
                className={`card p-3 shadow-sm ${index % 2 === 0 ? "bg-light" : "bg-white"
                  }`}
              >
                <h2 className="card-title text-primary">{trek.name}</h2>
                <p><strong>Duration:</strong> {trek.duration}</p>
                <p><strong>Description:</strong> {trek.description}</p>
                <p><strong>Preparation:</strong> {trek.preparation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Trek;
