import React from "react";
import classes from "./EmailDoneNext.module.css";
import axios from "../../../axios";

const EmailDoneNext = (props) => {
    const handleClick = () => {

        const code = JSON.parse(localStorage.getItem("VerificationCode"));
        const Email = JSON.parse(localStorage.getItem("RecoveryEmail"));

        let userObject = {
            email_or_username: Email,
            resetPasswordCode: code,
        };
        console.log(userObject);
        axios
            .put("/auth/reset-password", userObject, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    // console.log("yaay success");
                    // props.handleButtonClick(true);
                }
                else
                {
                    // props.handleButtonClick(false);
                }
            })
            .catch((err) => { });

        if (
            code!="") {
            props.handleButtonClick(true);
            console.log("Correct Info, proceed");
        } else {
            props.handleButtonClick(false);
            console.log("Incorrect Info");
        }
    }

    return (
        <button className={classes.buttonNext} onClick={handleClick}>
            <p className={classes.content} >
                Next
            </p>
        </button>
    );
};

export default EmailDoneNext;