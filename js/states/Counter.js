import React from "react";
import {State} from 'jumpsuit';

const counterState = State({
  initial: { count: 0 },
  increment (state) {
    return { count: state.count + 1}
  },
  decrement (state) {
    return { count: state.count - 1}
  }
});

export default counterState;
