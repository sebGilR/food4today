import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import List from './List';

const Catalogue = (props) => {

  const handleFilter = e => {
    props.filterRecipes(e.target.innerText);
  };

  const handleFilterSelect = e => {
    props.getCategory(e.target.innerText);
  };

  return (
    <>
      <Header />
      <Filter />
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
