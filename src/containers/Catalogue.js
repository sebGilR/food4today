import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import List from '../components/List';
// import Recipe from '../components/Recipe';

const Catalogue = (props) => {
  return (
    <>
      <Header />
      <Filter />
      <List />
      <Footer />
    </>
  )
};

export default Catalogue;
