import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./ForgetPasswordForm.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextStep from "./Buttons/EmailDoneNext";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import InputField from "../InputField";
import Alert from "../SignUp/Alert/Alert";

const ForgetPasswordForm = (props) => {
    const [alert, setAlert] = useState(true);
    /**
     * Used to see if the button is clicked or not. If clicked, val is true. 
     * @function handleClick
     * @name handleClick
     * @param {boolean} val
     * @module ForgetPasswordForm
     */
    const handleClick = (val) => {
        props.handleButtonClick(val);
        setAlert(val);
    };
    //Use above for day month and year to gain their value
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

            <div className={classes.Header}>Find your Twitter account</div>

            <p></p>

            <div className={classes.Minor3}>
                <InputField
                    label="Enter your email, phone number, or username"
                    disable={false}
                    itemName="RecoveryEmail"
                    maxLength={50}
                />
            </div>

            <div className={classes.NextButton}>
                <NextStep
                    handleButtonClick={handleClick}
                />
            </div>
            <div className={classes.alert}>
            {!alert && (
                
                    <Alert message="Sorry, we could not find your account." />
                
                    
            )}
            </div>
        </div>
    );
};

export default ForgetPasswordForm;
