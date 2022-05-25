import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./NewPassword.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextStep from "./Buttons/NewPasswordSet";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import InputField from "../InputField";
import Alert from "../SignUp/Alert/Alert";

const NewPassword = (props) => {
    const [alert, setAlert] = useState(true);
    /**
     * Used to see if the button is clicked or not. If clicked, val is true. 
     * @function handleClick
     * @name handleClick
     * @param {boolean} val
     * @module NewPassword
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

            <div className={classes.Header}>Reset your password</div>

            <p></p>

            <div className={classes.Minor3}>
                <InputField
                    label="Enter your new password"
                    disable={false}
                    itemName="NewPassword"
                    maxLength={50}
                />
                <p></p>
                <InputField
                    label="Enter your new password one more time"
                    disable={false}
                    itemName="NewPasswordCopy"
                    maxLength={50}
                />
            </div>

            <div className={classes.NextButton}>
                <NextStep
                    handleButtonClick={handleClick}
                />
            </div>
            {!alert && (
                <div className={classes.alert}>
                    <Alert message="Invalid credentials. Please enter all the data." />
                </div>
            )}
        </div>
    );
};

export default NewPassword;
