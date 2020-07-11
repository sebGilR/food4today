import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import style from '../assets/styles/Item.module.scss';

const Item = ({ recipe, history, handleClick }) => {
  const { idMeal, strMeal, strMealThumb } = recipe;
  const clickEffect = id => {
    handleClick();
    history.push(`/${id}`);
  };

  return (
    <article className={style.item}>
      <div
        onClick={() => clickEffect(idMeal)}
        onKeyPress={() => clickEffect(idMeal)}
        role="presentation"
      >
        <h4 className={style.name}>{strMeal}</h4>
        <img className={style.thumb} src={strMealThumb} alt={strMeal} />
      </div>
    </article>
  );
};

Item.propTypes = {
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  history: PropTypes.objectOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withRouter(Item);
