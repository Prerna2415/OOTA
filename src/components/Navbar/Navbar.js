import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure your CSS is applied correctly
import { assets } from '../../assets/assets'; // Assuming assets folder contains logo and basket icon
import { useStore } from '../../Context/StoreContext'; // Import the custom hook to access the store context


const Navbar = () => {
  const { getTotalCartItems } = useStore(); // Accessing the total cart items from context

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {/* Logo */}
        <li>
          <Link to="/" className="logo">
            <img src={assets.logo} alt="Company Logo" className="logo-image" />
          </Link>
        </li>

        {/* Navigation Links */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>

        {/* Cart Icon with Item Count */}
        <li className="cart-icon">
          <Link to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
          <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
          <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
          
          </svg>
            {/* Display the cart item count dynamically */}
            {getTotalCartItems() > 0 && (
              <div className="dot">
                <span className="cart-count">{getTotalCartItems()}</span>
              </div>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
