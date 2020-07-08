import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import recipesReducer from './recipesReducer';
import urlReducer from './urlReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
  data: recipesReducer,
  categories: categoriesReducer,
  filter: filterReducer,
  url: urlReducer,
});

export default rootReducer;
