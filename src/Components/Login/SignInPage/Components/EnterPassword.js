import React, { useState, useEffect } from "react";
import classes from "./EnterPassword.module.css";

import LoadingSpinner from "../../../ExtraPages/LoadingSpinner";
import LogoHeader from "./HeaderAndFooter/LogoHeader";
import DoNotHaveAccount from "./HeaderAndFooter/DoNotHaveAccount";
import InputField from "../../InputField";
import InputFieldSmall from "../../InputFieldSmall";
import LoginButton from "./Buttons/LoginButton";
import Alert from "./AlertMessage/Alert";

const EnterPassword = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [dataFrowarded, setDataForwarded] = useState("");
  const [alert, setAlert] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const email = JSON.parse(localStorage.getItem("userEmailOrName"));
  let type;
  if (!isNaN(email)) {
    type = "Phone";
  } else if (email.includes("@") && email.includes(".")) {
    type = "Email";
  } else {
    type = "Username";
  }

  const forwardPassword = (val) => {
    setDataForwarded(val);
  };

  const handleLoginClick = (val) => {
    setAlert(val);
  };

  const handleLoading = (val) => {
    setIsLoading(val);
  };

  // useEffect(() => {
  //   if (window.innerWidth < 750) {
  //     setIsLargeScreen(false);
  //   } else {
  //     setIsLargeScreen(true);
  //   }
  //   console.log(window.innerWidth);
  // }, [window.innerWidth]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(true);
    }, 5000);
  }, [alert]);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div>
          <LogoHeader width="438px" />
          <div className={classes.upperContainer}>
            <div className={classes.container}>
              <p className={classes.enterPassword}>Enter your password</p>
              {isLargeScreen && (
                <InputField
                  label={type}
                  disable={true}
                  default={email}
                  itemName="userEmail"
                />
              )}
              {!isLargeScreen && (
                <InputFieldSmall
                  label={type}
                  disable={true}
                  default={email}
                  itemName="userEmail"
                />
              )}
              <div className={classes.lineBreak}></div>
              {isLargeScreen && (
                <InputField
                  label="Password"
                  disable={false}
                  type="password"
                  itemName="userPassword"
                  passData={forwardPassword}
                  maxLength={20}
                />
              )}
              {!isLargeScreen && (
                <InputFieldSmall
                  label="Password"
                  disable={false}
                  type="password"
                  itemName="userPassword"
                  passData={forwardPassword}
                  maxLength={20}
                />
              )}
              <p className={classes.forgetPassword}>Forgot Password?</p>
              <div className={classes.footer}>
                <LoginButton
                  data={dataFrowarded}
                  handleLoginClickfn={handleLoginClick}
                  handleLoadingfn={handleLoading}
                />
                <DoNotHaveAccount style={{ marginTop: "5%" }} />
              </div>
            </div>

            {!alert && (
              <div className={classes.alert} data-testid="passwordAlert">
                <Alert
                  message="Wrong password!"
                  style={{ width: "20%", left: "40%" }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnterPassword;
