import React from 'react';
import './Cart.css';
import { useStore } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, emptyCart } = useStore(); // Include emptyCart from context
  const navigate = useNavigate(); // Initialize the navigate function

  const handleIncrease = (itemId) => {
    updateQuantity(itemId, 'increase');
  };

  const handleDecrease = (itemId) => {
    updateQuantity(itemId, 'decrease');
  };

  const handleCheckout = () => {
    emptyCart(); // Empty the cart upon checkout
    navigate('/checkout'); // Redirect to checkout page
  };

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1>Your Cart</h1>
        {cart.length === 0 ? <p>Your cart is empty.</p> : null}
      </header>

      {cart.length > 0 && (
        <section className="cart-section">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className='item_name'>{item.name} - ₹{item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="quantity-button">-
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="quantity-button">+
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item-button">Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <p>
              Total: ₹
              {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </p>
          </div>
          {/* Checkout button */}
          <button onClick={handleCheckout} className="checkout-button">
            Checkout
          </button>
        </section>
      )}
    </div>
  );
};

export default Cart;
