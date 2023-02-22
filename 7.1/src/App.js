import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const colors = ["blue", "red", "yellow"];
  const [color, setColor] = useState("yellow");
  const random1 = (e) => {
    // console.log(e.target.innerText);
    setColor(e.target.innerText);
  };
  const random2 = (e) => {
    setColor(e.target.innerText);
  };
  const random3 = (e) => {
    setColor(e.target.innerText);
  };

  return (
    <div>
      <button onClick={random1} className={colors[0]}>
        {colors[0]}
      </button>
      <button onClick={random2} className={colors[1]}>
        {colors[1]}
      </button>

      <button onClick={random3} className={colors[2]}>
        {colors[2]}
      </button>
      <h1>the color selected is:{color}</h1>
    </div>
  );
}

export default App;
