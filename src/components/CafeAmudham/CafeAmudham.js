import React, { useState } from 'react';
import './CafeAmudham.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Cafe Frappe', description: 'Our signature cream-blended cold coffee to blend you with good vibes', price: 248, image: assets.CafeFrappe },
    { id: 2, name: '3 Poori with sagu', description: 'Deep fried puffy pooris and saagu made of vegetable, spices & cashew Served with 2 types of chutney & our signature drumstick sambar', price: 105, image: assets.PooriwithSagu },
    { id: 3, name: 'Ghee Multigrain Dosa', description: 'A healthy twist on the normal Dosas served with coconut & tomato chutney with sambar', price: 90, image: assets.GheeMultigrainDosa },
    { id: 4, name: 'Ghee Thatte Idli', description: 'Melt in the mouth rice Idli drenched in Nandini Ghee served with 2 types of chutney & our signature drumstick sambar', price: 65, image: assets.GheeThatteIdli },
    { id: 5, name: 'Ghee Button Idli Sambar', description: 'Button Idlis, the best on the go breakfast. Soft button idlis soaked in our signature drumstick sambar and topped with Nandini Ghee.', price: 70, image: assets.GheeButtonIdliSambar },
    { id: 6, name: 'Ghee Onion Dosa', description: 'A Delicious thick Dosa where the main ingredient is the topped caramelized chopped onions, served with coconut & tomato chutney with Saagu', price: 110, image: assets.GheeOnionDosa },
    { id: 7, name: 'Ghee Plain Dosa', description: 'An appetizing Dosa cooked to perfect brown glaze enriched in Nandini Ghee and served with coconut & tomato chutney with sambar.', price: 90, image: assets.GheePlainDosa },
    { id: 8, name: 'Ghee Podi Masala Dosa', description: 'Appetizing Dosa enriched with Nandini Ghee, Potato Masala & Pudi as a topping served with coconut & tomato chutney with sambar', price: 75, image: assets.GheePodiMasalaDosa },
    { id: 9, name: 'Ghee Podi Khara Bhath', description: 'A mildly spiced rava upma a very popular dish topped with pudi and drizzled with generous amount of Nandini Ghee dish served with coconut chutney', price: 75, image: assets.GPKharaBath},
    { id: 10, name: 'Kara Bhath', description: 'A mildly spiced rava upma a very popular dish served with coconut chutney', price: 59, image: assets.KaraBhath},
    { id: 11, name: 'Sweet Pongal', description: 'Sweet Pongal is a delicious South Indian dish made with rice, moong lentils, ghee, jaggery, cardamoms and nuts.', price: 85, image: assets.SweetPongal},
    { id: 12, name: 'Kesari Bhath', description: 'A classic Karnataka dish where kesari refers to the spice saffron which creates the dish’s colour. Made of Rava, sugar, milk & ghee it is an all-time favorite', price: 59, image: assets.KesariBhath },
    { id: 13, name: 'Gulab Jamun', description: 'All time favourite indian dessert', price: 39, image: assets.GulabJamun},
    { id: 14, name: 'Ghee Sagu Dosa', description: 'Appetizing Dosa enriched with Nandini Ghee & delicious Saagu masala made of vegetables, spices and cashew, served with coconut & tomato chutney with sambar', price: 105, image: assets.GheeSaguDosa },
    { id: 15, name: 'Mini Vada - 2 Pieces', description: 'A Deep fired golden brown crispy dish. Can be savored on its own or as an accompaniment served with coconut & tomato chutney with sambar', price: 55, image: assets.MiniVada },
    { id: 16, name: 'Thatte Idli', description: 'Melt in the mouth rice Idli, a classic dish without any garnishing served with 2 types of chutney & our signature drumstick sambar', price:40 , image: assets.ThatteIdli },
];

const CafeAmudham = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="CafeAmudham-page">
      <header className="CafeAmudham-header">
        <h1 className="CafeAmudham-title">Welcome to CafeAmudham</h1>
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

export default CafeAmudham;
