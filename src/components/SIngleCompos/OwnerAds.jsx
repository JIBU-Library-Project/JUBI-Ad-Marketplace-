import React, { useState, useEffect } from "react";
import Phone1 from "../../assets/ad1.jpg";
import Phone2 from "../../assets/ad2.jpg";
import Phone3 from "../../assets/ad3.jpg";



const OwnerAds = (className="") => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const phoneImages = [Phone1, Phone2, Phone3, Phone2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === phoneImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [phoneImages.length]);

  return (
    <div>
            {/* Right Section: Image Carousel */}
        <div className={`${className}`}>
          {phoneImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`phone ${index + 1}`}
              className={`${className} object-cover transition-opacity duration-1000 ease-in-out 
                ${
                  index === currentImageIndex
                    ? "opacity-1500 z-10"
                    : "opacity-15 z-0"
                } 
                w-full h-full`}
            />
          ))}
        </div>
      
    </div>
  );
};

export default OwnerAds;
