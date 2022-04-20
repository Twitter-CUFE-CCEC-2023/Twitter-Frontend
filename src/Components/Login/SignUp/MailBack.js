import React from "react";
import classes from "./MailBack.module.css";

const SignUpBackground = (props) => {

    return (
        <div className={classes.outerContainer}>
            <div className={classes.innerContainer}>{props.children}</div>
        </div>
    );
};

export default SignUpBackground;
