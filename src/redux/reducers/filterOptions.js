import { SET_FILTER_OPTIONS_DATA } from "../constants/constants";

const initialState = {
  countries: [],
  cities: [],
  companies: [],
};

const filterOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_OPTIONS_DATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default filterOptionsReducer;
