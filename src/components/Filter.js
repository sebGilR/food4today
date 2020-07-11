import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/styles/Filter.module.scss';

const Filter = ({ handleFilter, categories }) => (
  <section className={style.container}>
    <h3 className={style.title}>Categories</h3>
    <ul className={style.list}>
      {
        categories.map(category => (
          <li key={category.idCategory}>
            <img
              className={style.thumb}
              src={category.strCategoryThumb}
              alt={category.strCategory}
            />
            <span
              onClick={handleFilter}
              onKeyPress={handleFilter}
              role="presentation"
            >
              {category.strCategory}
            </span>
          </li>
        ))
      }
    </ul>
  </section>
);

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Filter;
