import React from "react";
import classes from "./AppleSignUp.module.css";
import AppleIcon from "@material-ui/icons/Apple";

const AppleSignUp = (props) => {
  return (
    <div className={classes.appleSignUp}>
      <p className={classes.logo}><AppleIcon /></p> {props.content}
    </div>
  );
};

export default AppleSignUp;
