import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import searchResultsReducer from "redux/reducers/searchResults";
import filterOptionsReducer from "redux/reducers/filterOptions";
import currentFilterOptionReducer from "./reducers/currentFilterOption";
import burgerReducer from "./reducers/burger";
import checkScreenSizeReducer from "redux/reducers/mediaQueries";
import switchBackgroundReducer from "./reducers/switchBackground";
import backgroundBtnReducer from "./reducers/backgroundBtn";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  filterOptions: filterOptionsReducer,
  currentFilterOption: currentFilterOptionReducer,
  isBurger: burgerReducer,
  isMobile: checkScreenSizeReducer,
  switchBackground: switchBackgroundReducer,
  backgroundBtn: backgroundBtnReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
