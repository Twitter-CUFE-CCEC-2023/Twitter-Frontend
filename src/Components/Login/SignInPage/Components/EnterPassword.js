import React, { useState, useEffect } from "react";
import classes from "./EnterPassword.module.css";

import LoadingSpinner from "../../../ExtraPages/LoadingSpinner";
import LogoHeader from "./HeaderAndFooter/LogoHeader";
import DoNotHaveAccount from "./HeaderAndFooter/DoNotHaveAccount";
import InputField from "../../InputField";
import PasswordInputField from "../../PasswordInputField";
import LoginButton from "./Buttons/LoginButton";
import WrongPasswordAlert from "./AlertMessage/WrongPasswordAlert";

const EnterPassword = () => {
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

  useEffect(() => {
    setTimeout(() => {
      setAlert(true);
    }, 5000);
  }, [alert]);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div style={{ marginTop: "5px" }}>
          <LogoHeader />
          <div className={classes.upperContainer}>
            <div className={classes.inlineDisplay}>
              <p className={classes.enterPassword}>Enter your password</p>
              <InputField
                label={type}
                disable={true}
                default={email}
                passData={() => {}}
              />
              <div className={classes.lineBreak}></div>
              <PasswordInputField
                label="Password"
                passData={forwardPassword}
                maxLength={20}
              />
              <p className={classes.forgetPassword}>Forgot Password?</p>

              <div className={classes.alert} data-testid="passwordAlert">
                {!alert && <WrongPasswordAlert />}
              </div>
            </div>
          </div>
          <div className={classes.footer}>
            <LoginButton
              data={dataFrowarded}
              handleLoginClickfn={handleLoginClick}
              handleLoadingfn={handleLoading}
            />
            <DoNotHaveAccount
              style={{ marginTop: "5%", fontSize: "62%", marginBottom: "0px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnterPassword;
