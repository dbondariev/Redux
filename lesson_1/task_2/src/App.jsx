import React from "react";
import Header from "./Header";
import { userInfo } from "./user-context.js";

class App extends React.Component {
  state = {
    userData: userInfo,
  };

  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
}

export default App;
