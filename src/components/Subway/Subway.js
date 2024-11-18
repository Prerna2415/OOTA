import React, { useState } from 'react';
import './Subway.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Classic Veggie Craver', description: 'A delicious veggie patty made with chickpeas and green peas tossed in garlic and mint mayo, topped with fresh lettuce, tomato, capsicum, onion. Serving size - 168 g/292 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts.', price: 170, image: assets.ClassicVeggieCraver },
    { id: 2, name: 'Zesty Chicken Craver', description: 'A Middle Eastern-inspired chicken patty with a garlic sauce, topped with fresh lettuce, onion, and gherkins. Serving size - 111 g/241 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts', price: 175, image: assets.ZestyChickenCraver },
    { id: 3, name: 'Delhi Tikki Sandwich + Side + Coke', description: 'Enjoy your favourite Grills sandwich with a choice of drink and a cookie', price: 400, image: assets.DelhiTikkiSandwichCoke },
    { id: 4, name: 'Bombay Tikki Sandwich + Side + Coke', description: 'Enjoy your favourite Grills sandwich with a choice of drink and a cookie', price: 300, image: assets.BombayTikkiSandwichCoke },
    { id: 5, name: 'Chicken Keema Sandwich + Side + Coke', description: 'Enjoy your favourite Grills sandwich with a choice of drink and a cookie.', price: 320, image: assets.ChickenKeemaSandwich  },
    { id: 6, name: 'Coca-Cola', description: 'Refreshing soda to quench your thirst.', price: 65, image: assets.CocaCola },
    { id: 7, name: 'Great American BBQ Sandwich + Side + Coke', description: 'Enjoy your favourite Hotseller sub with a choice of cookie and a choice of drink.', price: 400, image: assets.AmericanBBQSandwich },
    { id: 8, name: 'Big Bell Box Classic Veg', description: '1 veg Habanero burrito, 1 crunchy pinto bean taco topped with zesty ranch sauce, 1 Seasoned Fries, 1 cinnamon twist and 1 Beverage of choice in reusable cup.', price: 300, image: assets.Taco7 },
    { id: 9, name: 'Big Bell Box Cheesy Veg', description: '1 Cheesy Lava Taco Veg, 1 Cheesy Quesadilla Veg, 1 Cinnamon Twist, 1 Seasoned Nachos and 1 Pepsi Regular in reusable cup.', price: 450, image: assets.Taco8 },
    { id: 10, name: 'Crunchy Wheat Taco Pinto Bean', description: 'Delicious Crunchy Taco Wheat Shell filled with goodness of pinto beans & flavourful creamy sauces.', price: 115, image: assets.Taco10 },
    { id: 11, name: 'Crunchy Taco Supreme - Veg', description: 'Nestled within our signature crunchy corn shell lies a burst of authentic blend of global flavours made with generous serving of delicious pinto beans, drizzled with our flavourful habanero sauce, refreshing sour creamy dressing and topped with indulgent mozzarella cheese. ', price: 125, image: assets.Taco9 },
    { id: 12, name: 'Crunchy Taco Supreme - Chicken', description: 'Nestled within our signature crunchy corn shell lies a burst of authentic blend of global flavours made with generous serving of delicious chunky Mexican chicken, drizzled with our flavourful habanero sauce, refreshing sour creamy dressing and topped with indulgent mozzarella cheese. ', price: 135, image: assets.Taco11 },
    { id: 13, name: 'Crunchy Wheat Taco Mexican Chicken', description: 'Delicious Crunchy Taco shell filled with goodness of Mexican Chicken & flavourful creamy sauces.', price: 125, image: assets.Taco11 },
    { id: 14, name: 'Cheesy Chicken Quesadilla', description: 'Cheesy Chicken Quesadilla is a cheese & chicken loverâ€™s delight! Layered with grilled chicken, it has the nacho cheese sauce, a creamy jalapeno sauce and is filled with a two- blend cheese. ', price: 110, image: assets.Taco12 },
    { id: 15, name: 'Crispy Chicken Wrap', description: 'Crispy Chicken Wrap is an absolute must have! This wrap is filled with crispy chicken, drizzled with nacho cheese sauce, creamy jalapeno sauce and topped off with tangy salsa.', price: 110, image: assets.Taco13 },
    { id: 16, name: 'Nuggets & Lava Dip', description: 'Juicy nuggets with spicy lava dip.', price: 155, image: assets.Taco14 },
    { id: 17, name: 'Pepsi', description: 'Refreshing soda to quench your thirst.', price: 85, image: assets.Pepsi }

];

const Subway = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="Subway-page">
      <header className="Subway-header">
        <h1 className="Subway-title">Welcome to Subway</h1>
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

export default Subway;
