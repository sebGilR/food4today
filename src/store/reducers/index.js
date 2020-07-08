import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import recipesReducer from './recipesReducer';
import urlReducer from './urlReducer';

const rootReducer = combineReducers({
  data: recipesReducer,
  filter: filterReducer,
  url: urlReducer,
});

export default rootReducer;
