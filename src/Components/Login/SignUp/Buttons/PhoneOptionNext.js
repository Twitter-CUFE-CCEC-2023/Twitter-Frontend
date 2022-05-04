import React from "react";
import classes from "./PhoneOptionNext.module.css";

const PhoneOptionNext = (props) => {
  const handleClick = () => {
    const Number = JSON.parse(localStorage.getItem("PhoneNumber"));
      if (Number === "") {
      props.handleButtonClick(false);
    } else {
      props.handleButtonClick(true);
    }
    // const Code = JSON.parse(localStorage.getItem("PhoneCode"));
    // if (Code === "") {
    //   props.handleButtonClick(false);
    // } else {
    //   props.handleButtonClick(true);
    // }
    
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
