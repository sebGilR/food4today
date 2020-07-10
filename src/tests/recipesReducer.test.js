import {
  fetchFailure,
  fetchInit,
  fetchSuccess
} from '../store/actions';
import recipesReducer from '../store/reducers/recipesReducer';

describe('recipesReducer', () => {
  const state = {
    recipes: [],
    isLoading: false,
    isError: false,
  };

  describe('Action type is RECIPE_FETCH_INIT', () => {
    it('returns the current state, setting isLoading to true, and isError to false', () => {
      expect(recipesReducer(state, fetchInit())).toEqual({
        recipes: [],
        isLoading: true,
        isError: false,
      })
    });
  });

  describe('Action type is RECIPE_FETCH_SUCCESS', () => {
    it('returns a new recipes array, setting isLoading to false, and isError to false', () => {
      expect(recipesReducer(state, fetchSuccess({ meals: ['item', 'other item'] }))).toEqual({
        recipes: ['item', 'other item'],
        isLoading: false,
        isError: false,
      })
    });
  });

  describe('Action type is RECIPE_FETCH_FAILURE', () => {
    it('returns the current state, setting isLoading to false, and isError to true', () => {
      expect(recipesReducer(state, fetchFailure())).toEqual({
        recipes: [],
        isLoading: false,
        isError: true,
      })
    });
  });

  it('returns current state if the action type is not one expected', () => {
    expect(recipesReducer(state, { type: 'OTHER' })).toEqual({
      recipes: [],
      isLoading: false,
      isError: false,
    })
  });

  it(`returns an empty object for state if it us undefined
    and the action type is not one expected`, () => {
    expect(recipesReducer(undefined, { type: 'OTHER' })).toEqual({})
  });
});
