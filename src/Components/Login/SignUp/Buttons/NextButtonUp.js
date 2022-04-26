import React from "react";
import classes from "./NextButtonUp.module.css";

const NextButton = (props) => {
  const handleClick = () => {
    const name = JSON.parse(localStorage.getItem("UserName"));
    if (name === "") {
      props.handleButtonClick(false);
    } else {
      props.handleButtonClick(true);
    }
    const email = JSON.parse(localStorage.getItem("Name"));
    if (email === "") {
      props.handleButtonClick(false);
    } else {
      props.handleButtonClick(true);
    }
    
  };

  return (
    <div className={classes.buttonNext}>
      <p className={classes.content} onClick={handleClick}>
        Next
      </p>
    </div>
  );
};

export default NextButton;
