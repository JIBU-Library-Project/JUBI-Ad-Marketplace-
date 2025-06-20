import React, { useState } from "react";
import { FaUser, FaUserPlus, FaPlus } from "react-icons/fa";
import SearchBar from "./SearchBar";
import AuthToggle from "./auth/AuthToggle";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("login"); // "login" or "register"

  const openModal = (tab) => {
    setModalTab(tab);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="bg-teal-900 text-white pb-2 z-50 relative">
        <nav className="max-w-8xl mx-auto px-4 py-3">
          <div className="flex justify-between flex-wrap gap-y-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="bg-green-500 w-6 h-6 rounded-full"></div>
              <h1 className="text-xl font-bold">Jubi</h1>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 mx-6 justify-center">
              <SearchBar className="pr-90 pl-90" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-6 text-sm">
              <button
                className="flex flex-col items-center hover:opacity-80"
                onClick={() => openModal("login")}
              >
                <FaPlus className="text-lg" />
                <span className="mt-1">Post an ad</span>
              </button>

              <button
                className="flex flex-col items-center hover:opacity-80"
                onClick={() => openModal("register")}
              >
                <FaUserPlus className="text-lg" />
                <span className="mt-1">Sign up</span>
              </button>

              <button
                className="flex flex-col items-center hover:opacity-80"
                onClick={() => openModal("login")}
              >
                <FaUser className="text-lg" />
                <span className="mt-1">Login</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Search Bar */}
        <div className="lg:hidden">
          <SearchBar className="p-2" />
        </div>
      </header>

      {/* Modal with AuthToggle */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg bg-opacity-60 flex items-center justify-center">
          <div className="mt-30 border border-red-500 mb-10 bg rounded-lg shadow-xl w-full max-w-2xl mx-4 relative backdrop-blur-3xl bg-[#fff] /80 ">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>

            {/* AuthToggle with default tab passed */}
            <AuthToggle defaultTab={modalTab} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
