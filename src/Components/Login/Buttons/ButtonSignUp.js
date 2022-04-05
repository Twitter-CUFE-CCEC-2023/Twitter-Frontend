import React from "react";
import classes from "./ButtonSignUp.module.css";
import { NavLink } from "react-router-dom";

const ButtonSignUp = (props) => {
  return (
    <div className={classes.container}>

      <NavLink to="/Mail" className={classes.navLink}>
        <div className={classes.buttonSignUp}>

          <p className={classes.content}>Sign up with a phone number or email</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ButtonSignUp;
