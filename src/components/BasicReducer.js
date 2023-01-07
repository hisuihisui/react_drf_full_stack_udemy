import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const BasicReducer = () => {
  // count:現在のState
  // dispatch:引数にコマンドの値(action)を入れるとreducerが実行
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count {count}</div>
      <button onClick={() => dispatch("add_1")}>add_1</button>
      <button onClick={() => dispatch("multiple_3")}>multiple_3</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <button onClick={() => dispatch("default")}>default</button>
    </div>
  );
};

export default BasicReducer;
