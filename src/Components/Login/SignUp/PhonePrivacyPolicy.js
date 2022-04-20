import React from "react";
import classes from "./PrivacyAndPolicy.module.css";

const PhonePrivacyPolicy = () => {
    return (
        <p className={classes.privacyPolicy}>
            Let Twitter use your phone number to personalize our services, including ads (if permitted by your Ads preferences). If you don't enable this, Twitter may still use your phone number
            for purposes including account security and spam, fraud, and abuse prevention.{" "}
            <a href="https://twitter.com/en/privacy">See our Privacy Policy for more information</a>
        </p>
    );
};

export default PhonePrivacyPolicy;