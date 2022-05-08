import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SignUpComplete.module.css";
import { LoginContext } from "../../../../../login-context";
import axios from "../../../../axios";

const NextButtonUp = (props) => {
  const handleClick = () => {
    const name = JSON.parse(localStorage.getItem("ValidationCode"));
    if (name === "") {
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
