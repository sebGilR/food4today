import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/reset.css';
import App from './components/App';
import rootReducer from './store/reducers';

const store = createStore(rootReducer,
  {
    data: { recipes: [], isLoading: true, isError: false },
    categories: [],
    url: '',
    filter: '',
  });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
