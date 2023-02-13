import Button from "./components/Button";
import "./App.css";

function App() {
  let [important, notImportant] = ["important", "Not important"];

  return (
    <div>
      <Button title={important} />
      <Button title={notImportant} />
    </div>
  );
}

export default App;
