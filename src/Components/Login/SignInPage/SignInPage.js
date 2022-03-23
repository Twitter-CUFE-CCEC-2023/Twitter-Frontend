import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SignInPage.module.css";
import ClearIcon from "@material-ui/icons/Clear";

import GoogleSignUp from "../Buttons/GoogleSignUp";
import AppleSignUp from "../Buttons/AppleSignUp";
import OrLabel from "../Buttons/OrLabel";
import NextButton from "../Buttons/NextButton";
import ForgetPasswordButton from "../Buttons/ForgetPasswordButton";

import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";

const SignInPage = () => {
  return (
    <div className={classes.outerContainer}>
      {/* <span style={{ visibility: "hidden" }}>.</span> */}

      <div className={classes.innerContainer}>
        <img
          className={classes.twitterBluelogo}
          src={twitterBlueLogo}
          alt="TwitterLogo"
        />
        <NavLink to="/" className={classes.closeIcon}>
          <ClearIcon />
        </NavLink>

        <div className={classes.container}>
          <p className={classes.signInToTwitter}>Sign in to Twitter</p>
          <GoogleSignUp style={{ marginBottom: "23px" }} />
          <AppleSignUp />
          <OrLabel
            color="rgb(207, 217, 222, 0.6)"
            style={{ margin: "9px 15px" }}
          />
          <input type="text" placeholder="Phone, email address, or username" />
          <NextButton />
          <ForgetPasswordButton />
        </div>

        <div className={classes.alreadyHaveAcc}>
          Don't have an account?{" "}
          <NavLink to="/" className={classes.signUp}>
            <span>Sign up</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
