import React from 'react';
// import ingredient from '../assets/img/ingredients.png';

const Item = ({ recipe }) => {
  const { strMeal, strMealThumb } = recipe
  return (
    <div>
      <h4>{strMeal}</h4>
      <img src={`${strMealThumb}/preview`} alt={strMeal} />
    </div>
  )
};

export default Item;
