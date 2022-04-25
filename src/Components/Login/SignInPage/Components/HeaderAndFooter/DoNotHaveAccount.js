import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DoNotHaveAccount.module.css";

const DoNotHaveAccount = (props) => {
  return (
    <div className={classes.alreadyHaveAcc} style={props.style}>
      Don't have an account?{" "}
      <NavLink to="/Mail" className={classes.signUp}>
        <span>Sign up</span>
      </NavLink>
    </div>
  );
};

export default DoNotHaveAccount;
