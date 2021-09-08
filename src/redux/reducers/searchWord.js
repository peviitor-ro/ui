import { SET_SEARCH_WORD } from "redux/constants/constants";

const searchWordReducer = (state = "", action) => {
    switch (action.type) {
      case SET_SEARCH_WORD:
        return action.payload;
      default:
        return state;
    }
  };
  export default searchWordReducer;