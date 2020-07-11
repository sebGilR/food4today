import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import style from '../assets/styles/List.module.scss';

const List = ({ recipes, handleClick, category }) => (
  <div className={style.wrapper}>
    <h3 className={style.title}>{category}</h3>
    <div className={style.container}>
      {recipes && recipes.map(recipe => (
        <Item
          key={recipe.idMeal}
          recipe={recipe}
          handleClick={handleClick}
        />
      ))}
    </div>

  </div>
);

List.defaultProps = {
  category: '',
  recipes: [],
};

List.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.array),
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default List;
