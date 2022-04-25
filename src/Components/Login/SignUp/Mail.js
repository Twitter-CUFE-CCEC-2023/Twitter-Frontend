import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Mail.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButtonUp from "./Buttons/NextButtonUp"
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import SignUpBackground from "./MailBack";
import Day from "./DayTest"
import InputField from "../InputField";

const Mail = () => {
    
    return (
        <SignUpBackground>
            <img
                className={classes.twitterBluelogo}
                src={twitterBlueLogo}
                alt="TwitterLogo"
            />
            <NavLink to="/" className={classes.closeIcon}>
                <ClearIcon />
            </NavLink>
            <div className={classes.Header}>Create your account</div>
            <div className={classes.upperContainer}> 
            <div className={classes.container}>
                    <InputField
                    label="Name"
                    disable={false}
                    itemName="UserName"
                    maxLength={50}
                    />
                <p>
                    
                </p>
                    <InputField
                    label="Email address"
                    disable={false}
                    itemName="UserName"
                    maxLength={50}
                />
                
                <NavLink to="/Phone">
                    <div className={classes.Use}>
                        Use phone number instead
                    </div>
                </NavLink>
                <div className={classes.DateOfBirth} style={{ fontWeight: "bold" }}>
                Date of birth{" "}
                </div>
                <div className={classes.Minor3}>
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </div>
                <Day />
                <NextButtonUp/>
                </div>
            </div>
        </SignUpBackground>
    );
};

export default Mail;
