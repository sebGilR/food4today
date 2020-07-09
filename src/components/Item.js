import React from 'react';
import { withRouter } from 'react-router';
// import ingredient from '../assets/img/ingredients.png';

const Item = ({ recipe, history, handleClick }) => {
  const { idMeal, strMeal, strMealThumb } = recipe;
  const clickEffect = (id) => {
    handleClick();
    history.push(`/${id}`);
  }

  return (
    <div onClick={() => clickEffect(idMeal)}>
      <h4>{strMeal}</h4>
      <img src={`${strMealThumb}/preview`} alt={strMeal} />
    </div>
  )
};

export default withRouter(Item);
