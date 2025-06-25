import React from "react";
import Navbar from "../components/Navbar";
import AdImageCarousel from "../components/SIngleCompos/AdImageCarousel";
import { useNavigate } from "react-router";
import NonUserAds from "./NonUserAds";
import Footer from "../components/Footer";
import SlidingHeadline from "../components/SIngleCompos/SlidingHeadline";

function HomePage() {
  const handleViewMore = () => {
    alert("Log in or Create a Vendor Account to Start Advertising");
    navigate("/login");
  };
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>
        <div>
          <div className="bg-[#045f44] h-[30vh] min-h-[420px] pt-30 flex items-center justify-center w-screen px-4 py-12 introheader">
            <div className="text-center text-white space-y-4">
              <h1 className="text-4xl md:text-6xl  lg:text-8xl font-extrabold leading-tight">
                The Smarter to Get <em className="text-yellow-400">Noticed.</em>
              </h1>

              <SlidingHeadline/>

              <button
                className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full font-semibold text-sm hover:bg-pink-700 transition"
                onClick={handleViewMore}
              >
                Start Advertising
              </button>
            </div>
          </div>

          <div className="max-w-8xl mx-auto  shadow-lg overflow-hidden">
            <video
              className="w-full h-auto"
              src="/carousel.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <AdImageCarousel />
          <div className="bg-[#ffffff] ">
            <NonUserAds />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
