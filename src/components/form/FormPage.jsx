import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./FormPage.css";

const validate = (barcode) => {
  const regx = /^[0-9]{4,16}$/;
  return regx.test(barcode);
};

function FormPage() {
  const [barcode, setBarCode] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const onChangeHandler = (event) => {
    let input = event.target.value;
    if ((input).includes('\n')) {
      input = input.replace('\n', '');
      history.push(`/result/${input}`);
    }
    setBarCode(input);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (validate(barcode)) {
      setError((prevState) => !prevState);
      history.push(`/result/${barcode}`);
    } else setError((prevState) => !prevState);
  };

  return (
    <div className="form-container">
      <form>
        <label htmlFor="barcode">Scan Barcode </label>
        <input
          type="text"
          id="barcode"
          value={barcode}
          autoFocus
          onChange={onChangeHandler}
          // onKeyPress={(event)=>{
          //   alert(event.key)
          //   if (event.key==="Enter") {
          //     history.push(`/result/${barcode}`);
          //   }
          // }}
          placeholder="123456789"
        />
        {error && <p className="error">Please enter a valid barcode!!</p>}
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
