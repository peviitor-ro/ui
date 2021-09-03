import { SET_SEARCH_RESULTS } from "redux/constants/constants";

const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return [...action.payload];
    default:
      return state;
  }
};
export default searchResultsReducer;
