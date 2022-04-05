import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import classess from "./SignInPage.module.css";
import ClearIcon from "@material-ui/icons/Clear";

import GoogleSignUp from "../Buttons/GoogleSignUp";
import AppleSignUp from "../Buttons/AppleSignUp";
import OrLabel from "../Buttons/OrLabel";
import NextButton from "../Buttons/NextButton";
import ForgetPasswordButton from "../Buttons/ForgetPasswordButton";

import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import SignInBackground from "./SignInBackground";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SignInPage = () => {
  const classes = useStyles();

  return (
    <SignInBackground>
      <img
        className={classess.twitterBluelogo}
        src={twitterBlueLogo}
        alt="TwitterLogo"
      />
      <NavLink to="/" className={classess.closeIcon}>
        <ClearIcon />
      </NavLink>

      <div className={classess.container}>
        <p className={classess.signInToTwitter}>Sign in to Twitter</p>
        <GoogleSignUp
          content="Sign in with Google"
          style={{ marginBottom: "23px" }}
        />
        <AppleSignUp content="Sign in with Apple" />
        <OrLabel
          color="rgb(207, 217, 222, 0.6)"
          style={{ margin: "9px 0px" }}
        />
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Phone, email address, or username"
            variant="outlined"
          />
        </form>

        <NextButton />
        <ForgetPasswordButton />
        <div className={classess.alreadyHaveAcc}>
          Don't have an account?{" "}
          <NavLink to="/Mail" className={classess.signUp}>
            <span>Sign up</span>
          </NavLink>
        </div>
      </div>
    </SignInBackground>
  );
};

export default SignInPage;
