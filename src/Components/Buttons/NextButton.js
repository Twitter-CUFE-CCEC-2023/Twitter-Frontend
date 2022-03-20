import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NextButton.module.css";

const NextButton = () => {
  return (
    <div>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className={classes.buttonNext}>
          <p className={classes.content}>Next</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NextButton;
