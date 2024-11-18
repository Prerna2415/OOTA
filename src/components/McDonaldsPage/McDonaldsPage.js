import React, { useState } from 'react';
import './McDonaldsPage.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';


// Sample menu items data
const menuItems = [
    { id: 1, name: 'Big Mac', description: 'A double-decker burger with special sauce, lettuce, cheese, pickles, and onions.', price: 245, image: assets.BigMac },
    { id: 2, name: 'French Fries', description: 'Golden, crispy fries made from premium potatoes.', price: 75, image: assets.FrenchFries },
    { id: 3, name: 'McFlurry', description: 'Soft-serve ice cream mixed with your choice of Oreo or M&M\'s.', price: 130, image: assets.McFlurry },
    { id: 4, name: 'Chicken Nuggets', description: 'Tender and juicy chicken nuggets.', price: 195, image: assets.ChickenNuggets },
    { id: 5, name: 'McChicken', description: 'A crispy chicken sandwich with lettuce and mayonnaise.', price: 250, image: assets.McChicken },
    { id: 6, name: 'Coca-Cola', description: 'Refreshing soda to quench your thirst.', price: 65, image: assets.CocaCola },
    { id: 7, name: 'McVeggie Burger Combo', description: 'Crispy veg patty, lettuce, mayo, fries, and drink combo.', price: 199, image: assets.McVeggieBurgerCombo },
    { id: 8, name: 'McChicken Burger Combo', description: 'Crispy chicken patty, lettuce, mayo, fries, and drink combo.', price: 199, image: assets.McChickenBurgerCombo },
    { id: 9, name: 'Corn & Cheese Burger', description: 'Cheesy corn patty in bun..', price: 150, image: assets.Corn_CheeseBurger },
    { id: 10, name: 'Mexican McAloo Tikki Double Patty Burger', description: 'A double-decker burger with spicy aloo tikki and Mexican spices.', price: 94, image: assets.MexicanMcAlooTikkiDoublePattyBurger },
    { id: 11, name: 'McChicken Burger Happy Meal', description: 'Enjoy a combo of McChicken Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book.', price: 350, image: assets.McChickenBurgerHappyMeal },
    { id: 12, name: 'Burger Combo: McSpicy Deluxe Paneer Burger', description: 'Combo of McSpicy Deluxe Paneer Burger + Fries + 2 Coke.', price: 500, image: assets.BurgerCombo },
    { id: 13, name: 'Chocolate Overload McFlurry', description: 'Indulgent McFlurry with rich chocolate sauce and chunks.', price: 140, image: assets.ChocolateOverloadMcFlurry },
    { id: 14, name: 'Big Spicy Paneer Wrap', description: 'Spicy paneer, veggies, wrapped in tortilla.', price: 250, image: assets.BigSpicyPaneerWrap },
    { id: 15, name: 'Big Spicy Chicken Wrap', description: 'Spicy chicken, fresh veggies, tortilla wrap.', price: 270, image: assets.BigSpicyChickenWrap },
    { id: 16, name: 'Hot Chocolate', description: 'Rich, creamy chocolate beverage, topped with whipped cream.', price: 170, image: assets.HotChocolate },
    { id: 17, name: 'Mixed Berry Smoothie', description: 'Refreshing blend of mixed berries and yogurt.', price: 220, image: assets.MixedBerrySmoothie }

];

const McDonaldsPage = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="McDonaldsPage-page">
      <header className="McDonaldsPage-header">
        <h1 className="McDonaldsPage-title">Welcome to McDonaldsPage</h1>
        <p>Total Items in Cart: {getTotalCartItems()}</p>
      </header>

      <section className="menu-section">
       
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

export default McDonaldsPage;
