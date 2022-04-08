import React, { useState, Fragment } from "react";
import classes from "./InputBox.module.css";
import $ from "jquery";
import { css } from "@emotion/react";

function InputBox(props) {
  const [inputValue, setinputValue] = useState(props.inputValue);

  const onInputchange = (event) => {
    setinputValue(event.target.value);
  };

  const onFocusoutInput = () => {
    $(props.labelID).css("color", "black");
  };
  const onFocusinInput = () => {
    $(props.labelID).css("color", "#1DA1F2");
  };

  const inputBoxRendered =
    props.inputName == "Bio" ? (
      <textarea
        type="text"
        className={` form-control ms-2 me-2 pt-3 mb-3`}
        rows="3"
        onFocus={onFocusinInput}
        onBlur={onFocusoutInput}
        value={inputValue}
        onChange={onInputchange}
      ></textarea>
    ) : (
      <input
        type="text"
        className={`${classes.inputfield} form-control ms-2 me-2 pb-0 mb-3`}
        onFocus={onFocusinInput}
        onBlur={onFocusoutInput}
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
        <label
          className={`${classes.nameLabel} form-label`}
          id={props.pID}
        >
          {props.inputName}
        </label>
        {inputBoxRendered}
      </div>
    </div>
  );
}

export default InputBox;
