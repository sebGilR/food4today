import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import style from '../assets/styles/Catalogue.module.scss';
import * as Actions from '../store/actions';
import Filter from '../components/Filter';
import List from '../components/List';
import {
  BASE,
  LOOKUP_CATS,
} from '../services/mealsdb';

const Catalogue = (props) => {
  const {
    url,
    categories,
    fetchInit,
    fetchSuccess,
    fetchFailure,
    filter,
    getCategory,
    getCategories
  } = props
  const handleFilter = e => {
    props.filterRecipes(e.target.innerText);
  };

  const fetchCategories = useCallback(() => {
    Axios.get(`${BASE}${LOOKUP_CATS}`)
      .then(result => {
        getCategories(result.data.categories);
      })
      .catch(err => {
        fetchFailure();
      });

  }, [getCategories, fetchFailure])

  const handleFilterSelect = useCallback(() => {
    getCategory(filter);
  }, [filter, getCategory])

  const handleFetchRecipes = useCallback(() => {
    if (!url) {
      return;
    };

    fetchInit();

    Axios.get(url)
      .then(result => {
        fetchSuccess(result.data);
      })
      .catch(() => {
        fetchFailure();
      })

  }, [url, fetchInit, fetchSuccess, fetchFailure]);

  const handleClick = () => fetchInit();

  React.useEffect(() => {
    handleFilterSelect()
  }, [handleFilterSelect]);

  React.useEffect(() => {
    handleFetchRecipes();
  }, [handleFetchRecipes]);

  React.useEffect(() => {
    fetchCategories();
  }, [fetchCategories])

  return (
    <div className={style.container}>
      {props.data.isError && <p className={style.msg}>Something went wrong...</p>}
      {
        !props.filter && <p className={style.msg}>Please select a category</p>
      }
      {
        props.data.isLoading ?
          <p className={style.msg}>Loading recipes...</p> :
          <Filter
            categories={categories}
            handleFilter={handleFilter}
          />
      }
      {
        !props.data.isLoading &&
        <List recipes={props.data.recipes} handleClick={handleClick} category={filter} />
      }

    </div>
  )
};

const mapStateToProps = state => ({
  data: state.data,
  categories: state.categories,
  filter: state.filter,
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
  filterRecipes: category => {
    dispatch(Actions.filterRecipes(category));
  },
  getCategory: category => {
    dispatch(Actions.getCategory(category));
  },
  getCategories: categories => {
    dispatch(Actions.getCategories(categories));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
