import { combineReducers, createStore } from "redux";
import { backgroundReducer } from "./background";
import searchResultsReducer from "redux/reducers/searchResults";

const reducer = combineReducers({
  isBackground: backgroundReducer,
  searchResults: searchResultsReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
