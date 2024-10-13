import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route

  useEffect(() => {
    // Scroll both the document body and window to the top
    document.body.scrollTo(0, 0); // For document body scrolling
    window.scrollTo({ top: 0, behavior: 'instant' }); // Scroll with instant behavior
  }, [pathname]);  // This will run every time the route (pathname) changes

  return null;  // This component doesn't render anything
};

export default ScrollToTop;
