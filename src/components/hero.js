import React from 'react';

function HeroDropdown() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Explore Bhutan Like Never Before</h1>
                <p>Choose your experience and let us take care of the rest</p>
                <div className="dropdown-group">
                    <select>
                        <option value="">Select Theme</option>
                        <option value="landmarks">Landmarks</option>
                        <option value="festivals">Festivals</option>
                        <option value="adventure">Adventure</option>
                        <option value="culture">Culture</option>
                    </select>
                    <select>
                        <option value="">Duration</option>
                        <option value="1-3">1-3 Days</option>
                        <option value="4-7">4-7 Days</option>
                        <option value="8+">1+ Week</option>
                    </select>
                    <button>Search</button>
                </div>
            </div>

            {/* Styles */}
            <style>{`
        .hero-section {
          background: url('https://source.unsplash.com/1600x600/?bhutan,travel') center/cover no-repeat;
          color: white;
          padding: 100px 20px;
          text-align: center;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
        }

        .hero-content {
          background-color: rgba(0, 0, 0, 0.5);
          padding: 40px;
          border-radius: 12px;
          max-width: 700px;
          width: 100%;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }

        .dropdown-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        select, button {
          padding: 10px 15px;
          font-size: 16px;
          border-radius: 6px;
          border: none;
        }

        select {
          min-width: 150px;
        }

        button {
          background-color: #ffcc00;
          color: black;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        button:hover {
          background-color: #e6b800;
        }

        @media (max-width: 600px) {
          .hero-content h1 {
            font-size: 1.8rem;
          }

          .hero-content p {
            font-size: 1rem;
          }
        }
      `}</style>
        </div>
    );
}

export default HeroDropdown;
