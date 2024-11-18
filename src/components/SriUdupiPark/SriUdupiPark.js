import React, { useState } from 'react';
import './SriUdupiPark.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Mysore Masala Dosa', description: 'Served With Chutney & Sambar', price: 95, image: assets.MysoreMasalaDosa },
    { id: 2, name: '3 Poori with sagu', description: 'Deep fried puffy pooris and saagu made of vegetable, spices & cashew Served with 2 types of chutney & our signature drumstick sambar', price: 105, image: assets.PooriwithSagu },
    { id: 3, name: 'Ghee Multigrain Dosa', description: 'A healthy twist on the normal Dosas served with coconut & tomato chutney with sambar', price: 90, image: assets.GheeMultigrainDosa },
    { id: 4, name: 'Ghee Thatte Idli', description: 'Melt in the mouth rice Idli drenched in Nandini Ghee served with 2 types of chutney & our signature drumstick sambar', price: 65, image: assets.GheeThatteIdli },
    { id: 5, name: 'Ghee Button Idli Sambar', description: 'Button Idlis, the best on the go breakfast. Soft button idlis soaked in our signature drumstick sambar and topped with Nandini Ghee.', price: 70, image: assets.GheeButtonIdliSambar },
    { id: 6, name: 'Ghee Onion Dosa', description: 'A Delicious thick Dosa where the main ingredient is the topped caramelized chopped onions, served with coconut & tomato chutney with Saagu', price: 110, image: assets.GheeOnionDosa },
    { id: 7, name: 'Ghee Plain Dosa', description: 'An appetizing Dosa cooked to perfect brown glaze enriched in Nandini Ghee and served with coconut & tomato chutney with sambar.', price: 90, image: assets.GheePlainDosa },
    { id: 8, name: 'Ghee Podi Masala Dosa', description: 'Appetizing Dosa enriched with Nandini Ghee, Potato Masala & Pudi as a topping served with coconut & tomato chutney with sambar', price: 75, image: assets.GheePodiMasalaDosa },
    { id: 9, name: 'Ghee Podi Khara Bhath', description: 'A mildly spiced rava upma a very popular dish topped with pudi and drizzled with generous amount of Nandini Ghee dish served with coconut chutney', price: 75, image: assets.GPKharaBath},
    { id: 10, name: 'Black Pepper Chicken Dry', description: 'Serves 1 | (Peppery & Non Spicy) Chicken & Veggies tossed with our in house Back Pepper sauce.', price: 179, image: assets.BlackPepperChickenDry},
    { id: 11, name: 'Chicken Manchow Soup', description: 'Serves 1 | A local favourite with chicken and egg topped with crunchy fried noodles.', price: 179, image: assets.ChickenManchowSoup},
    { id: 12, name: 'Chicken Schezwan Noodle Soup', description: 'Serves 1 | Mixed vegetables, boiled Hakka noodles, egg and chicken flavored with crowd favorite schezwan sauce.', price: 338, image: assets.ChickenSchezwanNoodleSoup },
    { id: 13, name: 'Chicken Triple Schezwan Rice', description: 'Serves 1 | (Spicy) Rice & noodle with diced chicken tossed in schezwan sauce. Garnished with a egg omlette. Served with chicken schezwan gravy.', price: 389, image: assets.ChickenTripleSchezwanRice},
    { id: 14, name: 'Veg Fried Rice', description: 'Serves 1 | Classic Veg Fried Rice.', price: 119, image: assets.VegFriedRice },
    { id: 15, name: 'Veg Desi Chilli Value Wok', description: 'Serves 1 | Rice/noodle tossed with onion in desi chilli sauce.', price: 129, image: assets.VegDesiChilliValueWok },
    { id: 16, name: 'Chicken Pot Rice', description: 'Serves 2 | Chicken Pot Rice is a one-pot dish featuring tender chicken, fragrant rice, and vegetables, simmered together for a hearty and flavorful meal.', price: 455, image: assets.ChickenPotRice },
];

const SriUdupiPark = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="SriUdupiPark-page">
      <header className="SriUdupiPark-header">
        <h1 className="SriUdupiPark-title">Welcome to SriUdupiPark</h1>
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

export default SriUdupiPark;
