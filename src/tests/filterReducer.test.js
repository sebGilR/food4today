import { filterRecipes } from '../store/actions';
import filterReducer from '../store/reducers/filterReducer';

describe('filterReducer', () => {
  const payload = 'Seafood';
  it('returns a category to filter when action is "FILTER"', () => {
    expect(filterReducer('', filterRecipes(payload))).toEqual('Seafood')
  });

  it('returns the current state if "FILTER" is not the action received', () => {
    expect(filterReducer('State', { type: 'OTHER' })).toEqual('State')
  });

  it('returns an empty string of the state passed is undefined, and action is not "FILTER', () => {
    expect(filterReducer(undefined, { type: 'OTHER' })).toEqual('')
  });
})
