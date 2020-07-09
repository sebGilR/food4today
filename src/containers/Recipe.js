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
  const measures = [];

  !isLoading && Object.entries(recipe).forEach(([key, value]) => {
    if (key.includes('strIngredient') && value) {
      let item = value.split('');
      item[0] = item[0].toUpperCase();
      ingredients.push(item.join(''));
    } else if (key.includes('strMeasure') && value) {
      measures.push(value);
    };
  });

  for (let i = 0; i < ingredients.length; i += 1) {
    ingredients[i] = `${ingredients[i]}: ${measures[i]}`;
  };

  let vidId;

  if (!isLoading) {
    vidId = recipe.strYoutube.split('=');
    vidId = vidId[1];
  }

  return (
    <>
      {isError && <p>Something went wrong...</p>}
      {
        isLoading ? 'Loading data...' :
          <>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="picture" />
            <ul className="ingredients">
              {
                ingredients.map(item =>
                  <li key={item}>{item}</li>
                )
              }
            </ul>
            <h2>{recipe.strMeal}</h2>
            <ul className="info">
              <li key={recipe.strCategory}>
                Category: {recipe.strCategory}
              </li>
              <li key={recipe.strArea}>
                Origin: {recipe.strArea}
              </li>
            </ul>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${vidId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
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
