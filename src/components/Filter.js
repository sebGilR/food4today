import React from 'react';

const Filter = ({ handleFilter, categories }) => {

  return (
    <aside>
      <h3>Categories</h3>
      <ul>
        {
          categories.map(category => {
            return <li key={category.idCategory} onClick={handleFilter}>
              {category.strCategory}
            </li>
          })
        }
      </ul>
    </aside>
  )
}

export default Filter;
