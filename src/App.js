import "./App.css";
// import Basic1 from "./components/Basic1";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
import ApiFetch from "./components/ApiFetch";
import CompB from "./components/CompB";
// import B from "./components/B";
// import BasicReducer from "./components/BasicReducer";
import React, { useReducer } from "react";
import AppContext from "./contexts/AppContext";
import logo from "./logo.svg";

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <Basic2 /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <B /> */}
          {/* <BasicReducer /> */}
          <p>{count}</p>
          <CompB />
          <ApiFetch />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
