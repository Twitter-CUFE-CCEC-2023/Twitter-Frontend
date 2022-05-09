import React from "react";
import classes from "./WrongPasswordAlert.module.css";

const WrongPasswordAlert = () => {
  return (
    <div className={classes.container}>
      <div>Wrong password!</div>
    </div>
  );
};

export default WrongPasswordAlert;
