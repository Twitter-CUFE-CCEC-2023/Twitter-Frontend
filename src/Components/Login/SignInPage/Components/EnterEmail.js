import React, { useEffect, useState } from "react";
import classes from "./EnterEmail.module.css";

import GoogleSignUp from "../../Buttons/GoogleSignUp";
import AppleSignUp from "../../Buttons/AppleSignUp";
import OrLabel from "../../Buttons/OrLabel";
import ForgetPasswordButton from "../../Buttons/ForgetPasswordButton";

import LogoHeader from "./HeaderAndFooter/LogoHeader";
import InputFieldSmall from "../../InputFieldSmall";
import Alert from "./AlertMessage/Alert";
import DoNotHaveAccount from "./HeaderAndFooter/DoNotHaveAccount";
import NextButton from "./Buttons/NextButton";

const EnterEmail = (props) => {
  const [alert, setAlert] = useState(true);

  const handleClick = (val) => {
    props.handleButtonClick(val);
    setAlert(val);
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(true);
    }, 5000);
  }, [alert]);

  return (
    <div>
      <LogoHeader />
      {/* <div className={classes.header}>
        <h1>Hello there</h1>
      </div> */}

      <div className={classes.upperContainer}>
        <div className={classes.container}>
          <p className={classes.signInToTwitter}>Sign in to Twitter</p>
          <GoogleSignUp
            content="Sign in with Google"
            style={{ marginBottom: "23px" }}
          />
          <AppleSignUp content="Sign in with Apple" />
          <OrLabel
            color="rgb(207, 217, 222, 0.6)"
            style={{ margin: "10px 0px" }}
          />
          <InputFieldSmall
            label="Phone, email address, or username"
            disable={false}
            itemName="userEmailOrName"
          />
          <NextButton handleButtonClick={handleClick} />
          <ForgetPasswordButton />
          <DoNotHaveAccount />
        </div>
      </div>
      {!alert && <Alert message="Sorry, we could not find your account." />}
    </div>
  );
};

export default EnterEmail;
