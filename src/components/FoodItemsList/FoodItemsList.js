import React from 'react';
import './FoodItemsList.css'; // Import CSS for styling
import { assets } from '../../assets/assets';

const foodItems = [
  {
    id: 1,
    image: assets.ChineseWok,
    name: 'Chinese Wok',
    rating: '4.4',
    deliveryTime: '55-60 mins',
    cuisine: 'Chinese, Asian, Tibetan, Desserts',
    location: 'Malleshwaram',
    price: '₹199',
    link: '/ChineseWok', // Add link here
  },
  {
    id: 2,
    image: assets.paakshala,
    name: 'Paakshala',
    rating: '4.5',
    deliveryTime: '25-30 mins',
    cuisine: 'Indian',
    location: 'Basavanagudi',
    discount: '50% OFF UPTO ₹100',
    link: '/Paakshala', // Add link here
  },
  {
    id: 3,
    image: assets.amudham,
    name: 'Cafe Amudham',
    rating: '4.6',
    deliveryTime: '30-35 mins',
    cuisine: 'South Indian, Snacks',
    location: 'Jayanagar',
    price: '₹160',
    link: '/CafeAmudham', // Add link here
  },
  {
    id: 4,
    image: assets.vidyarthi,
    name: 'Vidyarthi Bhavan',
    rating: '4.6',
    deliveryTime: '35-40 mins',
    cuisine: 'South Indian',
    location: 'Basavanagudi',
    link: '/VidyarthiBhavan', // Add link here
  },
  {
    id: 5,
    image: assets.blorethindies,
    name: 'Bangalore Thindies',
    rating: '4.3',
    deliveryTime: '30-35 mins',
    cuisine: 'South Indian',
    location: 'Shivaji Nagar',
    discount: '10% OFF UPTO ₹40',
    link: '/BangaloreThindies', // Add link here
  },
  {
    id: 6,
    image: assets.chalukya,
    name: 'Chalukya Samrat Cafe',
    rating: '4.5',
    deliveryTime: '35-40 mins',
    cuisine: 'Cafe, Fast Food, Indian, Chinese',
    location: 'Central Bangalore',
    price: '₹160',
    link: '/ChalukyaSamratCafe', // Add link here
  },
  {
    id: 7,
    image: assets.virinchi,
    name: 'Virinchi Cafe',
    rating: '4.5',
    deliveryTime: '25-30 mins',
    cuisine: 'Fast Food, South Indian',
    location: 'Ashok Nagar',
    discount: '10% OFF UPTO ₹40',
    link: '/VirinchiCafe', // Add link here
  },
  {
    id: 8,
    image: assets.slv,
    name: 'SLV Corner Restaurant',
    rating: '4.7',
    deliveryTime: '25-30 mins',
    cuisine: 'Chinese, South Indian, Desserts',
    location: 'Basavanagudi',
    link: '/SLVCornerRestaurant', // Add link here
  },
  {
    id: 9,
    image: assets.udupi,
    name: 'Sri Udupi Park (100ft Road)',
    rating: '4.5',
    deliveryTime: '50-55 mins',
    cuisine: 'South Indian, North Indian, Chinese',
    location: 'Indiranagar',
    price: '₹200',
    link: '/SriUdupiPark', // Add link here
  },
  {
    id: 10,
    image: assets.idc,
    name: 'IDC Kitchen',
    rating: '4.6',
    deliveryTime: '65-70 mins',
    cuisine: 'South Indian',
    location: 'JP Nagar',
    price: '₹119',
    link: '/IDCKitchen', // Add link here
  },
  {
    id: 11,
    image: assets.puli,
    name: 'Puliyogare Point',
    rating: '4.7',
    deliveryTime: '25-30 mins',
    cuisine: 'South Indian',
    location: 'Basavangudi',
    price: '₹100',
    link: '/PuliyogarePoint', // Add link here
  },
  {
    id: 12,
    image: assets.ayodhya,
    name: 'Ayodhya Upachar',
    rating: '4.5',
    deliveryTime: '50-55 mins',
    cuisine: 'South Indian, North Indian',
    location: 'Banashankari',
    discount: '20% OFF ABOVE ₹2000',
    link: '/AyodhyaUpachar', // Add link here
  },
  {
    id: 13,
    image: assets.udupiss,
    name: 'Udupi Shanthi Sagar',
    rating: '4.5',
    deliveryTime: '45-50 mins',
    cuisine: 'South Indian, Beverages',
    location: 'Frazer Town',
    link: '/UdupiShanthiSagar', // Add link here
  },
  {
    id: 14,
    image: assets.tvav,
    name: 'The Veg & Veg',
    rating: '4.7',
    deliveryTime: '55-60 mins',
    cuisine: 'South Indian, North Indian',
    location: 'Indiranagar',
    discount: '15% OFF ABOVE ₹2000',
    link: '/TheVegAndVeg', // Add link here
  },
  {
    id: 15,
    image: assets.arogya,
    name: 'Arogya Ahaara',
    rating: '4.6',
    deliveryTime: '50-55 mins',
    cuisine: 'South Indian, North Indian',
    location: 'JP Nagar',
    discount: '10% OFF UPTO ₹40',
    link: '/ArogyaAhaara', // Add link here
  },
  {
    id: 16,
    image: assets.indra,
    name: 'Indraprastha Vegetarian',
    rating: '4.6',
    deliveryTime: '40-45 mins',
    cuisine: 'South Indian, North Indian, Snacks',
    location: 'Vijayanagar',
    link: '/IndraprasthaVegetarian', // Add link here
  },
];

const FoodItemsList = () => {
  return (
    <div className="food-items-list">
      {foodItems.map((item) => (
        <div className="food-item" key={item.id}>
          <a href={item.link} className="food-item-link"> {/* Add link here */}
            <img src={item.image} alt={item.name} className="food-item-image" />
          </a>
          <div className="food-item-details">
            <h3>{item.name}</h3>
            <p>⭐ {item.rating} • {item.deliveryTime}</p>
            <p>{item.cuisine}</p>
            <p>{item.location}</p>
            {item.price && <p>Items at {item.price}</p>}
            {item.discount && <p>{item.discount}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItemsList;
