
// Function to set the root font size based on screen width
export function setRootFontSize() {
    const baseFontSize = 16; // Set your base font size
    const screenFactor = 1600; // Reference screen width in pixels
    const scale = window.innerWidth / screenFactor; // Scale based on current width
    document.documentElement.style.fontSize = `${baseFontSize * scale}px`;
  }
  
  // Initialize the font scaling on page load and resize
  export function initializeFontScaling() {
    // Set initial font size
    setRootFontSize();
  
    // Adjust font size on window resize
    window.addEventListener('resize', setRootFontSize);
  }
  
  // Cleanup function to remove the event listener
  export function cleanupFontScaling() {
    window.removeEventListener('resize', setRootFontSize);
  }
  
