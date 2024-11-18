import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './PopularRestaurants.css'; 
import { assets } from '../../assets/assets';

const restaurants = [
  { id: 1, name: 'McDonalds', rating: 4.5, link: '/McDonaldsPage', image: assets.McDonalds },
  { id: 2, name: 'Dominos', rating: 4.2, link: '/DominosPage', image: assets.Dominos },
  { id: 3, name: 'Taco Bell', rating: 4.8, link: '/taco_bell', image: assets.Taco_Bell },
  { id: 4, name: 'Chipotle', rating: 4.3, link: '/chipotle', image: assets.Chipotle },
  { id: 5, name: 'KFC', rating: 4.7, link: '/kfc', image: assets.KFC },
  { id: 6, name: 'Subway', rating: 4.1, link: '/subway', image: assets.Subway },
  { id: 7, name: 'Burger King', rating: 4.4, link: '/burger_king', image: assets.Burger_King },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span style={{ color: '#f5c518' }}>
      {'★'.repeat(fullStars)}
      {hasHalfStar && <span style={{ color: '#f5c518' }}>★</span>}
      {'☆'.repeat(emptyStars)}
    </span>
  );
};

const PopularRestaurants = () => {
  return (
    <div className="popular-restaurants-section">
      <h2 className="section-title">Popular Food Chains in <i>Namma Bengaluru!</i></h2>
      <div className="restaurants-container">
        {restaurants.map((restaurant) => (
          <Link to={restaurant.link} key={restaurant.id} className="restaurant-item">
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
            <h3 className="restaurant-name">{restaurant.name}</h3>
            <p className="restaurant-rating">
              {renderStars(restaurant.rating)}
              <span className="rating-value">({restaurant.rating})</span>
            </p>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default PopularRestaurants;
