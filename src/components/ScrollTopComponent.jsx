import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToTop = () => {
  const location = useLocation(); // Get the current location (URL)
    
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when location changes
  }, [location]);

  return null; // This component doesn’t render anything
};

export default ScrollToTop;
