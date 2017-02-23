import React from "react";
import {Component, Actions} from "jumpsuit";

const App = Component({
  render () {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <button onClick={() => Actions.decrement()}>Decrement</button>
        <button onClick={() => Actions.increment()}>Increment</button>
      </div>
    )
  }
}, (state) => {
  return {
    count: state.counter.count
  }
});

export default App;
