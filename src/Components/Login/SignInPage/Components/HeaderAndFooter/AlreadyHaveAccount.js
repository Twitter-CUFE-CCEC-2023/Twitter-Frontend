import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./AlreadyHaveAccount.module.css";

const AlreadyHaveAccount = (props) => {
  return (
    <div className={classes.alreadyHaveAcc} style={props.style}>
      Don't have an account?{" "}
      <NavLink to="/Mail" className={classes.signUp}>
        <span>Sign up</span>
      </NavLink>
    </div>
  );
};

export default AlreadyHaveAccount;
