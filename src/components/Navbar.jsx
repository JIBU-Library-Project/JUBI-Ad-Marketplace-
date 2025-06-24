import { FaUser, FaUserPlus, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/jubimarklogo.png";

const Navbar = ({ className = "", isFixed = true }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`${className} ${
          isFixed ? "fixed top-0 left-0 right-0" : ""
        } z-50 bg-white shadow-md`}
      >
        {/* Desktop Navbar */}
        <nav className="lg:visible flex flex-col mx-auto px-4 py-3 bg-white shadow fixed w-full justify-center items-center border-b-[#08ae5e] border-b-2">
          <div className="flex justify-between w-full flex-wrap items-center">
            {/* Logo */}
            <button className="cursor-pointer" onClick={() => navigate("/")}>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <img src={logo} alt="" className="w-40" />
              </div>
            </button>

            {/* Search */}
            <div className="hidden lg:flex flex-1 mx-6 justify-center">
              <SearchBar className="flex flex-wrap" />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6 text-[#08ae5e] text-sm">
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="border rounded-[10px] flex flex-col items-center hover:bg-[#1b1a0f] hover:text-white p-1 pr-2 pl-2"
                >
                  <span className="mt-1 flex gap-x-1">
                    <FaPlus className="text-lg" />
                    Post Ad
                  </span>
                </button>
                <button
                  className="flex flex-col items-center hover:opacity-70"
                  onClick={() => navigate("/login")}
                >
                  <span className="bg-[#08ae5e] p-2 rounded-[10px] text-white mt-1">
                    Login/Register
                  </span>
                </button>
              </>

              {/* <button
                className="flex flex-col items-center hover:opacity-70"
                onClick={() => navigate("/ads")}
              >
                <span className="bg-[#08ae5e] p-2 rounded-[10px] text-white mt-1">
                  Ads
                </span>
              </button> */}

            </div>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="lg:hidden md:visible flex-col flex-wrap mx-auto px-4 py-3 bg-[#fff] shadow fixed w-full justify-center items-center">
          <div className="flex justify-between w-full items-center">
            <button onClick={() => navigate("/")}>
              <img src={logo} alt="" className="w-40" />
            </button>

            <div className="flex items-center gap-4 text-[#08ae5e] text-sm">
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="flex flex-col items-center"
                >
                  <FaPlus className="text-lg" />
                  <span className="text-xs">Post Ad</span>
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="flex flex-col items-center"
                >
                  <FaUserPlus className="text-lg" />
                  <span className="text-xs">Login/Register</span>
                </button>
              </>
            </div>
          </div>

          <div className="w-full mt-2">
            <SearchBar className="w-full" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
