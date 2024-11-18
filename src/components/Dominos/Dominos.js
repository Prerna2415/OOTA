import React, { useState } from 'react';
import './Dominos.css'; // Importing the CSS file for styling
import { assets } from '../../assets/assets'; // Assuming assets contains images for the page
import { useStore } from '../../Context/StoreContext';

// Sample menu items data
const menuItems = [
    { id: 1, name: 'Cheese Volcano Peppy Paneer', description: 'Centre loaded with Molten Cheese & topped with peppy Paneer, Capsicum & Red Paprika *Contains non-edible container under the Pizza', price: 320, image: assets.CheeseVolcanoPeppyPaneer },
    { id: 2, name: 'Meal for 4: Margherita & Peppy Paneer', description: 'Medium Margherita + Medium Peppy Paneer + Garlic Bread + 2 Pepsi', price: 740, image: assets.Margherita_PeppyPaneer },
    { id: 3, name: 'Meal for 4: Veg Cheesy Pizza', description: 'Regular Fresh Veggie + Regular Peppy Paneer + Regular Corn n Cheese + Regular Farmhouse', price: 760, image: assets.VegCheesyPizza },
    { id: 4, name: 'Garlic Breadsticks + Pepsi', description: 'Enjoy the all time favourite Garlic Breadsticks with Pepsi (475 ml)', price: 150, image: assets.Garlic_Breadsticks_Pepsi },
    { id: 5, name: 'Garlic Breadsticks + Cheesy Dip', description: 'Enjoy the all-time favorite Garlic Breadsticks with the indulgent Cheesy Dip', price: 138, image: assets.GarlicBreadsticks_CheesyDip },
    { id: 6, name: 'Coca-Cola', description: 'Refreshing soda to quench your thirst.', price: 65, image: assets.CocaCola },
    { id: 7, name: 'Hot and Sweet Veg Combo', description: 'Reg Blazing On & Paprika + Reg Fiery Jalapeno & Paprika + CLC + Pepsi', price: 450, image: assets.HotandSweetVegCombo },
    { id: 8, name: 'Spicy Chicken Pops', description: 'Bite sized Chicken Popcorns, cooked to perfection with Chili Seasoning for a delicious snack experience!', price: 120, image: assets.SpicyChickenPops },
    { id: 9, name: 'Spicy Crispy Chicken Wings', description: 'Crispy Chicken Wings, cooked to perfection with Chili Seasoning for an explosive flavor experience!', price: 120, image: assets.SpicyCrispyChickenWings },
    { id: 10, name: 'Saucy Chicken Pops', description: 'Bite sized Chicken Popcorns, smothered in Creamy Garlic & Spicy Guntur Chili Sauce for a delectable treat!', price: 150, image: assets.SaucyChickenPops },
    { id: 11, name: 'Fiery Jalapeno & Paprika', description: 'Spiciest veg pizza with jalapeno & red paprika toppings and a new spicy peri peri sauce.', price: 200, image: assets.FieryJalapeno_Paprika },
    { id: 12, name: 'Fresh Veggie Pizza', description: 'Delectable combination of onion & capsicum, a veggie lovers pick', price: 210, image: assets.FreshVeggiePizza },
    { id: 13, name: 'Double Cheese Margherita Pizza', description: 'A classic delight loaded with extra 100% real mozzarella cheese', price: 200, image: assets.DoubleCheeseMargheritaPizza },
    { id: 14, name: 'Big Spicy Paneer Wrap', description: 'Spicy paneer, veggies, wrapped in tortilla.', price: 250, image: assets.BigSpicyPaneerWrap },
    { id: 15, name: 'Big Spicy Chicken Wrap', description: 'Spicy chicken, fresh veggies, tortilla wrap.', price: 270, image: assets.BigSpicyChickenWrap },
    { id: 16, name: 'Chicken Dominator Pizza', description: 'Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers', price: 370, image: assets.ChickenDominatorPizza },
    { id: 17, name: 'Non Veg Supreme Pizza', description: 'Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken & grilled chicken rashers', price: 370, image: assets.NonVegSupremePizza }

];

const DominosPage = () => {
  const { addToCart, getTotalCartItems } = useStore();

  return (
    <div className="DominosPage-page">
      <header className="DominosPage-header">
        <h1 className="DominosPage-title">Welcome to Dominos Page</h1>
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

export default DominosPage;
