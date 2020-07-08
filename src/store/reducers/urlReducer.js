import {
  BASE,
  LOOKUP_CAT,
  LOOKUP_ID,
} from '../../services/mealsdb';

const urlReducer = (state = '', action) => {
  switch (action.type) {
    case 'CATEGORY':
      return `${BASE}${LOOKUP_CAT}${action.payload}`;
    case 'RECIPE':
      return `${BASE}${LOOKUP_ID}${action.payload}`;
    default:
      return state;
  }
};

export default urlReducer;
