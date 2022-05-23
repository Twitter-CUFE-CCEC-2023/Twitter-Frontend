import React from "react";
import classes from "./NextButtonUp.module.css";

const NextButtonUp = (props) => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const disable = (JSON.parse(localStorage.getItem("Name")) == "" || JSON.parse(localStorage.getItem("Email")) == "" 
    || JSON.parse(localStorage.getItem("Username")) == "" || props.handleGenderSet == "" || props.handleMonthSet == undefined || props.handleDaySet == undefined 
    || props.handleYearSet == undefined || props.handleMonthSet == "" || props.handleDaySet == "" || props.handleYearSet == "" || !JSON.parse(localStorage.getItem("Email")).includes("@") ||
    !JSON.parse(localStorage.getItem("Email")).includes("."));
  const handleClick = () => {
    const name = JSON.parse(localStorage.getItem("Name"));
    const email = JSON.parse(localStorage.getItem("Email"));
    console.log(name);
    console.log(email);
    const user = JSON.parse(localStorage.getItem("Username"));
    console.log(JSON.parse(localStorage.getItem("Username")))
    console.log(props.handleGenderSet);
    console.log(props.handleMonthSet);
    console.log(props.handleDaySet);
    console.log(props.handleYearSet);
    console.log(props.Step)
    if(!re.test(JSON.parse(localStorage.getItem("Email"))))
    {
      props.handleEmailChangeFn(false);
    }
    else if (
      name != "" &&
      email.includes("@") &&
      email.includes(".") &&
      (props.handleGenderSet == "Male" || props.handleGenderSet == "Female") &&
      props.handleDaySet != undefined &&
      props.handleMonthSet != undefined &&
      props.handleYearSet != undefined
    ) {
      props.handleButtonClick(true);
    } 
    else {
      props.handleButtonClick(false);
    }
  };

  return (
    <button disabled={disable} className={disable ? `${classes.disabled}` : `${classes.buttonNext}`}>
      <p className={classes.content} onClick={handleClick}>
        Next
      </p>
    </button>
  );
};

export default NextButtonUp;
