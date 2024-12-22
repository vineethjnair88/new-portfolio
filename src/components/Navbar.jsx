import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Import Routes and Route for routing
import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import About from "./About";
import Resume from "./Resume";
import ScrollToTop from './ScrollTopComponent';
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <ScrollToTop/>
      <div
        className={`${
          darkMode
            ? "dark bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100"
            : "bg-gradient-to-r from-[#D9EAFD] via-[#BCCCDC] to-[#BCCCDC] text-gray-800"
        } min-h-screen font-sans`}
      >
        {/* Use the Header component */}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Content */}
        <main className="container mx-auto  px-12 pt-12">
          <Routes>
            {/* Route for PDF */}
            <Route path="/pdf" element={<Resume />} />
            {/* Route for other sections, only when path is not /pdf */}
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Skills darkMode={darkMode} />
                  <Experience darkMode={darkMode} />
                  <Contact darkMode={darkMode} />
                </>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-4 text-center border-t border-gray-300 dark:border-gray-700">
          <p>&copy; {new Date().getFullYear()} Vineeth Jay. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default Navbar;
