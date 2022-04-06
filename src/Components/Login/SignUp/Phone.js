import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Mail.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButton from "../Buttons/NextButton";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import SignUpBackground from "./MailBack";
import Day from "./DayTest"
import PhoneVerifyNext from "../Buttons/PhoneVerifyNext"

const Phone = () => {
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

            <div className={classes.container}>
                <p className={classes.signInToTwitter}>Create your account</p>
                <input type="text" className={classes.input} placeholder="Name" />



                <input type="text" className={classes.input} placeholder="Phone" />
                <NavLink to="/Mail" className={classes.navLink}>
                    <div className={classes.Use}>
                        <p className={classes.content}>Use Email instead</p>
                    </div>
                </NavLink>
                <div className={classes.DateOfBirth} style={{ fontWeight: "bold" }}>
                    Date of birth{" "}
                </div>
                <div className={classes.Minor3}>
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </div>
                <Day />
                <PhoneVerifyNext />
            </div>
        </SignUpBackground>
    );
};

export default Phone;