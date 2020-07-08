import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import recipesReducer from './recipesReducer';

const rootReducer = combineReducers({
  data: recipesReducer,
  filter: filterReducer,
});

export default rootReducer;
