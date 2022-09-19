import { createStore, combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { cartReducer } from "./cart.reducer";
import { languageReducer } from "./language.reducer";

const appReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
