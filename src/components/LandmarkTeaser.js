import React from 'react';
import './LandmarkTeaser.css';
import Banner from './Banner'; // Assuming you have a Banner component for the header

const landmarks = [
    {
        id: 1,
        name: "Taktsang Monastery (Tiger's Nest)",
        description: "Taksang is a sacred Buddhist monastery perched on a cliff in the Paro Valley, known for its breathtaking views and spiritual significance.",
        imageUrl: "/melong/images/TigersNest.jpg",
    },
    {
        id: 2,
        name: "Tashichhodzong",
        description: `Located in Thimphu, Tashichhodzong is the seat of the national government and the central monastic body, showcasing stunning Bhutanese architecture.
        It serves as a symbol of the country's rich cultural heritage and is a must-visit for anyone exploring Bhutan.\nFun fact: The fortress was build without the use of nails, showcasing the incredible craftsmanship of Bhutanese builders.`,
        imageUrl: "/melong/images/tashichhodzong.jpg",
    },
];

const LandmarkTeaser = () => {
    return (
        <div>  <Banner />
            <div className="landmark-container">
                {/* Row 1 */}
                <div className="landmark-row">
                    <div className="landmark-text">
                        <h2>{landmarks[0].name}</h2>
                        <p>{landmarks[0].description}</p>
                    </div>
                    <div className="landmark-image">
                        <img src={landmarks[0].imageUrl} alt={landmarks[0].name} />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="landmark-row">
                    <div className="landmark-image">
                        <img src={landmarks[1].imageUrl} alt={landmarks[1].name} />
                    </div>
                    <div className="landmark-text">
                        <h2>{landmarks[1].name}</h2>
                        {(landmarks[1]?.description || "")
                            .split('\n')
                            .map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandmarkTeaser;
