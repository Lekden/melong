import React, { useState } from 'react';
import './HomeGallery.css'; // Your CSS file

const HomeGallery = () => {
    const images = [
        '/melong/images/TigersNest.jpg',
        '/melong/images/Gangtey.jpg',
        '/melong/images/bhutan.jpg',
        '/melong/images/tashichhodzong.jpg',
        '/melong/images/Buddha.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="home-gallery">
            <h2 className="gallery-title">Sneak Peek at Bhutan</h2>
            <div className="image-container">

                <img
                    src={images[currentImageIndex]}
                    alt={`Gallery${currentImageIndex + 1}`}
                    className="gallery-image"
                />
            </div>

            <div className="gallery-controls">
                <button className="prev-btn" onClick={prevImage}>
                    &#8592;
                </button>
                <button className="next-btn" onClick={nextImage}>
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default HomeGallery;
