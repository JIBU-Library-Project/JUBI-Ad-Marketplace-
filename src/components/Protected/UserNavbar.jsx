import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/jubimarklogo.png";
import SearchBar from "../SearchBar";

const UserNavbar = ({ className = "" }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setUsername(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    alert("You've logged out successfully");
    navigate("/");
  };

  return (
    <div className={`${className} fixed top-0 left-0 right-0 z-50 bg-white shadow-md`}>
      {/* Navbar Container */}
      <nav className="flex flex-col lg:flex-row justify-between items-center px-4 py-3 border-b border-[#08ae5e] gap-y-3 lg:gap-y-0">
        
        {/* Logo */}
        <div className="cursor-pointer flex-shrink-0">
          <img src={logo} alt="Logo" className="w-32 sm:w-40" />
        </div>

        {/* Search */}
        <div className="w-full lg:w-auto">
          <SearchBar className="w-full sm:w-96" />
        </div>

        {/* User Info and Logout */}
        <div className="flex items-center justify-end gap-3 text-sm text-[#08ae5e] mt-2 lg:mt-0">
          <span className="flex items-center gap-1 bg-[#08ae5e] text-white py-1.5 px-3 rounded-full whitespace-nowrap">
            <FaUser />
            Hi, {username}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-full hover:opacity-80 whitespace-nowrap"
          >
            {/* <FaSignOutAlt /> */}
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
