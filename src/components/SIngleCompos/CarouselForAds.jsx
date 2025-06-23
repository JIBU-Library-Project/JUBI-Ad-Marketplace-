import React, { useState } from "react";

const CarouselForAds = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const next = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <div className="relative w-full">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="rounded-lg object-contain w-full sm:max-h-96  lg:max-h-140 transition-all duration-300 shadow-md"
      />

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-0 bg-black bg-opacity-40 text-white px-2 py-1 rounded-r"
            onClick={prev}
          >
            &#8592;
          </button>
          <button
            className="absolute top-1/2 right-0 bg-black bg-opacity-40 text-white px-2 py-1 rounded-l"
            onClick={next}
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
};

export default CarouselForAds;
