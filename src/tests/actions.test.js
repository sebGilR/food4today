import {
  filterRecipes,
  getCategories,
  getCategory,
  getRecipe,
  fetchFailure,
  fetchInit,
  fetchSuccess
} from '../store/actions';

describe('State actions', () => {
  describe('filterRecipes', () => {
    it('returns an object with type "FILTER"', () => {
      expect(filterRecipes('Seafood').type).toEqual('FILTER')
    });

    it('returns an object with payload equal to the passed category', () => {
      expect(filterRecipes('Seafood').payload).toEqual('Seafood')
    });

    it('returns an object with payload and type properties', () => {
      expect(filterRecipes('Seafood')).toEqual({ type: 'FILTER', payload: 'Seafood' })
    });
  });

  describe('getCategories', () => {
    const payload = ['Seafood', 'Chicken']
    it('returns an object with type "CATEGORIES"', () => {
      expect(getCategories(payload).type).toEqual('CATEGORIES')
    });

    it('returns an object with payload equal to a passed array of categories', () => {
      expect(getCategories(payload).payload).toEqual(['Seafood', 'Chicken'])
    });

    it('returns an object with payload and type properties', () => {
      expect(getCategories(payload)).toEqual({ type: 'CATEGORIES', payload: ['Seafood', 'Chicken'] })
    });
  });
});
