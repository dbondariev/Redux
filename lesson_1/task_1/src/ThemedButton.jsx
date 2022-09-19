import React from "react";
import { ThemeContext } from "./themes-context";

class ThemedButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        className="btn"
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
