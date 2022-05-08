import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./Password.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButtonUp from "./Buttons/NextButtonUp"
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import SignUpBackground from "./MailBack";
import Day from "./DayTest"
import InputField from "../InputField";


const Mail = (props) => {
    const [alert, setAlert] = useState(true);

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
            <div className={classes.Header}>You'll need a password</div>
            {/* <div className={classes.upperContainer}> 
            <div className={classes.container}> */}

            <div className={classes.Minor3}>
                <InputField
                    label="Password"
                    disable={false}
                    itemName="Password"
                    maxLength={50}
                />
            </div>

            {/* <div className={classes.button}> */}
            <div className={classes.NextButton}>
                <NextButtonUp handleButtonClick={handleClick} />
            </div>
            {/* </div> */}

        </div>
    );
};

export default Mail;
