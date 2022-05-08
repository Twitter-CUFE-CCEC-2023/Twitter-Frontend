import React, { useContext } from "react";
import classes from "./PhoneOptionNext.module.css";
import axios from "../../../../axios";

const PhoneOptionNext = (props) => {
  const handleClick = () => {
    const Number = JSON.parse(localStorage.getItem("PhoneNumber"));
      props.handleButtonClick(true);
    // const Code = JSON.parse(localStorage.getItem("PhoneCode"));
    // if (Code === "") {
    //   props.handleButtonClick(false);
    // } else {
    //   props.handleButtonClick(true);
    // }
    let verification = { email_or_username: username, verification_code: password };
    axios
      .put("/auth/verify-credentials", verification, {
        headers: { "Content-Type": "application/json" },
      })
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
