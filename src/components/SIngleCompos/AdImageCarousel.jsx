import React, { useState, useEffect } from "react";
import Phone1 from "../../assets/ad1.jpg";
import Phone2 from "../../assets/ad2.jpg";
import Phone3 from "../../assets/ad3.jpg";


const AdImageCarousel = () => {

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
    <div className="bg-[#ffffff]   h-[#50vh] flex items-center justify-center px-4 md:px-12 py-16">
      <div className=" max-w-7xl grid border shadow-2xl bg-white border-gray-300 grid-cols-1 md:grid-cols-2 gap-10 items-center  p-5">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center text-center md:text-left px-4">
          <h1 className="text-3xl h-[260] md:text-4xl lg:text-5xl font-extrabold text-[#233543] leading-tight mb-6">
            One Place for all your Advertisement
          </h1>

         <ul className="text-lg text-gray-800 mb-6 ">
  <li>Easy ads for phones</li>
  <li> Fashion & food made simple</li>
  <li>Real estate ads in a snap</li>
</ul>

          <div className="flex gap-x-2  ">


          </div>

          {/* <p className="text-green-700 text-sm mt-4 italic">
            Advertise Smarter. Sell Faster. Jubi Has You
          </p> */}
        </div>

        {/* Right Section: Image Carousel */}
        <div className="relative w-full h-[260px] sm:h-[260px] md:h-[260px] lg:h-[260px] flex items-center justify-center overflow-hidden">
          {phoneImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`phone ${index + 1}`}
              className={`absolute object-contain transition-opacity duration-1000 ease-in-out 
                ${
                  index === currentImageIndex
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                } 
                w-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdImageCarousel;
