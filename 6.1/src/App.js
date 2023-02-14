import React, { useState } from "react";
import "./App.css";

//
function App() {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button className="btn" onClick={counter}>
        increment
      </button>
      <p>{count}</p>
    </>
  );
}

export default App;
