export const filterRecipes = category => ({
  type: 'FILTER',
  payload: category,
});

export const getCategories = categories => ({
  type: 'CATEGORIES',
  payload: categories,
});

export const getCategory = category => ({
  type: 'CATEGORY',
  payload: category,
});

export const getRecipe = id => ({
  type: 'RECIPE',
  payload: id,
});

export const fetchInit = () => ({
  type: 'STORIES_FETCH_INIT',
});

export const fetchSuccess = data => ({
  type: 'STORIES_FETCH_SUCCESS',
  payload: data.meals,
});

export const fetchFailure = () => ({
  type: 'STORIES_FETCH_FAILURE',
});

export default filterRecipes;
