import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Router here in App
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader"; // Import Preloader component
import { ThemeProvider } from "./context/themeContext";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false); // State to manage preloader

  return (
    <>
      {loadingComplete ? (
        
          <ThemeProvider>
            <Navbar />
          </ThemeProvider>
       
      ) : (
        <Preloader setLoadingComplete={setLoadingComplete} />
      )}
    </>
  );
}

export default App;
