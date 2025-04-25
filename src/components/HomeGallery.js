import React, { useState } from 'react';
import './HomeGallery.css'; // Import the CSS file for styling

const HomeGallery = () => {
    // Array of image URLs (you can replace these with your actual images)
    const images = [
        '/TigersNest.jpg',
        '/Gangtey.jpg',
        '/bhutan.jpg',
        '/tashichho-dzong.jpg',
        '/Buddha.jpg',
    ];

    // State to track the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="home-gallery">
            {/* Image Display */}
            <div className="image-container">
                <img
                    src={images[currentImageIndex]}
                    alt={`Gallery Image ${currentImageIndex + 1}`}
                    className="gallery-image"
                />
            </div>

            {/* Navigation buttons */}
            <div className="gallery-controls">
                <button className="prev-btn" onClick={prevImage}>
                    &#8592; {/* Left arrow symbol */}
                </button>
                <button className="next-btn" onClick={nextImage}>
                    &#8594; {/* Right arrow symbol */}
                </button>
            </div>
        </div>
    );
};

export default HomeGallery;
