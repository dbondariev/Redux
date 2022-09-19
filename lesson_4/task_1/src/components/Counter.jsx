import React, { useState } from "react";
import { connect } from "react-redux";
// option 1
// import { increment, decrement, reset } from "../counter.actions";

//option 2
import * as counterActions from "../counter.actions";

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    counter: state,
  };
};

// option 1

// const mapDispatch = dispatch => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset()),
//   };
// };



// option 2

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const connector = connect(mapState, mapDispatch); // HOK (higher order component) -> funct input component -> output component

export default connector(Counter);
