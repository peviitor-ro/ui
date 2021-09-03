import { SET_SEARCH_RESULTS } from "redux/constants/constants";

export const setSearchResults = (data) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: data,
  };
};
