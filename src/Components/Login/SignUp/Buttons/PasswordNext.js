import React from "react";
import classes from "./NextButtonUp.module.css";

const NextButtonUp = (props) => {
    const handleClick = () => {
        const pass = JSON.parse(localStorage.getItem("Password"));
        if (pass != "") {
            props.handleButtonClick(true);
        }
        else {
            props.handleButtonClick(false);
        }

    };

    return (
        <div className={classes.buttonNext}>
            <p className={classes.content} onClick={handleClick}>
                Next
            </p>
        </div>
    );
};

export default NextButtonUp;
