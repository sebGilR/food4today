import React from 'react';
import { withRouter } from 'react-router';
import style from '../assets/styles/Item.module.scss';

const Item = ({ recipe, history, handleClick }) => {
  const { idMeal, strMeal, strMealThumb } = recipe;
  const clickEffect = (id) => {
    handleClick();
    history.push(`/${id}`);
  }

  return (
    <div className={style.item} onClick={() => clickEffect(idMeal)}>
      <h4 className={style.name}>{strMeal}</h4>
      <img className={style.thumb} src={strMealThumb} alt={strMeal} />
    </div>
  )
};

export default withRouter(Item);
