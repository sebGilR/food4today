import React from 'react';
import ingredient from '../assets/img/ingredient.png';

const Item = () => {
  return (
    <div>
      <h4>Dish Name</h4>
      <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg" />
      <p>
        <span>5</span>
        <img src={ingredient} alt="Ingredients" />
        ingredients
      </p>
    </div>
  )
};

export default Item;
