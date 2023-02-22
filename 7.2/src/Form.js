import React, { useState } from "react";

const Form = () => {
  // const [check, setCheck] = useState("");
  // setCheck(true);

  return (
    <div>
      <input type="checkbox" checked={true} />I read the term and conditions
      <br />
      <input type="checkbox" checked={true} />I accept the terms
      <br />
      <input type="checkbox" />I want to get the weekly..
      <br />
      <input type="checkbox" />I want to get sales and offers
    </div>
  );
};
export default Form;
