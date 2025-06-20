import { FaUser, FaUserPlus, FaPlus } from "react-icons/fa";
import SearchBar from "./SearchBar"; // import the component
import { useNavigate } from "react-router";

const Navbar = ({className="", isFixed = true }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${className} ${isFixed ? "fixed top-0 left-0 right-0" : ""} z-50 bg-white shadow-md `}>
        <nav className=" lg:visible  flex  flex-col mx-auto px-4 py-3 bg-[#ffffff] shadow fixed w-full justify-center items-center border-b-[#08ae5e] border-b-2">
        {/* Flex container for logo, search, buttons */}
        <div className="flex justify-between flex-wrap gap-y-4">
          {/* Logo Section */}
         <button className="cursor-pointer"   onClick={() => navigate("/")}>
           <div className="flex items-center space-x-2 flex-shrink-0">
            <h1 className="text-xl font-bold text-[#08ae5e] pr-10
            
            ">Jubi</h1>
          </div>
         </button>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 mx-6 justify-center">
            <SearchBar className="flex flex-wrap " />
          </div>

          {/* Action Buttons */}
          <div className="flex pl-10 items-center gap-6  text-[#08ae5e] text-sm">
            <button
              onClick={() => navigate("/login")}
              className=" border rounded-[10px] flex flex-col items-center hover:bg-[#1b1a0f]  hover:text-white p-1 pr-2 pl-2"
            >
              <span className="mt-1 flex gap-x-1 ">
                {" "}
                <FaPlus className="text-lg" />
                Post Ad
              </span>
            </button>

            <button className="flex flex-col items-center hover:opacity-70">
              {/* <FaUser className="text-lg" /> */}
              <span className=" bg-[#08ae5e]  p-2 rounded-[10px]  text-white mt-1">
                Login/Register
              </span>
            </button>
          </div>
        </div>
      </nav>

      <nav>
        <nav className="lg:hidden md:visible xm:visible flex-col flex-wrap mx-auto px-4 py-3 bg-[#fff] shadow fixed w-full justify-center items-center">
          {/* Flex container for logo, search, buttons */}
          <div className="flex justify-between flex-wrap gap-y-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <h1 className="text-xl font-bold text-[#08ae5e] ">Jubi</h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 mx-6 justify-center">
              <SearchBar className="pl-80 pr-80" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-6  text-[#08ae5e] text-sm">
              <button className=" bg-[] flex flex-col items-center hover:opacity-80 p-1">
                <FaPlus className="text-lg" />
                <span className="mt-1">Post Ad</span>
              </button>
              <button
                className="flex flex-col items-center hover:opacity-80"
                onClick={() => navigate("/login")}
              >
                <FaUserPlus className="text-lg" />
                <span className="mt-1">Loging/Register</span>
              </button>
            </div>
          </div>

          <div className="lg:hidden">
            <SearchBar className="" />
          </div>
        </nav>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
