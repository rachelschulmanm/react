import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [hide, setHide] = useState(true);
  const clickHolder = () => {
    setHide(!hide);
  };
  return (
    <div>
      <button onClick={clickHolder}>show/hide</button>
      {hide && <div className="yellow"></div>}
    </div>
  );
}

export default App;
