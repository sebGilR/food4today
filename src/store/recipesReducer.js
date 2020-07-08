const recipesReducer = (state = [], action) => {
  if (action.type === 'FILTER') {
    return action.category
  }
  return state;
}

export default recipesReducer;