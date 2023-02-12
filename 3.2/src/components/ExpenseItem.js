const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";
function ExpenseItem() {
  return (
    <div>
      <p>Hello World</p>
      <h2 className="font-bold text">
        {" "}
        {number1}+{number2} = {number1 + number2}{" "}
      </h2>
      <h3>the string’s length is: {string.length}</h3>
    </div>
  );
}
export default ExpenseItem;
