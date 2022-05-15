import React from "react";
import classes from "./NewPasswordSet.module.css";
import axios from "../../../axios";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";

const EmailDoneNext = (props) => {
    const handleClick = () => {

        const Email = JSON.parse(localStorage.getItem("RecoveryEmail"));
        const code = JSON.parse(localStorage.getItem("VerificationCode"));
        const PW = JSON.parse(localStorage.getItem("NewPassword"));
        const PWAgain = JSON.parse(localStorage.getItem("NewPasswordCopy"));
        // let check=false;
        let userObject = {
            email_or_username: Email,
            verification_code: code,
            password: PW,
        };
        console.log(userObject);
        axios
            .put("/auth/reset-password", userObject, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log(response);
                    // check = true;
                }
                // else
                // {
                //     check = false;
                // }
            })
            .catch((err) => { });

        if (
            PW !="" &&
            PW == PWAgain
        ) {
            props.handleButtonClick(true);
        } else {
            props.handleButtonClick(false);
        }
    }

    return (
        <button className={classes.buttonNext} onClick={handleClick}>
            <p className={classes.content} >
                Confirm
            </p>
        </button>
    );
};

export default EmailDoneNext;