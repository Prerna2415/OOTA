import React, { useState } from 'react';
import './BurgerKing.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Veg Whopper', description: 'The Veg Whopper features a flame-grilled patty with fresh veggies, creamy mayo, and soft sesame bun.', price: 190, image: assets.vegwhopper },
    { id: 2, name: 'Chicken Whopper', description: 'The Chicken Whopper includes a juicy grilled chicken patty, fresh veggies, creamy mayo, and a sesame bun.', price: 210, image: assets.ChickenWhopper },
    { id: 3, name: 'Crispy Veg Meal', description: 'The Crispy Veg Meal consists of a crunchy veggie patty burger, golden fries, and a chilled beverage.', price: 230, image: assets.CrispyVegMeal },
    { id: 4, name: 'Crispy Chicken Meal', description: 'The Crispy Chicken Meal features a crispy chicken burger, seasoned fries, and a refreshing drink.', price: 250, image: assets.CrispyChickenMeal },
    { id: 5, name: 'Veg Makhani Burst Meal', description: 'The Veg Makhani Burst Meal includes a flavorful veg burger with rich makhani sauce, fries, and a drink.', price: 240, image: assets.VegMakhaniBurstMeal },
    { id: 6, name: 'Chicken Makhani Burst Meal', description: 'The Chicken Makhani Burst Meal offers a juicy chicken burger with creamy makhani sauce, served with fries and a drink.', price: 300, image: assets.ChickenMakhaniBurstMeal },
    { id: 7, name: 'Crunchy Veg Taco', description: 'The Crunchy Veg Taco features a crispy shell filled with spiced veggies, fresh lettuce, and creamy sauces.', price: 250, image: assets.CrunchyVegTaco },
    { id: 8, name: 'Crunchy Chicken Taco', description: 'The Crunchy Chicken Taco features a crunchy shell filled with seasoned chicken, crisp lettuce, and creamy sauces.', price: 250, image: assets.CrunchyChickenTaco },
    { id: 9, name: 'Crispy Veg Double Patty Meal', description: 'The Crispy Veg Double Patty Meal includes two crunchy veggie patties, fries, and a refreshing drink.', price: 252, image: assets.CrispyVegDoublePattyMeal},
    { id: 10, name: 'Crispy Chicken Double Patty Meal', description: ' The Crispy Chicken Double Patty Meal features two crispy chicken patties, served with fries and a refreshing drink.', price: 282, image: assets.CrispyVegDoublePattyMeal},
    { id: 11, name: 'BK Veggie Meal', description: 'The BK Veggie Meal includes a delicious veggie burger, crispy fries, and a refreshing drink.', price: 308, image: assets.BKVeggieMeal},
    { id: 12, name: 'BK Chicken Meal', description: 'The BK Chicken Meal features a juicy chicken burger, crispy fries, and a refreshing drink.', price: 338, image: assets.BKChickenMeal },
    { id: 13, name: 'Whopper JR Veg Meal', description: 'The Whopper JR Veg Meal includes a mini veggie Whopper, crispy fries, and a refreshing drink.', price: 348, image: assets.WhopperJRVegMeal},
    { id: 14, name: 'Whopper JR Chicken Meal', description: 'The Whopper JR Chicken Meal features a mini chicken Whopper, crispy fries, and a refreshing drink.', price: 368, image: assets.WhopperJRChickenMeal },
    { id: 15, name: 'Fiery Chicken Wrap Meal', description: 'The Fiery Chicken Wrap Meal features a spicy chicken wrap with zesty sauces, crispy fries, and a drink.', price: 418, image: assets.FieryChickenWrapMeal },
    { id: 16, name: 'Paneer Royale Wrap Meal', description: 'The Paneer Royale Wrap Meal includes a flavorful paneer wrap, crispy fries, and a refreshing drink.', price: 418, image: assets.PaneerRoyaleWrapMeal },
];

const BurgerKing = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="BurgerKing-page">
      <header className="BurgerKing-header">
        <h1 className="BurgerKing-title">Welcome to BurgerKing</h1>
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

export default BurgerKing;
