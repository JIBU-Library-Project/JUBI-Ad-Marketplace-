import React from "react";
import Navbar from "../components/Navbar";
import AdImageCarousel from "../components/SIngleCompos/AdImageCarousel";
import { useNavigate } from "react-router";
import SlidingHeadLine from "../components/SIngleCompos/SlidingHeadline";
import NonUserAds from "./NonUserAds";
import Footer from "../components/Footer";

function HomePage() {


  const handleViewMore = () => {alert("Log in or Create a Vendor Account to Start Advertising")
  navigate('/login')
}
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar />

        <div>
          <div className="bg-[#045f44] h-[55vh] min-h-[420px] pt-30 flex items-center justify-center w-screen px-4 py-12 introheader">
            <div className="text-center text-white space-y-4">
              <h1 className="text-4xl md:text-6xl  lg:text-8xl font-extrabold leading-tight">
                The Smarter Way <br />
                to Get <em className="text-yellow-400">Noticed.</em>
              </h1>

              <SlidingHeadLine />

              <button
                className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full font-semibold text-sm hover:bg-pink-700 transition"
                onClick={handleViewMore}
              >
                Start Advertising
              </button>
            </div>
          </div>

          <AdImageCarousel />
          <div className="bg-[#ffffff] ">
            <NonUserAds />
             <Footer/>
          </div>
          
        </div>
       
      </div>
    </>
  );
}

export default HomePage;
