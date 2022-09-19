import React from "react";
import TransferList from "./options/TransferList";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
};

export default App;
