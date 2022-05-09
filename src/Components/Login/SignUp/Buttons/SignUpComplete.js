import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SignUpComplete.module.css";
import axios from "../../../axios";

const NextButtonUp = (props) => {
  const handleClick = () => {
    const Code = JSON.parse(localStorage.getItem("ValidationCode"));
    if (Code === "") {
      props.handleButtonClick(false);
    } else {
      props.handleButtonClick(true);
    }
    
  };

  return (
    <div className={classes.buttonNext}>
      <p className={classes.content} onClick={handleClick}>
        Sign Up
      </p>
    </div>
  );
};

export default NextButtonUp;
