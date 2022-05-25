import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./Validation.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButtonUp from "./Buttons/ValidationDoneNext";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import InputField from "../InputField";
import Alert from "../SignUp/Alert/Alert";
import DidntReceiveCode from "./Buttons/DidntReceiveCode";

const Validation = (props) => {

    const [alert, setAlert] = useState(true);
    const [code, setCode] = useState();
    const step = true;
    const NoCode = () => {
                setCode(false);
    }
    /**
     * Used to enable either the next button or didn't receive code button and to resend depending if the user entered a code in its respective field or not
     * @function CodeExists
     * @name CodeExists
     * @module Validation
     */
    const CodeExists = () =>
            {
                setCode(true);
    }
    /**
     * Used to see if the button is clicked or not. If clicked, val is true.
     * @function handleClick
     * @name handleClick
     * @param {boolean} val
            */
    const handleClick = (val) => {
                props.handleButtonClick(val);
            setAlert(val);
    };
    //Use above for day month and year to gain their value
    /**
     * Responsible for viewing an error message in case of invalid verification code
     * @function useEffect
     * @name useEffect
     * 
            */
    useEffect(() => {
                setTimeout(() => {
                    setAlert(true);
                }, 5000);
    }, [alert]);
            return (
            <div>
                <img
                    className={classes.twitterBluelogo}
                    src={twitterBlueLogo}
                    alt="TwitterLogo"
                />

                <NavLink to="/" className={classes.closeIcon}>
                    <ClearIcon />
                </NavLink>

                <div className={classes.Header}>Check your email</div>
                <div className={classes.Minor3}>
                    You'll receive a code to verify here so you can reset your account
                    password.
                </div>

                <div className={classes.Minor3} onInput={CodeExists} onEmptied={NoCode}>
                    <InputField
                        label=""
                        disable={false}
                        itemName="VerificationCode"
                        maxLength={50}
                    />
                </div>

                <p></p>

                <div className={classes.NextButton}>
                    {code && <NextButtonUp handleButtonClick={handleClick} />}
                    {!code && <DidntReceiveCode handleButtonClick={handleClick} />}
                </div>
                {!alert && (
                    <div className={classes.alert}>
                        <Alert message="Invalid credentials. Please enter all the data." />
                    </div>
                )}
            </div>
            );
};

            export default Validation;
