import React from "react";
import classes from "./Login.module.css";

import GoogleSignUp from "../Buttons/GoogleSignUp";
import AppleSignUp from "../Buttons/AppleSignUp";
import ButtonSignUp from "../Buttons/ButtonSignUp";
import SignInButton from "../Buttons/SignInButton";
import OrLabel from "../Buttons/OrLabel";

import PosterImage from "./PosterImage";
import Footer from "./Footer";

function Login() {
  return (
    <div>
      <div>
        <div className={classes.loginSection}>
          <img
            className={classes.twitterBluelogo}
            src="https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png"
            alt="TwitterLogo"
          />
          <h1 className={classes.heading}>Happening now</h1>
          <p className={classes.content}>Join Twitter today.</p>

          <GoogleSignUp />
          <AppleSignUp />
          <OrLabel />
          <ButtonSignUp />
          <p className={classes.privacyPolicy}>
            By signing up, you agree to the{" "}
            <a href="https://twitter.com/en/tos">Terms of Service</a> and{" "}
            <a href="https://twitter.com/en/privacy">Privacy Policy</a>,
            including{" "}
            <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
              Cookie Use
            </a>
          </p>
          <SignInButton />
        </div>
        <PosterImage />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
