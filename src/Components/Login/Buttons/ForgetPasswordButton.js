import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ForgetPasswordButton.module.css";

const ForgetPasswordButton = (props) => {
  return (
    <NavLink to="/ForgetPW" style={{ textDecoration: "none" }} >
        <div className={classes.forgetPassword}>
          <p className={classes.content}>Forgot Password?</p>
        </div>
    </NavLink>
  );
};

export default ForgetPasswordButton;
