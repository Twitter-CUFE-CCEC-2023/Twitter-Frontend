import React, { useContext } from "react";
import classes from "./PhoneOptionNext.module.css";
import axios from "../../../axios";
import { propTypes } from "react-bootstrap/esm/Image";

const PhoneOptionNext = (props) => {
  const handleClick = () => {
    const Number = JSON.parse(localStorage.getItem("PhoneNumber"));
    if(true){
      props.handleButtonClick(true);
    }
    // let verification = {  };
    // axios
    //   .put("/auth/verify-credentials", verification, {
    //     headers: { "Content-Type": "application/json" },
    //   })
  };

  return (
    <div className={classes.buttonNext}>
      <p className={classes.content} onClick={handleClick}>
        Next
      </p>
    </div>
  );
};

export default PhoneOptionNext;
