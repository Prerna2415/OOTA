import React from 'react';
import './Aboutus.css'; // Assuming you have a CSS file for About Us styles
import backgroundImage from '../../assets/about_us_bg_image.jpg'; // Adjust the path based on your folder structure

const AboutUs = () => {
  return (
    <div 
      className="about-us" 
      style={{
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',        // Ensures the image covers the entire background
        backgroundPosition: 'center',   // Centers the background image
        backgroundRepeat: 'no-repeat',  // Prevents background repetition
        minHeight: '100vh',    
        minWidth:'100vh',         // Makes sure the div covers the full viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',           // Center-align the text horizontally
        justifyContent: 'center',       // Center-align the text vertically
        color: '#fff',                  // Optional: change text color for readability
        textAlign: 'center',            // Center the text
        padding: '20px',                // Adds some padding for better text layout
      }}
    >
      <h1>About Us</h1>
      <p>
        We are a passionate team dedicated to providing the best food delivery service. 
        Our goal is to connect you with delicious meals from your favorite restaurants, 
        all at the click of a button.
      </p>
      <p>
        Our service ensures that your food reaches you quickly and efficiently. We take pride 
        in our extensive network of restaurants and our commitment to quality.
      </p>
    </div>
  );
};

export default AboutUs;

