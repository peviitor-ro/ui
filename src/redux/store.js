<<<<<<< HEAD
import { combineReducers, createStore } from 'redux';
import { backgroundReducer } from './background';
import searchResultsReducer from 'redux/reducers/searchResults';
import filterOptionsReducer from 'redux/reducers/filterOptions';
import currentFilterOptionReducer from './reducers/currentFilterOption';
import searchResultsNumberReducer from 'redux/reducers/searchResultsNumber';
import searchWordReducer from 'redux/reducers/searchWord';

const reducer = combineReducers({
  isBackground: backgroundReducer,
  searchWord: searchWordReducer,
=======
import { combineReducers, createStore } from "redux";
import searchResultsReducer from "redux/reducers/searchResults";
import filterOptionsReducer from "redux/reducers/filterOptions";
import currentFilterOptionReducer from "./reducers/currentFilterOption";

const reducer = combineReducers({
>>>>>>> origin/testing
  searchResults: searchResultsReducer,
  searchResultsNumber: searchResultsNumberReducer,
  filterOptions: filterOptionsReducer,
  currentFilterOption: currentFilterOptionReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
