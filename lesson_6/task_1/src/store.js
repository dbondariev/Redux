import { applyMiddleware, createStore, compose } from "redux";
import counterReducer from "./counter.reducer";

const logger = store => next => action => {
  console.group(action.type);
  console.info(`dispatching`, action);
  let result = next(action);
  console.log(`new state `, store.getState());
  console.groupEnd(result);

  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
