import React from 'react';

const Filter = ({ handleFilter }) => {

  return (
    <aside>
      <h3>Categories</h3>
      <ul>
        <li onClick={handleFilter}>Seafood</li>
      </ul>
    </aside>
  )
}

export default Filter;
