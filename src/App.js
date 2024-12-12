import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Preloader from './components/Preloader'; // Import the Preloader component

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false); // State to manage preloader

  return (
    <>
      {loadingComplete ? (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      ) : (
        <Preloader setLoadingComplete={setLoadingComplete} />
      )}
    </>
  );
}

export default App;
