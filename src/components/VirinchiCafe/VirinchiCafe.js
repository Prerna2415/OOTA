import React, { useState } from 'react';
import './VirinchiCafe.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Mysore Masala Dosa', description: 'Served With Chutney & Sambar', price: 95, image: assets.MysoreMasalaDosa },
    { id: 2, name: 'Set Dosa', description: 'Served With Chutney & Sagu', price: 120, image: assets.SetDosa },
    { id: 3, name: 'Dahi Vada', description: 'Serves 1', price: 75, image: assets.DahiVada },
    { id: 4, name: 'Cheese Masala Dosa', description: 'Served With Chutney & Sambar', price: 180, image: assets.CheeseMasalaDosa },
    { id: 5, name: 'Mushroom Fried Rice', description: 'Served with Tomato Ketchup', price: 290, image: assets.MushroomFriedRice },
    { id: 6, name: 'Jeera Rice', description: 'Served with Gravy', price: 240, image: assets.JeeraRice },
    { id: 7, name: 'Idli [2] & Medu Vada [1]', description: 'Served With Chutney & Samba', price: 135, image: assets.Idli2Vada1 },
    { id: 8, name: 'Masala Puri', description: 'Piping hot and spicy with layers of crunchy puri and peas gravy made with rich spices and topped with onions and sev.', price: 95, image: assets.MasalaPuri },
    { id: 9, name: 'Pav Bhaji', description: 'Served With Butter Pav 2 Nos.', price: 160, image: assets.PavBhaji},
    { id: 10, name: 'Dry Fruit Milkshake', description: 'Dry fruit blended with milk & sugar', price: 235, image: assets.DryFruitMilkshake},
    { id: 11, name: 'Butterscotch Milkshake', description: 'A smooth and creamy butterscotch milkshake with a subtle sweetness, perfect for a light and refreshing treat.', price: 179, image: assets.ButterscotchMilkshake},
    { id: 12, name: 'Sweet Lassi', description: 'A traditional, creamy sweet lassi made with yogurt, lightly flavored with sugar and a hint of cardamom.', price: 140, image: assets.Lassi },
    { id: 13, name: 'Chow Chow Bath', description: 'Khara Bath & Kesari Bath Served With Chutney', price: 130, image: assets.CCB},
    { id: 14, name: 'Bisi Bele Bath', description: 'SServed with boondi.', price: 110, image: assets.BBB },
    { id: 15, name: 'Kadai Paneer', description: 'Cooked paneer tossed with onion and peppers in a spicy gravy.', price: 340, image: assets.KadaiPaneer },
    { id: 16, name: 'Palak Paneer', description: 'A healthy and flavorful dish made by cooking fresh paneer in a smooth, creamy & delicious spinach gravy.', price: 320, image: assets.PalakPaneer },
];

const VirinchiCafe = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="VirinchiCafe-page">
      <header className="VirinchiCafe-header">
        <h1 className="VirinchiCafe-title">Welcome to VirinchiCafe</h1>
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

export default VirinchiCafe;