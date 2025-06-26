import React, { useState, useEffect } from "react";
import Phone1 from "../../assets/ad1.jpg";
import Phone2 from "../../assets/ad2.jpg";
import Phone3 from "../../assets/ad3.jpg"
import Phone4 from '../../assets/ad4.jpg'
import Phone5 from '../../assets/ad5.jpg'



const OwnerAds = (className="") => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const phoneImages = [Phone1, Phone2, Phone3, Phone4, Phone5];
  console.log(phoneImages.length);
  

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
              className={`${className} shadow-2xl border border-gray-400 absolute object-cover transition-opacity duration-1000 ease-in-out 
                ${
                  index === currentImageIndex
                    ? "opacity-1500 z-10"
                    : "opacity-15 z-0"
                } 
               w-110 `}
            />
          ))}
        </div>
      
    </div>
  );
};

export default OwnerAds;
