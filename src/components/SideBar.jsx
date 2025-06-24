import React, { useState } from "react";
import K from "../constants";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import VendorHeader from "./Protected/VendorHeader";

function SideBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    alert("Logged out successfully!");
    navigate("/login");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col justify-between bg-[#141414] w-64 h-screen text-white fixed top-0 left-0 shadow-lg">
        <div>
          {/* Logo */}
          <div className="p-6 border-b border-[#2a2a2a]">
            <h1 className="text-3xl font-extrabold text-lime-400 tracking-wide">
              Jubi<span className="text-white">Market</span>
            </h1>
          </div>

          {/* Vendor Profile */}
          <div className="px-6 py-4 border-b border-[#2a2a2a]">
            <VendorHeader />
          </div>

          {/* Navigation */}
          <nav className="px-4 mt-4 flex flex-col gap-2">
            {K.NAVLINKS.map(({ icon, text, path }) => (
              <NavLink
                key={path}
                to={path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-lime-500 to-green-600 text-white shadow-md"
                      : "text-gray-400 hover:text-lime-400 hover:bg-[#1f1f1f]"
                  }`
                }
              >
                {icon}
                <span>{text}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-[#2a2a2a]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-md text-sm text-red-500 hover:bg-red-600 hover:text-white transition-all"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header with Toggle */}
      <header className="md:hidden bg-white flex items-center justify-between px-4 py-3 shadow fixed top-0 w-full z-50">
        <h1 className="text-xl font-bold text-lime-500">
          Jubi<span className="text-black">Market</span>
        </h1>
        <button onClick={toggleMenu} className="text-black text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile Sidebar Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-white z-40 px-6 py-4 shadow space-y-4">
          {K.NAVLINKS.map(({ icon, text, path }) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-lime-500 text-white"
                    : "text-black hover:text-lime-500 hover:bg-gray-100"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {icon}
              <span>{text}</span>
            </NavLink>
          ))}
          <div className="border-t border-gray-200 pt-3">
            <VendorHeader />
            <button
              onClick={handleLogout}
              className="mt-3 w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm text-red-500 hover:bg-red-600 hover:text-white transition-all"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Spacer for fixed mobile header */}
      <div className="pt-16 md:pt-0" />
    </>
  );
}

export default SideBar;
