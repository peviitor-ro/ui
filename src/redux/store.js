import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from 'redux/reducers/searchResults';
import filterOptionsReducer from 'redux/reducers/filterOptions';
import currentFilterOptionReducer from './reducers/currentFilterOption';
import burgerReducer from './reducers/burger';
import searchResultsNumberReducer from 'redux/reducers/searchResultsNumber';
import searchWordReducer from 'redux/reducers/searchWord';

const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    searchResultsNumber: searchResultsNumberReducer,
    searchWord: searchWordReducer,
    filterOptions: filterOptionsReducer,
    currentFilterOption: currentFilterOptionReducer,
    isBurger: burgerReducer,
  },
});

export default store;
