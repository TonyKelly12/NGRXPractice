export function ProductReducer(state, action) {
  switch (action.type) {
    case 'ACTION_NAME':
      return {
        ...state,
        visibilityFilter: action.filter
      };
    default:
      return state;
  }
}
