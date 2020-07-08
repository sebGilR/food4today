import {
  BASE,
  LOOKUP_CATS,
  LOOKUP_CAT,
  LOOKUP_ID,
} from '../../services/mealsdb';

const urlReducer = (state = '', action) => {
  switch (action.type) {
    case 'CATEGORIES':
      return `${BASE}${LOOKUP_CATS}`;
    case 'CATEGORY':
      return `${BASE}${LOOKUP_CAT}${action.payload}`;
    case 'RECIPE':
      return `${BASE}${LOOKUP_ID}${action.payload}`;
  }
};

export default urlReducer;
