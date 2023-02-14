import Balloon from "./Balloon";

function Child(props) {
  return (
    <>
      {props.children}
      <Balloon color={props.style} />
    </>
  );
}
export default Child;
