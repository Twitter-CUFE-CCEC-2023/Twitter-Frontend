import React, { useState, Fragment } from "react";
import classes from "./InputBox.module.css";
import $ from "jquery";
import { css } from "@emotion/react";

function InputBox(props) {
  const [inputValue, setinputValue] = useState(props.inputValue);

  const onInputchange = (event) => {
    setinputValue(event.target.value);
    props.onChangeVal(event.target.value);
  };



  const inputBoxRendered =
    props.inputName == "Bio" ? (
      <textarea
        type="text"
        className={`${classes.textareaField} form-control ms-2 me-2  mb-3`}
        rows="3"
        value={inputValue}
        onChange={onInputchange}
      ></textarea>
    ) : (
      <input
        type="text"
        className={`${classes.inputfield} form-control ms-2 me-2 pb-0 mb-3`}
        value={inputValue}
        onChange={onInputchange}
      />
    );
  return (
    <div
      className={`${
        props.inputName == "Name" ? classes.nameInput : classes.textInput
      } row mb-2 `}
    >
      <div className={`col form-group `}>
        {inputBoxRendered}
        <label className={`${classes.nameLabel} form-label`} id={props.pID}>
          {props.inputName}
        </label>
      </div>
    </div>
  );
}

export default InputBox;
