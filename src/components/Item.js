import React from 'react';
import ingredient from '../assets/img/ingredients.png';

const Item = () => {
  return (
    <div>
      <h4>Dish Name</h4>
      <img src="https://www.themealdb.com/images/media/meals/1548772327.jpg/preview" alt="preview" />
      <p>
        <span>5</span>
        <img src={ingredient} alt="Ingredients" />
        ingredients
      </p>
    </div>
  )
};

export default Item;
