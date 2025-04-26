import React from 'react';
import './HomeGallery.css'; // Your CSS file

const Test = () => {

    console.log("Rendering Test component");

    return (
        <div className="test-gallery">
            <div>Sneak peek at Bhutan</div>

            <div className="test-image-container">
                <img src="/melong/images/TigersNest.jpg" alt="Gallery" />

            </div>

        </div>
    );
};

export default Test;
