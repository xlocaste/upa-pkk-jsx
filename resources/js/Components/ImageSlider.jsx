import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    '/images/background.jpeg',
    '/images/background.jpeg',
    '/images/background.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-blue-500' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
