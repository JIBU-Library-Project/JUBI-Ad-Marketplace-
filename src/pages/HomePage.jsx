import React from "react";
import Navbar from "../components/Navbar";
import AdImageCarousel from "../components/SIngleCompos/AdImageCarousel";
import { useNavigate } from "react-router";
import NonUserAds from "./NonUserAds";
import Footer from "../components/Footer";
import SlidingHeadline from "../components/SlidingHeadLine";
import { toast } from "react-toastify";

function HomePage() {
  const handleViewMore = () => {
    toast("Login to post an Ad");
    navigate("/login");
  };
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* <div>
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
      </div> */}

      <div>
        <div>
          {/* Hero Section with Video Background */}
          <div className="relative w-screen h-[70vh] min-h-[420px] overflow-hidden">
            {/* Video Background */}
            <video
              className="absolute inset-0 w-full h-full object-cover z-0"
              src="/carousel.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Overlay (optional dark layer for text contrast) */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Foreground Header Content */}
            <div className="relative z-20 flex items-center justify-center w-full h-full px-4 py-12 introheader">
              <div className="text-center text-white space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
                  Get{" "}
                  <em className="text-yellow-400">Noticed.</em>
                </h1>

                <SlidingHeadline />

                <button
                  className="mt-4 px-6 py-2 p-  bg-green-600 text-white rounded-full font-bold text-sm hover:bg-pink-700 transition "
                  onClick={handleViewMore}
                >
                  Start Advertising
                </button>
              </div>
            </div>
          </div>

          <NonUserAds />

          {/* Rest of the Page */}
          <AdImageCarousel />

          <div className="bg-[#ffffff]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
