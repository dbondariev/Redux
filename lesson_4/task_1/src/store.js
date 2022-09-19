import { createStore } from "redux";
import counterReducer from './counter.reducer'

const store = createStore(
  counterReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store