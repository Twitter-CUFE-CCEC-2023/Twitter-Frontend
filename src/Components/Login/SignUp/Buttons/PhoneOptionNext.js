import React, { useContext } from "react";
import classes from "./PhoneOptionNext.module.css";
import axios from "../../../axios";
import { propTypes } from "react-bootstrap/esm/Image";

const PhoneOptionNext = (props) => {
  console.log("props",props)
  

   const handleClick = () => {
    
    props.handleButtonClick(true);
     
  //   // let verification = {  };
  //   // axios
  //   //   .put("/auth/verify-credentials", verification, {
  //   //     headers: { "Content-Type": "application/json" },
  //   //   })
   };

  return (
    <div className={classes.buttonNext} onClick={handleClick}>
      <p className={classes.content} >
        Next
      </p>
    </div>
  );
};

export default PhoneOptionNext;
