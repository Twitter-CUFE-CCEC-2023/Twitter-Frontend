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

    const CodeExists = () =>
    {
        setCode(true);
    }

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

            <div className={classes.Header}>Check your email</div>
            <div className={classes.Minor3}>
                You'll receive a code to verify here so you can reset your account password.
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
                {!code &&<NextButtonUp
                    handleButtonClick={handleClick}
                    Step={step}
                />}
                {code && <DidntReceiveCode
                handleButtonClick={handleClick}
                Step={!step}
                />}
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
