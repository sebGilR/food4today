import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import * as Actions from '../store/actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import List from './List';

const Catalogue = (props) => {

  const handleFilter = e => {
    props.filterRecipes(e.target.innerText);
  };

  const handleFilterSelect = () => {
    props.getCategory(props.filter);
  };

  const handleFetchRecipes = useCallback(() => {
    if (!props.url) {
      return;
    };

    console.log('Yo'); // Test

    props.fetchInit();

    Axios.get(props.url)
      .then(result => {
        props.fetchSuccess(result.data);
      })
      .catch(() => {
        props.fetchFailure();
      })

  }, [props.url]);

  React.useEffect(() => {
    handleFilterSelect()
  }, [props.filter]);

  React.useEffect(() => {
    handleFetchRecipes();
  }, [handleFetchRecipes]);

  return (
    <>
      <Header />
      <Filter
        handleFilter={handleFilter}
      />
      <List />
      <Footer />
    </>
  )
};

const mapStateToProps = state => ({
  data: state.data,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
