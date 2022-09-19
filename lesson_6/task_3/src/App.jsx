import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Weather from "./weather/Weather";
// import SearchField from "./users/SearchField";

const App = () => (
  <Provider store={store}>
    <Weather />
  </Provider>
);

export default App;
