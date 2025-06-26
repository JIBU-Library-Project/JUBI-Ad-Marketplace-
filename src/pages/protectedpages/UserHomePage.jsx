import { useEffect } from "react";
import UserNavbar from "../../components/Protected/UserNavbar";
import AdImageCarouselUsers from "../../components/SIngleCompos/AdImageCarouselUsers";
import { useNavigate } from "react-router";
import SlidingHeadline from "../../components/SlidingHeadLine";
import NonUserAds from "../NonUserAds";
import LandingAds from "../LandingAds";
const UserHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //retrieve token from local storage
    const token = localStorage.getItem("accessToken");

    // if no token, navigate to login
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="w-screen">
      <UserNavbar />

      <div className="">
        <div className="">
          <div className="bg-[#045f44] h-[55vh] min-h-[420px] pt-30 flex items-center justify-center w-screen px-4 py-12 introheader1">
            <div className="text-center text-white space-y-4">
              {/* <h1 className="text-4xl md:text-6xl  lg:text-8xl font-extrabold leading-tight">
                The Smarter Way <br />
                to Get <em className="text-yellow-400">Noticed.</em>
              </h1> */}

              <h1 className="text-4xl md:text-6xl  lg:text-8xl font-extrabold leading-tight">
                Welcome to Jubi.
              </h1>

              <SlidingHeadline />

            </div>
          </div>

          <LandingAds/>
        
          <AdImageCarouselUsers />
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
