import React, { useState } from 'react';
import './ChineseWok.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Combo for 1 Veg', description: 'Serves 1 | Combo for one (Rice/Noodle Bowl with choice of Veg Gravy, Veg Momos & Drinks)', price: 359, image: assets.Combofor1Veg },
    { id: 2, name: 'Combo for 1 Non-Veg', description: 'Serves 1 | Combo for one (Rice/Noodle Bowl with choice of Non-Veg Gravy, Non- Veg Momos & Drinks)', price: 379, image: assets.Combofor1Nonveg },
    { id: 3, name: 'Hunan Paneer Bowl', description: 'Serves 1 | (Spicy) Paneer, Onion, Capsicum, tossed in Spicy & Savory Hunan Sauce With Choice Rice/ Noodle', price: 189, image: assets.HunanPaneerBowl },
    { id: 4, name: 'Hunan Chicken Bowl', description: 'Serves 1 | (Spicy) Chicken, Onion, Capsicum Tossed In Spicy & Savory Hunan Sauce, Served With Choice Of Rice/ Noodle.', price: 189, image: assets.HunanChickenBowl },
    { id: 5, name: 'Chicken Schezwan Noodles', description: 'Serves 1 | Noodles Tossed With Egg, Diced Chicken, Mixed Veggies In Schezwan Sauce (Onions, Cabbage & Carrot) Garnished With Spring Onion', price: 399, image: assets.ChickenSchezwanNoodles },
    { id: 6, name: 'Coolberg Peach', description: 'Serves 1', price: 125, image: assets.CoolbergPeach },
    { id: 7, name: 'Black Pepper Paneer Dry', description: 'Serves 1 | (Peppery & Non Spicy) Paneer & Veggies Tossed With Our In House Black Pepper Sauce.', price: 189, image: assets.BlackPepperPaneerDry },
    { id: 8, name: 'Paneer Chilli Dry', description: 'Serves 1 | (Spicy) Paneer cubes, green chillies, onion, capsicum tossed in desi chilli sauce finished with a punch of soya.', price: 189, image: assets.PaneerChilliDry },
    { id: 9, name: 'Veg Manchurian Dry', description: 'Serves 1 | (Peppery & non Spicy) Mix veg fried balls, onion and capsicum tossed in classic Manchurian sauce.', price: 169, image: assets.VegManchurianDry},
    { id: 10, name: 'Black Pepper Chicken Dry', description: 'Serves 1 | (Peppery & Non Spicy) Chicken & Veggies tossed with our in house Back Pepper sauce.', price: 179, image: assets.BlackPepperChickenDry},
    { id: 11, name: 'Chicken Manchow Soup', description: 'Serves 1 | A local favourite with chicken and egg topped with crunchy fried noodles.', price: 179, image: assets.ChickenManchowSoup},
    { id: 12, name: 'Chicken Schezwan Noodle Soup', description: 'Serves 1 | Mixed vegetables, boiled Hakka noodles, egg and chicken flavored with crowd favorite schezwan sauce.', price: 338, image: assets.ChickenSchezwanNoodleSoup },
    { id: 13, name: 'Chicken Triple Schezwan Rice', description: 'Serves 1 | (Spicy) Rice & noodle with diced chicken tossed in schezwan sauce. Garnished with a egg omlette. Served with chicken schezwan gravy.', price: 389, image: assets.ChickenTripleSchezwanRice},
    { id: 14, name: 'Veg Fried Rice', description: 'Serves 1 | Classic Veg Fried Rice.', price: 119, image: assets.VegFriedRice },
    { id: 15, name: 'Veg Desi Chilli Value Wok', description: 'Serves 1 | Rice/noodle tossed with onion in desi chilli sauce.', price: 129, image: assets.VegDesiChilliValueWok },
    { id: 16, name: 'Chicken Pot Rice', description: 'Serves 2 | Chicken Pot Rice is a one-pot dish featuring tender chicken, fragrant rice, and vegetables, simmered together for a hearty and flavorful meal.', price: 455, image: assets.ChickenPotRice },
];

const ChineseWok = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="ChineseWok-page">
      <header className="ChineseWok-header">
        <h1 className="ChineseWok-title">Welcome to ChineseWok</h1>
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

export default ChineseWok;
