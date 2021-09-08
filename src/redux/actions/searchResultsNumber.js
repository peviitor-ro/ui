import { SET_RESULTS_NUMBER } from "redux/constants/constants";

export const setSearchResultsNumber = (data) => {
  return {
    type: SET_RESULTS_NUMBER,
    payload: data,
  };
};