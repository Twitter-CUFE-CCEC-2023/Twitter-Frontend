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
import SignInBackground from "./SignInBackground";

const SignInPage = () => {
  return (
    <SignInBackground>
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
        <GoogleSignUp
          content="Sign in with Google"
          style={{ marginBottom: "23px" }}
        />
        <AppleSignUp content="Sign in with Apple" />
        <OrLabel
          color="rgb(207, 217, 222, 0.6)"
          style={{ margin: "9px 0px" }}
        />
        <input type="text" className={classes.input} />
        <div className={classes.placeholder}>
          Phone, email address, or username
        </div>

        <NextButton />
        <ForgetPasswordButton />
        <div className={classes.alreadyHaveAcc}>
          Don't have an account?{" "}
          <NavLink to="/Mail" className={classes.signUp}>
            <span>Sign up</span>
          </NavLink>
        </div>
      </div>
    </SignInBackground>
  );
};

export default SignInPage;
