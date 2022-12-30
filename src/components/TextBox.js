import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState(" ");

  const onHandleUpClick = () => {
    const convertup = text.toUpperCase();
    setText(convertup);
    if (text.length > 1) {
      props.showAlert("converted to uppercase", "success");
    } else {
      return( props.showAlert("Put some text", "danger"));
    }
  };

  const onHandleLoClick = () => {
    const convertLo = text.toLowerCase();
    setText(convertLo);
    if (text.length > 1) {
      props.showAlert("converted to Lowercase", "success");
    } else {
      return( props.showAlert("Put some text", "danger"));
    }
   
  };

  const onHandleClearClick = () => {
    const convertup = "";
    setText(convertup);
    if (text.length > 1) {
      props.showAlert("Text deleted", "success");
    } else {
      return( props.showAlert("Put some text", "danger"))
    }
    
  };
  const onHandleCopyClick = () => {
    const copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(text.value);
    if (text.length > 1) {
      props.showAlert("text copyd", "success");
    } else {
      return( props.showAlert("Put some text", "danger"))
    }
   
  };
  const onHandleCleanSpaceClick = () => {
    const ClearSpace = text.split(/[ ]+/);
    setText(ClearSpace.join(" "));
    if (text.length > 1) {
      props.showAlert("Space clean", "success");
    } else {
      return (
        props.showAlert("Put some text", "danger")
      )
    }
  };

  const onHandleChange = (event) => {
    setText(event.target.value);
  };

  // const[ myTextBoxStyle, setmyTextBoxStyle] =  useState({
  //  color: "black",
  //   backgroundColor: "white",
  // })

  // const OnClickDarkMode = () => {
  //   if(myTextBoxStyle.color === "black"){
  //     setmyTextBoxStyle({
  //       color: "white",
  //     backgroundColor: "black"})
  //   }
  //   else if(myTextBoxStyle.color ==="white"){
  //     setmyTextBoxStyle({
  //       color: "black",
  //     backgroundColor: "white"})
  //   }
  // }
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        {" "}
        {/*style={myTextBoxStyle} */}
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={onHandleChange}
            className="form-control"
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button
          onClick={onHandleUpClick}
          type="button"
          className="btn btn-danger my-3 mx-3"
        >
          Uppercase Convert
        </button>
        <button
          onClick={onHandleLoClick}
          type="button"
          className="btn btn-danger  my-3 mx-3 "
        >
          Lowercase Convert
        </button>
        <button
          onClick={onHandleCopyClick}
          type="button"
          className="btn btn-danger  my-3 mx-3"
        >
          Copy Text
        </button>
        <button
          onClick={onHandleCleanSpaceClick}
          type="button"
          className="btn btn-danger  my-3 mx-3"
        >
          Clear Spaces
        </button>
        <button
          onClick={onHandleClearClick}
          type="button"
          className="btn btn-danger  my-3 mx-3"
        >
          Clear All
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        {/*style={myTextBoxStyle} */}
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length} characteors
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </p>
      </div>
      <div>
        {/* <button
          onClick={OnClickDarkMode}
          type="button"
          className="btn btn-danger  my-3 mx-3"
        >
          Dark Mode
        </button> */}
      </div>
    </>
  );
}
