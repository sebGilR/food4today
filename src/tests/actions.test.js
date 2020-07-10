import {
  filterRecipes,
  getCategories,
  getRecipe,
  fetchFailure,
  fetchInit,
  fetchSuccess
} from '../store/actions';

describe('State actions', () => {
  describe('filterRecipes', () => {
    const payload = 'Seafood';
    it('returns an object with type "FILTER"', () => {
      expect(filterRecipes(payload).type).toEqual('FILTER')
    });

    it('returns an object with payload equal to the passed category', () => {
      expect(filterRecipes(payload).payload).toEqual('Seafood')
    });

    it('returns an object with payload and type properties', () => {
      expect(filterRecipes(payload)).toEqual({ type: 'FILTER', payload: 'Seafood' })
    });
  });

  describe('getCategories', () => {
    const payload = ['Seafood', 'Chicken'];
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

  describe('getRecipe', () => {
    const payload = 5;
    it('returns an object with type "RECIPE"', () => {
      expect(getRecipe(payload).type).toEqual('RECIPE')
    });

    it('returns an object with payload equal to a passed recipe ID', () => {
      expect(getRecipe(payload).payload).toEqual(5)
    });

    it('returns an object with payload and type properties', () => {
      expect(getRecipe(payload)).toEqual({ type: 'RECIPE', payload: 5 })
    });
  });

  describe('fetchInit', () => {
    it('returns an object with type "STORIES_FETCH_INIT"', () => {
      expect(fetchInit().type).toEqual('STORIES_FETCH_INIT')
    });
  });

  describe('fetchSuccess', () => {
    const data = { meals: [] };
    it('returns an object with type "STORIES_FETCH_SUCCESS"', () => {
      expect(fetchSuccess(data).type).toEqual('STORIES_FETCH_SUCCESS')
    });

    it('returns an array extracted from a passed data object', () => {
      expect(fetchSuccess(data).payload).toEqual([])
    });

    it('returns an object with payload and type properties', () => {
      expect(fetchSuccess(data)).toEqual({ type: 'STORIES_FETCH_SUCCESS', payload: [] })
    });
  });

  describe('fetchFailure', () => {
    it('returns an object with type "STORIES_FETCH_FAILURE"', () => {
      expect(fetchFailure().type).toEqual('STORIES_FETCH_FAILURE')
    });
  });
});
