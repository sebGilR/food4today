import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import style from '../assets/styles/Recipe.module.scss';
import * as Actions from '../store/actions';
import {
  BASE,
  LOOKUP_ID,
} from '../services/mealsdb';

const Recipe = props => {
  const { id } = useParams();
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
  }, [fetchSuccess, fetchInit, fetchFailure, id]);

  React.useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe]);

  const ingredients = [];
  const measures = [];

  !isLoading && Object.entries(recipe)
    .forEach(([key, value]) => {
      if (key.includes('strIngredient') && value) {
        const item = value.split('');
        item[0] = item[0].toUpperCase();
        ingredients.push(item.join(''));
      } else if (key.includes('strMeasure') && value) {
        measures.push(value);
      }
    });

  const getVidId = url => {
    let vidId;
    if (!isLoading) {
      vidId = url.split('=');
      vidId = vidId[1];
    }

    return vidId;
  };

  return (
    <section className={style.container}>
      {isError && <p className={style.msg}>Something went wrong...</p>}
      {
        isLoading ? <p className={style.msg}>Loading recipe...</p>
          : (
            <>
              <h2 className={style.title}>
                {recipe.strMeal}
              </h2>
              <div className={style.info}>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className={style.picture} />
                <ul className={style.infoData}>
                  <li key={recipe.strCategory}>
                    <strong>Category: </strong>
                    {recipe.strCategory}
                  </li>
                  <li key={recipe.strArea}>
                    <strong>Origin: </strong>
                    {recipe.strArea}
                  </li>
                </ul>
              </div>
              <div className={style.details}>
                <table>
                  <thead>
                    <tr className={style.theader}>
                      <th>Ingredients</th>
                      <th>Measure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    ingredients.map((item, i) => (
                      <tr key={`${item}${i}`}>
                        <td>{item}</td>
                        <td>{measures[i]}</td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
                <div className={style.videoPlayer}>
                  <iframe
                    src={`https://www.youtube.com/embed/${getVidId(recipe.strYoutube)}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={recipe.strMeal}
                  />
                </div>
              </div>
              <h3 className={`${style.title} ${style.left}`}>Instructions</h3>
              <p className={style.instructions}>
                {recipe.strInstructions}
              </p>
            </>
          )
      }
    </section>
  );
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
