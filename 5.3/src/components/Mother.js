import Child from "./Child";
function Mother() {
  const kids = [
    { name: "Ori", color: "red" },
    { name: "Ron", color: "blue" },
    { name: "Sigalit", color: "green" },
    { name: "Ruti", color: "yellow" },
    { name: "Alon", color: "purple" },
  ];

  return (
    <di>
      <h1>A Tale of five Balloons</h1>,
      <Child name={kids[0].name} />
      <Child name={kids[1].name} />
    </di>
  );
}
export default Mother;
