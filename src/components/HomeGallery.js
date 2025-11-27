import React, { useState, useEffect } from 'react';
import './HomeGallery.css';
import Banner from './Banner';
import Footer from './Footer';

const HomeGallery = () => {
    const images = [
        { src: '/melong/images/TigersNest.jpg', label: "Tiger's Nest - Paro" },
        { src: '/melong/images/Gangtey.jpg', label: "Gangtey Valley - Wangdephodrang" },
        { src: '/melong/images/bhutan.jpg', label: "Dochula - Thimphu" },
        { src: '/melong/images/tashichhodzong.jpg', label: "Tashichho Dzong - Thimphu" },
        { src: '/melong/images/Buddha.jpg', label: "Buddha Dordenma - Thimphu" },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex, images.length]);

    return (
        <div>
            <Banner />
            <div className="home-gallery">
                <div className="image-container">
                    <img
                        key={currentImageIndex}
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].label}
                        className="gallery-image zoom-animation"
                    />
                    <div className="image-label">
                        {images[currentImageIndex].label}
                    </div>
                    <div className="image-index">
                        {currentImageIndex + 1} / {images.length}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomeGallery;
