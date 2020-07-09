import React from 'react';
import Item from './Item';
import style from '../assets/styles/List.module.scss';

const List = ({ recipes, handleClick, category }) => (
  <div className={style.wrapper}>
    <h3 className={style.title}>{category}</h3>
    <div className={style.container}>
      {recipes
        && recipes.map(recipe => <Item key={recipe.idMeal} recipe={recipe} handleClick={handleClick} />)}
    </div>

  </div>
);

export default List;
