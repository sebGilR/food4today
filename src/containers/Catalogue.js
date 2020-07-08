import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import * as Actions from '../store/actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import List from './List';
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
        console.log(result.data.categories)
        getCategories(result.data.categories);
      })
      .catch(err => {
        console.log(err);
      });

  }, [getCategories])

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
    <>
      <Header />
      <Filter
        categories={categories}
        handleFilter={handleFilter}
      />
      <List recipes={props.data.recipes} />
      <Footer />
    </>
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
