import React from 'react';
import './Footer.css'; // Import your CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/services" className="footer-link">Services</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OOTA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
