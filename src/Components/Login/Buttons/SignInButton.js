import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SignInButton.module.css";

const SignInButton = () => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>Already have an account?</p>
      <NavLink to="/home" className={classes.navLink}>
        <div className={classes.buttonSignIn}>
          <p className={classes.content}>Sign in</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SignInButton;
