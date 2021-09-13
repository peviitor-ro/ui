import { combineReducers, createStore } from "redux";

import searchResultsReducer from "redux/reducers/searchResults";
import filterOptionsReducer from "redux/reducers/filterOptions";
import currentFilterOptionReducer from "./reducers/currentFilterOption";
import burgerReducer from "./reducers/burger";
import checkScreenSizeReducer from "redux/reducers/mediaQueries";
import switchBackgroundReducer from "./reducers/switchBackground";

const reducer = combineReducers({
  searchResults: searchResultsReducer,
  filterOptions: filterOptionsReducer,
  currentFilterOption: currentFilterOptionReducer,
  isBurger: burgerReducer,
  isMobile: checkScreenSizeReducer,
  switchBackground: switchBackgroundReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
