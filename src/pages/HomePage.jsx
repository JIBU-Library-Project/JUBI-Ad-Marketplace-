import React from "react";
import Navbar from "../components/Navbar";
import AdImageCarousel from "../components/SIngleCompos/AdImageCarousel";
import { useNavigate } from "react-router";
import { FcTwoSmartphones } from "react-icons/fc";
import { GiClothes } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>
        <div className="mt-20">
          <nav className="flex items-center justify-between border border-white m-8 bg-white px-6 py-3 rounded-full shadow-md text-gray-900">
            {/* <span className="text-4xl">JUBI</span> */}

            <ul className="flex flex-row gap-40">
              <li className="flex items-center gap-2 rounded-xl px-2 py-1 shadow-md transition-all duration-30 hover:bg-blue-100 hover:scale-105 cursor-pointer">
                <FcTwoSmartphones className="text-3xl" />
                <span>Phones & Electronics</span>
              </li>
              <li className="flex items-center gap-2 shadow-md rounded-xl px-2 py-1 transition-all duration-30 hover:bg-blue-100 hover:scale-105 cursor-pointer">
                <GiClothes className="text-3xl" />
                <span>Fashion</span>
              </li>
              <li className="flex items-center gap-2 shadow-md rounded-xl px-2 py-1 transition-all duration-30 hover:bg-blue-100 hover:scale-105 cursor-pointer">
                <FaHouse className="text-2xl" />
                <span>Real Estate</span>
              </li>
              <li className="flex items-center gap-2 shadow-md rounded-xl px-2 py-1 transition-all duration-30 hover:bg-blue-100 hover:scale-105 cursor-pointer">
                <MdOutlineFastfood className="text-2xl" />
                <span>Food & Groceries</span>
              </li>
            </ul>

            <button className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-md shadow-md transition-all duration-30 hover:bg-blue-100 hover:scale-105 cursor-pointer">
              <CiSearch />
              <span>Search</span>
            </button>
          </nav>
        </div>

        <div className="max-w-8xl mx-auto my-8 shadow-lg overflow-hidden">
        <video
          className="w-full h-auto"
          src="/carousel.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>


      <div className="flex justify-center text-center hover:text-green hover:text-green-600 font-bold ">
       <button onClick={() => navigate("/login")}>Advertisement</button>
      </div>

      <AdImageCarousel/>

        {/* <div>
          <div className="bg-[#045f44] h-[55vh] min-h-[420px] pt-30 flex items-center justify-center w-screen px-4 py-12 introheader">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-6xl  lg:text-8xl font-extrabold leading-tight">
              The Smarter Way <br />
              to Get <em className="text-yellow-400">Noticed.</em>
            </h1>

            <SlidingHeadLine />
      

            <button
              className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full font-semibold text-sm hover:bg-pink-700 transition"
              onClick={() => navigate("/login")}
            >
              Start Advertising
            </button>
          </div>
        </div>

        <AdImageCarousel />
        // </div> */}
      </div>
    </>
  );
}

export default HomePage;
