import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchFood from './components/Search food/search_food';
import PopularFood from './components/Popular Food scroll/popular_food_scroll'; 
import PopularRestaurants from './components/PopularRestraunts/PopularRestaurants';
import Login from './components/Login/Login';
import SignUp from './components/Sign Up/SignUp';
import FoodItemsList from './components/FoodItemsList/FoodItemsList';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/Aboutus';
import McDonaldsPage from './components/McDonaldsPage/McDonaldsPage';
import DominosPage from './components/Dominos/Dominos';
import TacoBell from './components/TacoBell/TacoBell';
import Chipotle from './components/Chipotle/Chipotle';
import KFC from './components/KFC/KFC';
import Subway from './components/Subway/Subway';
import BurgerKing from './components/BurgerKing/BurgerKing';
import ChineseWok from './components/ChineseWok/ChineseWok';
import Cart from './components/Cart/Cart';
import Paakshala from './components/Paakshala/Paakshala';
import CafeAmudham from './components/CafeAmudham/CafeAmudham';
import VidyarthiBhavan from './components/VidyarthiBhavan/VidyarthiBhavan';
import BangaloreThindies from './components/BangaloreThindies/BangaloreThindies';
import VirinchiCafe from './components/VirinchiCafe/VirinchiCafe';
import SLVCornerRestaurant from './components/SLVCornerRestaurant/SLVCornerRestaurant';
import SriUdupiPark from './components/SriUdupiPark/SriUdupiPark';
import IDCKitchen from './components/IDCKitchen/IDCKitchen';
import PuliyogarePoint from './components/PuliyogarePoint/PuliyogarePoint';
import AyodhyaUpachar from './components/AyodhyaUpachar/AyodhyaUpachar';
import UdupiShanthiSagar from './components/UdupiShanthiSagar/UdupiShanthiSagar';
import TheVegandVeg from './components/TheVegandVeg/TheVegandVeg';
import ArogyaAhaara from './components/ArogyaAhaara/ArogyaAhaara';
import IndraprasthaVegetarian from './components/IndraprasthaVegetarian/IndraprasthaVegetarian';
import ContactUs from './components/ContactUs/ContactUs';
import Checkout from './components/Checkout/Checkout';
import { StoreProvider } from './Context/StoreContext';  


function App() {
  return React.createElement(
    StoreProvider, 
    null, 
    React.createElement(
      Router, 
      null,
      React.createElement(Navbar),
      React.createElement(
        Routes, 
        null,
        React.createElement(Route, { path: "/login", element: React.createElement(Login) }),
        React.createElement(Route, { path: "/signup", element: React.createElement(SignUp) }),
        React.createElement(Route, { path: "/about", element: React.createElement(AboutUs) }),
        React.createElement(Route, { path: "/contact", element: React.createElement(ContactUs) }),
        React.createElement(Route, { path: "/McDonaldsPage", element: React.createElement(McDonaldsPage) }),
        React.createElement(Route, { path: "/DominosPage", element: React.createElement(DominosPage) }),
        React.createElement(Route, { path: "/taco_bell", element: React.createElement(TacoBell) }),
        React.createElement(Route, { path: "/chipotle", element: React.createElement(Chipotle) }),
        React.createElement(Route, { path: "/kfc", element: React.createElement(KFC) }),
        React.createElement(Route, { path: "/subway", element: React.createElement(Subway) }),
        React.createElement(Route, { path: "/burger_king", element: React.createElement(BurgerKing) }),
        React.createElement(Route, { path: "/ChineseWok", element: React.createElement(ChineseWok) }),
        React.createElement(Route, { path: "/cart", element: React.createElement(Cart) }),
        React.createElement(Route, { path: "/Paakshala", element: React.createElement(Paakshala) }),
        React.createElement(Route, { path: "/CafeAmudham", element: React.createElement(CafeAmudham) }),
        React.createElement(Route, { path: "/VidyarthiBhavan", element: React.createElement(VidyarthiBhavan) }),
        React.createElement(Route, { path: "/BangaloreThindies", element: React.createElement(BangaloreThindies) }),
        React.createElement(Route, { path: "/ChalukyaSamratCafe", element: React.createElement(BangaloreThindies) }),
        React.createElement(Route, { path: "/VirinchiCafe", element: React.createElement(VirinchiCafe) }),
        React.createElement(Route, { path: "/SLVCornerRestaurant", element: React.createElement(SLVCornerRestaurant) }),
        React.createElement(Route, { path: "/SriUdupiPark", element: React.createElement(SriUdupiPark) }),
        React.createElement(Route, { path: "/IDCKitchen", element: React.createElement(IDCKitchen) }),
        React.createElement(Route, { path: "/PuliyogarePoint", element: React.createElement(PuliyogarePoint) }),
        React.createElement(Route, { path: "/AyodhyaUpachar", element: React.createElement(AyodhyaUpachar) }),
        React.createElement(Route, { path: "/UdupiShanthiSagar", element: React.createElement(UdupiShanthiSagar) }),
        React.createElement(Route, { path: "/TheVegAndVeg", element: React.createElement(TheVegandVeg) }),
        React.createElement(Route, { path: "/ArogyaAhaara", element: React.createElement(ArogyaAhaara) }),
        React.createElement(Route, { path: "/IndraprasthaVegetarian", element: React.createElement(IndraprasthaVegetarian) }),
        React.createElement(Route, { path: "/Checkout", element: React.createElement(Checkout) }),
        React.createElement(Route, { 
          path: "/", 
          element: React.createElement(
            React.Fragment, 
            null, 
            React.createElement(SearchFood),
            React.createElement(PopularFood),
            React.createElement(PopularRestaurants),
            React.createElement(FoodItemsList)
          )
        })
      ),
      React.createElement(Footer)
    )
  );
}

export default App;