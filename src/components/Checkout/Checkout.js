import React from 'react';
import './Checkout.css';  // Import external CSS for styling

const Checkout = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-content">
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order has been successfully placed.</p>

        <div className="tick-animation">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#4caf50" strokeWidth="5" fill="#e0ffe8" />
            <path d="M30 50 L45 65 L70 35" stroke="#4caf50" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <animate 
                attributeName="stroke-dasharray" 
                from="0, 100" 
                to="100, 0" 
                dur="1s" 
                fill="freeze"
                repeatCount="indefinite"  
              />
            </path>
          </svg>
        </div>

       
      </div>
    </div>
  );
};

export default Checkout;