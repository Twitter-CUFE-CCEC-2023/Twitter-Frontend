import React from "react";
import classes from "./EmailDoneNext.module.css";
import axios from "../../../axios";

const EmailDoneNext = (props) => {
    const handleClick = () => {

        const Email = JSON.parse(localStorage.getItem("RecoveryEmail"));
        // let check=false;
        let userObject = {
            email_or_username: Email,
        };
        console.log(userObject);
        axios
            .post("/auth/send-reset-password", userObject, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log(response);
                }
            })
            .catch((err) => { });

        if (
            Email.includes("@") &&
            Email.includes(".")
            ) {
            props.handleButtonClick(true);
        } else {
            props.handleButtonClick(false);
        }
    }

    return (
        <button className={classes.buttonNext} onClick={handleClick}>
            <p className={classes.content} >
                Search
            </p>
        </button>
    );
};

export default EmailDoneNext;