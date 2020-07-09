import React from 'react';
import Item from './Item';

const List = ({ recipes, handleClick }) => {
  return (
    <div>
      <h2>Category Name</h2>
      {recipes &&
        recipes.map(recipe =>
          <Item key={recipe.idMeal} recipe={recipe} handleClick={handleClick} />
        )
      }
    </div>
  )
};

export default List;
