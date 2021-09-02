import { combineReducers, createStore } from "redux";
import { backgroundReducer } from "./background";

const reducer = combineReducers({
  isBackground: backgroundReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
