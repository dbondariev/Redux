import {createStore, combineReducers} from 'redux';
import optionsReducer from './options/options.reducer'

const reducer = combineReducers({
  options: optionsReducer,
})

const store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store