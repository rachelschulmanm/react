import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    if (counter > -10) {
      setCounter(counter - 1);
    }
  };
  function color() {
    if (counter === 0) {
      return "black";
    }
    if (counter < 0) {
      return "green";
    }
    if (counter > 0) {
      return "red";
    }
  }
  return (
    <>
      <button onClick={increment}>Increment </button>
      <label className={color()}>{counter}</label>
      <button onClick={decrement}>decrement</button>
    </>
  );
}
export default App;
