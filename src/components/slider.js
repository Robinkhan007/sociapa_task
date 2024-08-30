import React, { useState } from "react";

const images = [
  "m12.png",
  //   "/public/m11.png",
  "m12.png",
  // Add more images as needed
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt="Slide" className="slider-image" />
      <div className="text-overlay">
        <h1>CHASING THE NATURAL FLAVOURS OF EXCELLENCE</h1>
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
