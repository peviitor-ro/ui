import { SET_FILTER_OPTIONS_DATA } from "../constants/constants";

const filterOptionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FILTER_OPTIONS_DATA:
      return { ...action.payload };
    default:
      return state;
  }
};
export default filterOptionsReducer;
