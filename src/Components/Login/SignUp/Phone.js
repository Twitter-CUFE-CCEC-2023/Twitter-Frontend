import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Mail.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButton from "../Buttons/NextButton";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import SignUpBackground from "./MailBack";
import DateOfBirth from "./DateOfBirth"
import PhoneVerifyNext from "../Buttons/PhoneVerifyNext"
import InputField from "../InputField";

const Phone = () => {
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
            <div className={classes.Header}>Create your account</div> 
            <div className={classes.container}>
                <InputField
                    label="Name"
                    disable={false}
                    itemName="UserName"
                    maxLength={50}
                />

                <p></p> 

                <InputField
                    label="Phone number"
                    disable={false}
                    itemName="UserPhone"
                    maxLength={50}
                />
                <NavLink to="/Mail" className={classes.navLink}>
                    <div className={classes.Use}>
                        <p className={classes.content}>Use email instead</p>
                    </div>
                </NavLink>
                <div className={classes.DateOfBirth} style={{ fontWeight: "bold" }}>
                    Date of birth{" "}
                </div>
                <div className={classes.Minor3}>
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </div>
                <DateOfBirth />
                <PhoneVerifyNext />
            </div>
        </div>
    );
};

export default Phone;
