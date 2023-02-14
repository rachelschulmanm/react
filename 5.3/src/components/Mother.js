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
    <>
      <h1>A Tale of five Balloons</h1>
      <Child style={kids[0].color}>
        <h3>{kids[0].name}</h3>
      </Child>
      <Child style={kids[1].color}>
        <h3>{kids[1].name}</h3>
      </Child>
      <Child style={kids[2].color}>
        <h3>{kids[2].name}</h3>
      </Child>
      <Child style={kids[3].color}>
        <h3>{kids[3].name}</h3>
      </Child>
      <Child style={kids[4].color}>
        <h3>{kids[4].name}</h3>
      </Child>
    </>
  );
}
export default Mother;
