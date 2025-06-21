import React, { useState, useEffect } from "react";
import Phone1 from "../../assets/ad1.jpg";
import Phone2 from "../../assets/ad2.jpg";
import Phone3 from "../../assets/ad3.jpg";
import SearchBar from "../SearchBar";
import { useNavigate } from "react-router";

const AdImageCarousel = () => {
  const navigate = useNavigate();
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
    <div className="bg-[#fff2d8] w-full -mt- h-[#50vh] flex items-center justify-center px-4 md:px-12 py-16">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center -mb-15 -mt-15">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center text-center md:text-left px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#233543] leading-tight mb-6">
            Power Your Brand with Jubi Marketplace
          </h1>

          <p className="text-lg text-gray-800 mb-6">
            Discover easy-to-post ads across Phones, Fashion, Real Estate, Food
            & more.
          </p>

          <div className="flex gap-x-2  ">
            <SearchBar className="bg-[#111c24] p-4 w-full max-w-md  mx-auto md:mx-0  " />

            <button
              className="flex justify-center items-center bg-amber-300 pr-4 pl-4 rounded-[8px] hover:cursor-pointer "
              onClick={() => navigate("/login")}
            >
              Post Ad
            </button>
          </div>

          <p className="text-gray-600 text-sm mt-4 italic">
            Advertise Smarter. Sell Faster. Jubi Has You
          </p>
        </div>

        {/* Right Section: Image Carousel */}
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden">
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
                w-full h-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdImageCarousel;
