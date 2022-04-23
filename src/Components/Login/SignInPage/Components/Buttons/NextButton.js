import React from "react";
import classes from "./NextButton.module.css";

const NextButton = (props) => {
  const handleClick = () => {
    const username = JSON.parse(localStorage.getItem("userEmailOrName"));
    if (username === "") {
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
