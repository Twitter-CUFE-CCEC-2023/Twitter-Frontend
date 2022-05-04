import React from "react";
import classes from "./NextButtonUp.module.css";

const NextButtonUp = (props) => {
  const handleClick = () => {
    const name = JSON.parse(localStorage.getItem("Name"));
    if (name === "") {
      props.handleButtonClick(false);
    } else {
      props.handleButtonClick(true);
    }
    const email = JSON.parse(localStorage.getItem("Email"));
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

export default NextButtonUp;
