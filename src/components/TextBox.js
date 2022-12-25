import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState();

  const onHandleUpClick = () => {
    const convertup = text.toUpperCase();
    setText(convertup);
  };
  const onHandleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container my-3">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
        placeholder="Enter Text Here"
          value={text}
          onChange={onHandleChange}
          className="form-control"
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button onClick={onHandleUpClick} className="btn btn-primary">
        Convert Button
      </button>
    </div>
  );
}
