import { combineReducers, createStore } from 'redux';
import searchResultsReducer from 'redux/reducers/searchResults';
import filterOptionsReducer from 'redux/reducers/filterOptions';
import currentFilterOptionReducer from './reducers/currentFilterOption';
import burgerReducer from './reducers/burger';
import searchResultsNumberReducer from 'redux/reducers/searchResultsNumber';
import searchWordReducer from 'redux/reducers/searchWord';

const reducer = combineReducers({
  searchResults: searchResultsReducer,
  searchResultsNumber: searchResultsNumberReducer,
  filterOptions: filterOptionsReducer,
  currentFilterOption: currentFilterOptionReducer,
  isBurger: burgerReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
