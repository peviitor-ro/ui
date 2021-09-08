import { SET_RESULTS_NUMBER } from "redux/constants/constants";

const searchResultsNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_RESULTS_NUMBER:
      return action.payload;
    default:
      return state;
  }
};
export default searchResultsNumberReducer;
