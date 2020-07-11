import { filterRecipes, getRecipe } from '../store/actions';
import urlReducer from '../store/reducers/urlReducer';

describe('urlReducer', () => {
  describe('FILTER', () => {
    it('returns a url formatted to query a given category', () => {
      expect(urlReducer('', filterRecipes('Seafood')))
        .toEqual('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    });
  });

  describe('RECIPE', () => {
    it('returns a url formatted to retrieve a given item by its ID', () => {
      expect(urlReducer('', getRecipe(5)))
        .toEqual('https://www.themealdb.com/api/json/v1/1/lookup.php?i=5');
    });
  });

  it('returns the current state if the action passed is not expected', () => {
    expect(urlReducer('Current state', { type: 'OTHER' }))
      .toEqual('Current state');
  });

  it(`returns an empty string as state if it is undefined
    and the action passed is not expected`, () => {
    expect(urlReducer(undefined, { type: 'OTHER' }))
      .toEqual('');
  });
});
