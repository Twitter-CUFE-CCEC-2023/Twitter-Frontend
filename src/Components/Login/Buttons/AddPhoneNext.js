import React from "react";
import classes from "./ButtonSignUp.module.css";
import { NavLink } from "react-router-dom";

const ButtonSignUp = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.buttonSignUp}>
                <p className={classes.content} onClick={props.handleButtonClick}>Next</p>
            </div>
        </div>
    );
};

export default ButtonSignUp;
