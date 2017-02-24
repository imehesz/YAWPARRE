import React from "react";
import {Component, Actions} from "jumpsuit";
import template from "./app.rt.html";

const App = Component({
  // exposing the Actions to the view layer if needed
  Actions: Actions,

  render() {
    return template.apply(this);
  }
}, (state) => {
  return {
    count: state.counter.count
  }
});

export default App;
