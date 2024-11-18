import React from 'react';
import './popular_food_scroll.css'; // Import the CSS file for styling
import { assets } from '../../assets/assets'; // Make sure this path is correct

// Sample data for food items
const foodItems = [
  { id: 1, name: 'Pizza', img: assets.Pizza,  },
  { id: 2, name: 'Burger', img: assets.Burger },
  { id: 3, name: 'Pasta', img: assets.Pasta },
  { id: 4, name: 'Idli', img: assets.Idli}, 
  { id: 5, name: 'Tacos', img: assets.Tacos },
  { id: 6, name: 'Dosa', img: assets.Dosa },
  { id: 7, name: 'Ice-Cream', img: assets.Ice_Cream },
  { id: 8, name: 'Chicken', img: assets.Chicken },
];

const PopularFood = () => {
  return (
    <div className="popular-food-section">
      <h2 className="section-title">Popular Food Items</h2>
      <div className="food-items-container">
        {foodItems.map((item) => (
          <a href={item.link} key={item.id} className="food-item">
            <img src={item.img} alt={item.name} className="food-image" />
            <p className="food-name">{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularFood;
