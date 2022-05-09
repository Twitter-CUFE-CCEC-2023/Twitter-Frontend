import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SignUpComplete.module.css";
import axios from "../../../axios";

const NextButtonUp = (props) => {
  const history = useHistory();
    
  const handleClick = () => {
    const Code = JSON.parse(localStorage.getItem("ValidationCode"));
    const Name = JSON.parse(localStorage.getItem("Email"));
    const PW = JSON.parse(localStorage.getItem("Password"));
    const email = JSON.parse(localStorage.getItem("Email"));
    const phone = JSON.parse(localStorage.getItem("PhoneNumber"));
    
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
