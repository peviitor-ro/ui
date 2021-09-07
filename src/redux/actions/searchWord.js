import { SET_SEARCH_WORD } from "redux/constants/constants";

export const setSearchWord = (data) => {
  return {
    type: SET_SEARCH_WORD,
    payload: data,
  };
};