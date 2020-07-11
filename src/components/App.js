import React from 'react';
import { Route } from 'react-router-dom';
import Catalogue from '../containers/Catalogue';
import Header from './Header';
import Footer from './Footer';
import Recipe from '../containers/Recipe';

const App = () => (
  <>
    <Header />
    <Route path="/:id">
      <Recipe />
    </Route>
    <Route exact path="/">
      <Catalogue />
    </Route>
    <Footer />
  </>
);

export default App;
