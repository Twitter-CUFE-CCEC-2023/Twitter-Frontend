import React from "react";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  return (
    <div className={classes.container} style={props.style}>
      <div className={classes.spinner}>
        <div className={classes.loadingSpinner}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
