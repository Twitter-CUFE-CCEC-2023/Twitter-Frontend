import React from "react";
import classes from "./Alert.module.css";

const Alert = (props) => {
  return (
    <div className={classes.container} style={props.style}>
      <div>{props.message}</div>
    </div>
  );
};

export default Alert;
