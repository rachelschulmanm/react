import Balloon from "./Balloon";

function Child(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <Balloon />
    </div>
  );
}
export default Child;
