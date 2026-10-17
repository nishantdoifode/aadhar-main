import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = () => {
  
  const images = [
    '/imgs/sm.jpg',
    '/imgs/sm2.jpg',
    '/imgs/sm3.jpg',
    '/imgs/sm4.jpg',
    '/imgs/sm5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderIntervalRef = useRef(null);

  // Auto-play function
  useEffect(() => {
    if (isPlaying) {
      sliderIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); 
    } else {
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }
    }

    return () => {
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }
    };
  }, [isPlaying, images.length]);

  // Left arrow - previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Right arrow - next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
  <>
<div className="slider-container">
    <div id="slider">
      {/* Left Arrow Button */}
      <button 
        type="button" 
        id="lbtn"
        onClick={goToPrevious}
        title="Previous"
      >
        <img src="/imgs/ic_right_arrow.svg" alt="Previous" />
      </button>

      {/* Image Container */}
      <div id="imgss">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>

      {/* Right Arrow Button */}
      <button 
        type="button" 
        id="rbtn"
        onClick={goToNext}
        title="Next"
      >
        <img src="/imgs/ic_left_arrow.svg" alt="Next" />
      </button>

      {/* Controls Container */}
      <div id="slider-controls">
        {/* Play/Pause Button */}
        <button 
          id="play-pause-btn"
          onClick={togglePlayPause}
          className={isPlaying ? 'playing' : 'paused'}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Slide Counter */}
        <span id="slide-counter">
          {currentIndex + 1} / {images.length}
        </span>

        {/* Dots Indicator */}
        <div id="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ImageSlider;