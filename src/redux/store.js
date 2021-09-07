import { combineReducers, createStore } from 'redux';
import { backgroundReducer } from './background';
import searchResultsReducer from 'redux/reducers/searchResults';
import filterOptionsReducer from 'redux/reducers/filterOptions';
import currentFilterOptionReducer from './reducers/currentFilterOption';
import burgerReducer from './reducers/burger';

const reducer = combineReducers({
  isBackground: backgroundReducer,
  searchResults: searchResultsReducer,
  filterOptions: filterOptionsReducer,
  currentFilterOption: currentFilterOptionReducer,
  isBurger: burgerReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
