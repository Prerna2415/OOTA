import React from 'react';
import { assets } from '../../assets/assets'; // Ensure this path is correct
import './Background.css';

const Background = () => {
  const backgroundStyle = {
    backgroundImage: `url(${assets.backgroundImage})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the background image
    width: '100vw', // Full width of the viewport
    height: '100vh', // Full height of the viewport
    position: 'absolute', // Fix the background to the entire screen
    top: 0, 
    left: 0,
    zIndex: -1 // Send the background behind other content
  };

  return (
    <div style={backgroundStyle}>
      {/* Additional content can go here, if needed */}
    </div>
  );
}

export default Background;
