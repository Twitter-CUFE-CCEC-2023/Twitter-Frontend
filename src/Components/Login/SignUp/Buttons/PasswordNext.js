import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Passwordnext.module.css";
import { LoginContext } from "../../../../login-context";
import axios from "../../../axios";

const NextButtonUp = (props) => {
    const disable = (JSON.parse(localStorage.getItem("VerificationCode"))=="");
    const history = useHistory();
    const handleClick = () => {
        const Code = JSON.parse(localStorage.getItem("VerificationCode"));
        const Email = JSON.parse(localStorage.getItem("Email"));

        let userObject = {
            email_or_username: Email,
            verificationCode: Code,
        };

        console.log(userObject);

        axios
            .put("/auth/verify-credentials", userObject, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    //console.log(response);
                    // loginCtx.login(false, response.data.access_token, response.data.expirartion_time);
                    localStorage.removeItem("ValidationCode");
                }
            })
            .catch((err) => { });

        if (Code === "") {
            props.handleButtonClick(false);
        } else {
            props.handleButtonClick(true);
        }
    };
    return (
        <div disabled={disable} className={disable ? `${classes.disabled}` : `${classes.buttonNext}`}>
            <p className={classes.content} onClick={handleClick}>
                Next
            </p>
        </div>
    );
};

export default NextButtonUp;
