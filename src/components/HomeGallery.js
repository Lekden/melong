import React, { useState, useEffect } from 'react';
import './HomeGallery.css';

const HomeGallery = () => {
    const images = [
        '/melong/images/TigersNest.jpg',
        '/melong/images/Gangtey.jpg',
        '/melong/images/bhutan.jpg',
        '/melong/images/tashichhodzong.jpg',
        '/melong/images/Buddha.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-rotate images every 5 seconds (matches animation duration)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex, images.length]);

    return (
        <div className="home-gallery">
            <div className="image-container">
                <img
                    key={currentImageIndex}  // forces remount & restarts animation
                    src={images[currentImageIndex]}
                    alt={`Gallery ${currentImageIndex + 1}`}
                    className="gallery-image zoom-animation"
                />

                {/* Removed buttons here */}

                <div className="image-index">
                    {currentImageIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};

export default HomeGallery;
