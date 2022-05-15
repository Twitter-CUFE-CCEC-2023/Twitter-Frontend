import React from "react";
import classes from "./NextButtonUp.module.css";

const NextButtonUp = (props) => {
  const handleClick = () => {
    const name = JSON.parse(localStorage.getItem("Name"));
    const email = JSON.parse(localStorage.getItem("Email"));
    console.log(name);
    console.log(email);
    console.log(JSON.parse(localStorage.getItem("Username")))
    console.log(props.handleGenderSet);
    console.log(props.handleMonthSet);
    console.log(props.handleDaySet);
    console.log(props.handleYearSet);
    console.log(props.Step)
    if (
      name != "" &&
      email.includes("@") &&
      email.includes(".") &&
      (props.handleGenderSet == "Male" || props.handleGenderSet == "Female") &&
      props.handleDaySet != undefined &&
      props.handleMonthSet != undefined &&
      props.handleYearSet != undefined
    ) {
      props.handleButtonClick(true);
    } else {
      props.handleButtonClick(false);
    }
  };

  return (
    <button className={classes.buttonNext}>
      <p className={classes.content} onClick={handleClick}>
        Next
      </p>
    </button>
  );
};

export default NextButtonUp;
