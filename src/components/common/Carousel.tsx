import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // Pre-load images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const nextSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>
          ‹
        </button>

        <div className="carousel-slide">
          {isLoading && (
            <div className="carousel-loading">
              <div className="loading-spinner">Loading...</div>
            </div>
          )}
          <img
            ref={imageRef}
            src={images[currentIndex]}
            alt={`App screenshot ${currentIndex + 1}`}
            className={`carousel-image ${isLoading ? "loading" : "loaded"}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ opacity: isLoading ? 0 : 1 }}
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
              setIsLoading(true);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
