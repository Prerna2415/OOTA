import React, { useState } from 'react';
import './BangaloreThindies.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Butter Masala Dosa', description: 'Buttery, crispy dosa, stuffed with palya. Served with chutney', price: 120, image: assets.ButterMasalaDosa },
    { id: 2, name: 'Butter Podi Masala Dosa', description: 'Buttery, crispy dosa stuffed with potato palya, sprinkled with loads of pudi. Served with chutney ', price: 130, image: assets.ButterPodiMasalaDosa },
    { id: 3, name: 'Chow Chow Bath', description: '1 portion each of kesari and Kara bath', price: 110, image: assets.CCB },
    { id: 4, name: 'Jamoon', description: '2 pieces of Gulab Jamoon', price: 50, image: assets.Jamoon },
    { id: 5, name: 'Mini Pudi Idli', description: '12 Cute mini idlis sprinkled with our home-made pudi, served with sambar and chutney', price: 100, image: assets.MiniPudiIdli },
    { id: 6, name: 'Vada', description: 'Crispy fried Vada', price: 50, image: assets.Vada },
    { id: 7, name: 'Badam Milk', description: 'Serves 1-2', price: 93, image: assets.BadamMilk },
    { id: 8, name: 'Lemon Tea', description: 'Serves 1-2', price: 93, image: assets.LemonTea },
    { id: 9, name: 'Ghee Podi Khara Bhath', description: '1 Piece of soft steamed idli and 1 crispy vada served with chutney and sambar', price: 75, image: assets.Idli1Vada1},
    { id: 10, name: 'Kara Bhath', description: 'A mildly spiced rava upma a very popular dish served with coconut chutney', price: 59, image: assets.KaraBath},
    { id: 11, name: 'Idli-1pc + Vada-1pc', description: 'Sweet Pongal is a delicious South Indian dish made with rice, moong lentils, ghee, jaggery, cardamoms and nuts.', price: 85, image: assets.SweetPongal},
    { id: 12, name: 'Kesari Bhath', description: 'A classic Karnataka dish where kesari refers to the spice saffron which creates the dish’s colour. Made of Rava, sugar, milk & ghee it is an all-time favorite', price: 59, image: assets.KesariBhath },
    { id: 13, name: 'Butter Plain Dosa', description: 'Buttery, crispy dosa prepared freshly. Served with chutney', price: 90, image: assets.ButterPlainDosa},
    { id: 14, name: 'Ghee Sagu Dosa', description: 'Appetizing Dosa enriched with Nandini Ghee & delicious Saagu masala made of vegetables, spices and cashew, served with coconut & tomato chutney with sambar', price: 105, image: assets.GheeSaguDosa },
    { id: 15, name: 'Idli-2pc', description: '2 Pieces of soft steamed idlis served with chutney and sambar', price: 55, image: assets.Idli2 },
    { id: 16, name: 'Thatte Idli', description: 'Melt in the mouth rice Idli, a classic dish without any garnishing served with 2 types of chutney & our signature drumstick sambar', price:40 , image: assets.ThatteIdli },
];

const BangaloreThindies = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="BangaloreThindies-page">
      <header className="BangaloreThindies-header">
        <h1 className="BangaloreThindies-title">Welcome to BangaloreThindies</h1>
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

export default BangaloreThindies;
