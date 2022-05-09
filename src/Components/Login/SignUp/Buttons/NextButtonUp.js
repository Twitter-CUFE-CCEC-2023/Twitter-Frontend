import React from "react";
import classes from "./NextButtonUp.module.css";

const NextButtonUp = (props) => {
  const handleClick = () => {
    
    // const name = JSON.parse(localStorage.getItem("Name"));
    // if (name === "") {
    //   props.handleButtonClick(false);
    // } else {
    //   props.handleButtonClick(true);
    // }
    // const email = JSON.parse(localStorage.getItem("Email"));
    // if (email === "") {
    //   props.handleButtonClick(false);
    // }
    // else if (email.includes("@") && email.includes("."))
    // {
    //   props.handleButtonClick(true);
    // }
    // else {
    //   props.handleButtonClick(false);
    // }
    const name = JSON.parse(localStorage.getItem("Name"));
    const email = JSON.parse(localStorage.getItem("Email"));
    //const gender = JSON.parse(localStorage.getItem("Gender"));
    //console.log(gender);
    console.log(props.handleGenderSet);
    console.log(props.handleMonthSet);
    console.log(props.handleDaySet);
    console.log(props.handleYearSet);
    if (name != "" && email.includes("@") && email.includes(".") && (props.handleGenderSet == "Male" || props.handleGenderSet == "Female")
    && (props.handleDaySet != undefined && props.handleDaySet != true) && (props.handleMonthSet != undefined && props.handleMonthSet != true )
    && (props.handleYearSet != undefined && props.handleYearSet != true))
    {
      props.handleButtonClick(true);
    }
    else
    {
      props.handleButtonClick(false);
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
