import React, { useContext } from "react";
import classes from "./PhoneOptionNext.module.css";
import axios from "../../../axios";

const PhoneOptionNext = (props) => {
  console.log("props", props);

  const handleClick = () => {
    props.handleButtonClick(true);

    //   // let verification = {  };
    //   // axios
    //   //   .put("/auth/verify-credentials", verification, {
    //   //     headers: { "Content-Type": "application/json" },
    //   //   })
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
