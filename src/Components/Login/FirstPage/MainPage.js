import React from "react";
import classes from "./MainPage.module.css";

import Header from "./Header";
import GoogleSignUp from "../Buttons/GoogleSignUp";
import AppleSignUp from "../Buttons/AppleSignUp";
import OrLabel from "../Buttons/OrLabel";
import ButtonSignUp from "../Buttons/ButtonSignUp";
import PrivacyAndPolicy from "./PrivacyAndPolicy";
import SignInButton from "../Buttons/SignInButton";
import PosterImage from "./PosterImage";
import Footer from "./Footer";

function MainPage() {
  return (
    <React.Fragment>
      <div>
        <div className={classes.loginSection}>
          <div>
            <Header />
            <GoogleSignUp content="Sign up with Google" />
            <AppleSignUp content="Sign up with Apple" />
            <OrLabel />
            <ButtonSignUp />
            <PrivacyAndPolicy />
            <SignInButton />
          </div>
        </div>
        <PosterImage />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default MainPage;
