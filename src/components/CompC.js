import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const CompC = () => {
  // Providerのvalueを受け取る
  const {dispatchProvided} = useContext(AppContext);

  return (
    <div>
      <h3>CompC</h3>
      <button onClick={() => dispatchProvided("add_1")}>add_1</button>
      <button onClick={() => dispatchProvided("multiple_3")}>multiple_3</button>
      <button onClick={() => dispatchProvided("reset")}>reset</button>
      <button onClick={() => dispatchProvided("default")}>default</button>
    </div>
  );
};

export default CompC;
