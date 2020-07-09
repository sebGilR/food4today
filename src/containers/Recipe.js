import React, { useCallback } from 'react';
// import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import * as Actions from '../store/actions';
import {
  BASE,
  LOOKUP_ID,
} from '../services/mealsdb';

const Recipe = props => {
  // const { id } = useParams();
  const id = '52772';
  const {
    recipe,
    isLoading,
    isError,
    fetchInit,
    fetchSuccess,
    fetchFailure,
  } = props;

  const fetchRecipe = useCallback(() => {
    fetchInit();

    Axios.get(`${BASE}${LOOKUP_ID}${id}`)
      .then(result => {
        fetchSuccess(result.data);
      })
      .catch(err => {
        fetchFailure();
        console.log(err);
      });

  }, [fetchSuccess, fetchInit, fetchFailure, id])

  React.useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe]);

  const ingredients = [];

  !isLoading && Object.entries(recipe).forEach(([key, value]) => {
    let item = ''
    if (key.includes('strIngredient') && value) {
      item = value.split('');
      item[0] = item[0].toUpperCase();
      ingredients.push(item.join(''))
    }
  });

  return (
    <>
      {isError && <p>Something went wrong ...</p>}
      {
        isLoading ? 'Loading data...' :
          <>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="picture" />
            <h2>{recipe.strMeal}</h2>
            <ul className="info">
              <li key={recipe.strCategory}>
                Category: {recipe.strCategory}
              </li>
              <li key={recipe.strArea}>
                Origin: {recipe.strArea}
              </li>
            </ul>
            <ul className="ingredients">
              {
                ingredients.map(item =>
                  <li key={item}>{item}</li>
                )
              }
            </ul>
          </>
      }
    </>
  )
};

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  recipe: state.data.recipes[0],
  url: state.url,
});

const mapDispatchToProps = dispatch => ({
  fetchInit: () => {
    dispatch(Actions.fetchInit());
  },
  fetchSuccess: data => {
    dispatch(Actions.fetchSuccess(data));
  },
  fetchFailure: () => {
    dispatch(Actions.fetchFailure());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
