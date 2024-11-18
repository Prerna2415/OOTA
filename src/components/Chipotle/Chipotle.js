import React, { useState } from 'react';
import './Chipotle.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Chipotle Bowl', description: 'Flavorful bowl with rice, beans, toppings.', price: 350, image: assets.ChipotleBowl },
    { id: 2, name: 'Lifestyle Bowl', description: 'Healthy, customized bowls for Keto, Paleo, Whole30, Vegan, Vegetarian diets.', price: 450, image: assets.LifestyleBowl },
    { id: 3, name: 'Quesadilla', description: 'Grilled tortilla filled with cheese and various savory ingredients.', price: 300, image: assets.Quesadilla },
    { id: 4, name: 'Salad', description: 'Fresh greens topped with proteins, vegetables, and flavorful dressings.', price: 250, image: assets.Salad },
    { id: 5, name: 'Tacos', description: 'Soft or crispy tortillas filled with meats, vegetables, and toppings.', price: 350, image: assets.Tacos15 },
    { id: 6, name: 'Carnitas', description: 'Braised and shredded pork cooked with spices.', price: 300, image: assets.Carnitas },
    { id: 7, name: 'Smoked Brisket Burrito', description: 'Tender smoked brisket wrapped in a flour tortilla with toppings.', price: 400, image: assets.SmokedBrisketBurrito },
    { id: 8, name: 'Smoked Brisket Bowl', description: 'Smoked brisket served over rice, beans, and fresh toppings.', price: 500, image: assets.SmokedBrisketBowl },
    { id: 9, name: 'Chicken Bowl', description: 'Grilled chicken served over rice, beans, and fresh toppings.', price: 450, image: assets.ChickenBowl },
    { id: 10, name: 'Sofritas Bowl', description: ' A bowl featuring spicy, shredded tofu served with rice, beans, and toppings.', price: 400, image: assets.SofritasBowl },
    { id: 11, name: 'Chips and Guacamole', description: 'Freshly made tortilla chips served with a generous portion of guacamole.', price: 150, image: assets.ChipsandGuacamole },
    { id: 12, name: 'Barbacoa', description: 'Tender, spicy shredded beef, perfect for tacos or burritos.', price: 500, image: assets.Barbacoa },
    { id: 13, name: 'Keto Bowl', description: 'Grilled protein served over greens with avocado and toppings.', price: 240, image: assets.KetoBowl},
    { id: 14, name: 'veganbowl', description: 'Sofritas, rice, beans, and fresh veggies in a flavorful bowl.', price: 250, image: assets.veganbowl },
    

];

const Chipotle = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="Chipotle-page">
      <header className="Chipotle-header">
        <h1 className="Chipotle-title">Welcome to Chipotle Page</h1>
        <p>Total Items in Cart: {getTotalCartItems()}</p>
      </header>

      <section className="menu-section">
        <h2>Our Menu</h2>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">₹{item.price}</p>
              <button onClick={() => addToCart(item)} className="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Chipotle;
