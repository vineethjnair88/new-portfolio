import React from "react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import the Link component

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <header
        className={`mx-auto py-6 px-10 flex justify-between items-center border-b fixed top-0 left-0 right-0 z-10 
        ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 dark:border-gray-100"
            : "bg-gradient-to-r from-[#D9EAFD] via-[#BCCCDC] to-[#BCCCDC] text-gray-800 border-white"
        }`}
      >
        <h1 className="text-2xl font-bold">Vineeth Jay</h1>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode} // toggle the theme on button click
            className="text-2xl mr-4 focus:outline-none"
          >
            {darkMode ? <BsSun /> : <BsMoonStarsFill />}
          </button>
          <Link
            to="/pdf" // Use Link component to navigate to the PDF page
            className="text-lg"
          >
            <FaExternalLinkAlt />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
