import React from "react";
const Form = () => {
  const input = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <form>
        <b>form</b> <br />
        <label>First Name</label>
        <input type="text" onChange={input} />
        <br />
        <label>Last Name</label>
        <input type="text" onChange={input} />
        <br />
        <label>Age:</label>
        <select id="cars" name="cars" size="1" onChange={input}>
          <option value="0-15">0-15</option>
          <option value="16-30">16-30</option>
          <option value="31-50">31-50</option>
          <option value="50+">50+</option>
        </select>
        <br />
        <label>Free Text</label>
        <textarea rows={2} cols={20} />
        <br />
        <button>continue</button>
      </form>
    </div>
  );
};
export default Form;
