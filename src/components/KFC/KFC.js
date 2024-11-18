import React, { useState } from 'react';
import './KFC.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Caribbean Spicy Zinger Burger', description: 'Relish the Caribbean spicy zinger', price: 220, image: assets.CaribbeanSpicyZingerBurger },
    { id: 2, name: 'Caribbean Spicy Zinger Burger & Chicken Meal', description: 'New Caribbean Spicy Zinger Burger with 1 Pc Hot & Crispy and Pepsi PET 475ml at a deal price', price: 380, image: assets.CaribbeanSpicyZingerBurger1 },
    { id: 3, name: 'Caribbean Spicy Zinger Burger & Popcorn Meal', description: 'Caribbean Spicy Zinger Burger with Medium Popcorn and Pepsi PET 475ml at a deal price', price: 440, image: assets.CaribbeanSpicyZingerBurger2 },
    { id: 4, name: 'Mexican Zinger Pro Burger', description: 'Premium burger with crunchy chicken, Mexican Habanero sauce, cheese, tomato & onion', price: 240, image: assets.MexicanZingerProBurger },
    { id: 5, name: 'American Classic Zinger', description: 'Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between', price: 200, image: assets.AmericanClassicZinger },
    { id: 6, name: 'Coca-Cola', description: 'Refreshing soda to quench your thirst.', price: 65, image: assets.CocaCola },
    { id: 7, name: 'Indian Tandoori Zinger Burger', description: 'Grab Tandoori Zinger Burger with Onions & Tangy sauce', price: 210, image: assets.TandooriZingerBurger },
    { id: 8, name: 'American Classic Zinger-with Cheese', description: 'Burger with a crunchy chicken fillet, cheese slice, veggies & a delicious mayo sauce',price: 300, image: assets.AmericanClassicZingerCheese },
    { id: 9, name: 'Indian Paneer Zinger Burger', description: 'Relish the Indian paneer zinger', price: 210, image: assets.PaneerZingerBurger },
    { id: 10, name: 'All in One Bucket', description: '1 Leg, 1 Hot & Crispy, 2 Wings, 2 Strips, 1 Zinger Fillet, 3 Dips [20gm each] & 1 Pepsi 475 ml', price: 550, image: assets.Allin1Burger },
    { id: 11, name: 'Big 12', description: '6pc Hot & Crispy Chicken,6 Wings & 2 Dips(20gm each)', price: 750, image: assets.Big12 },
    { id: 12, name: 'Classic Chicken Rice Bowlz', description: 'Rice Bowlz Attack!- Grab this aromatic Rice Bowlz rice with 1 piece Hot & Cripsy & gravy', price: 230, image: assets.ChickenRiceBowlz },
    { id: 13, name: 'Popcorn Chicken Rice Bowlz & Wings Meal', description: 'Deal Savings of Rs. 118 on 2 units of Chicken Popcorn Rice Bowlz and 8 Pc Hot Wings', price: 700, image: assets.ChickenRiceBowlz1 },
    { id: 14, name: 'Chocolate Lava Cake', description: 'Chocolate Goodness! Soft chocolate cake with lava oozing center', price: 110, image: assets.ChocolateLavaCake },
    { id: 15, name: 'Crispy Chicken Wrap', description: 'Crispy Chicken Wrap is an absolute must have! This wrap is filled with crispy chicken, drizzled with nacho cheese sauce, creamy jalapeno sauce and topped off with tangy salsa.', price: 110, image: assets.Taco13 },
    { id: 16, name: 'Nuggets & Lava Dip', description: 'Juicy nuggets with spicy lava dip.', price: 155, image: assets.Taco14 },
    { id: 17, name: 'Pepsi', description: 'Refreshing soda to quench your thirst.', price: 85, image: assets.Pepsi }

];

const KFC = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="KFC-page">
      <header className="KFC-header">
        <h1 className="KFC-title">Welcome to KFC Page</h1>
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

export default KFC;
