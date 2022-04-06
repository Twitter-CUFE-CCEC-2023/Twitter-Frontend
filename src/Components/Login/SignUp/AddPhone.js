import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./AddPhone.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import EmailSignUpNext from "../Buttons/EmailSignUpNext"
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import SignUpBackground from "./MailBack";
import Day from "./DayTest"
import PhoneNumber from "./PhoneNumber"
import PhonePrivacyPolicy from "./PhonePrivacyPolicy";
import SkipButton from "../Buttons/SkipButton"
import PhoneVerifyNext from "../Buttons/PhoneVerifyNext"

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

            <div className={classes.container}>
                <div className={classes.Minor}>
                    <p>
                        Add a phone number
                    </p>
                </div>

            </div>
            <div className={classes.container}>
            <PhoneNumber />
            
            <input type="text" className={classes.input} placeholder="Your Phone Number " />
            
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className={classes.Minor3} for="flexCheckDefault">
                        Let people who have your phone number find and connect with you on Twitter
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className={classes.Minor3} for="flexCheckDefault">
                        <PhonePrivacyPolicy />
                    </label>
                </div>
                    <div className={classes.containerHalf}>
                        <SkipButton />
                        <PhoneVerifyNext />
                    </div>
            
            </div>
        </SignUpBackground>
    );
};

export default Mail;