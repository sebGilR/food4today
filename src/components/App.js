import React from 'react';
import Catalogue from '../containers/Catalogue';
import Header from './Header';
import Footer from './Footer';
import Recipe from '../containers/Recipe';
import { Route } from 'react-router-dom';

const App = () => (
  <>
    <Header />
    <Route
      path="/:id"
      children={<Recipe />}
    />
    <Route
      exact
      path="/"
      children={<Catalogue />}
    />
    <Footer />
  </>
);

export default App;
