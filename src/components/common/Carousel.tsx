import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>
          ‹
        </button>

        <div className="carousel-slide">
          <img
            src={images[currentIndex]}
            alt={`App screenshot ${currentIndex + 1}`}
            className={`carousel-image ${
              isTransitioning ? "fade-out" : "fade-in"
            }`}
          />
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
