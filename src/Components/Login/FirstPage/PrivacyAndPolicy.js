import React from "react";
import classes from "./PrivacyAndPolicy.module.css";

const PrivacyAndPolicy = () => {
  return (
    <p className={classes.privacyPolicy}>
      By signing up, you agree to the{" "}
      <a href="https://twitter.com/en/tos">Terms of Service</a> and{" "}
      <a href="https://twitter.com/en/privacy">Privacy Policy</a>, including{" "}
      <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
        Cookie Use
      </a>
    </p>
  );
};

export default PrivacyAndPolicy;
