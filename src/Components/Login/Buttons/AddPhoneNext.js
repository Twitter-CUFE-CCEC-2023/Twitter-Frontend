import React from "react";
import classes from "./AddPhoneNext.module.css";
import { NavLink } from "react-router-dom";

const ButtonSignUp = (props) => {
    const handleClick = () =>
    {
        props.handleButtonClick(true);
    }
    return (
        // <div className={classes.container}>
        //     <div className={classes.buttonSignUp}>
        //         <p className={classes.content} onClick={props.handleButtonClick}>Next</p>
        //     </div>
        // </div>
        <button className={classes.buttonNext}>
            <p className={classes.content} onClick={handleClick}>
            Next
            </p>
    </button>
    );
};

export default ButtonSignUp;
