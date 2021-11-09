import { combineReducers, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import searchResultsReducer from "redux/reducers/searchResults";
import filterOptionsReducer from "redux/reducers/filterOptions";
import currentFilterOptionReducer from "./reducers/currentFilterOption";
import burgerReducer from "./reducers/burger";
import checkScreenSizeReducer from "redux/reducers/mediaQueries";
import switchBackgroundReducer from "./reducers/switchBackground";
import backgroundBtnReducer from "./reducers/backgroundBtn";

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  searchResults: searchResultsReducer,
  filterOptions: filterOptionsReducer,
  currentFilterOption: currentFilterOptionReducer,
  isBurger: burgerReducer,
  isMobile: checkScreenSizeReducer,
  switchBackground: switchBackgroundReducer,
  backgroundBtn: backgroundBtnReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);

export default store;
