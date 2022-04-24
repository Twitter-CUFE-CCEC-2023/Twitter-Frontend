import React, { useState, useEffect } from "react";
import classes from "./EnterPassword.module.css";

import LoadingSpinner from "../../../ExtraPages/LoadingSpinner";
import LogoHeader from "./HeaderAndFooter/LogoHeader";
import DoNotHaveAccount from "./HeaderAndFooter/DoNotHaveAccount";
import InputField from "../../InputField";
import LoginButton from "./Buttons/LoginButton";
import Alert from "./AlertMessage/Alert";

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
        <div>
          <LogoHeader width="438px" />
          <div className={classes.container}>
            <p className={classes.enterPassword}>Enter your password</p>
            <InputField
              label={type}
              disable={true}
              default={email}
              itemName="userEmail"
            />
            <div className={classes.lineBreak}></div>
            <InputField
              label="Password"
              disable={false}
              type="password"
              itemName="userPassword"
              passData={forwardPassword}
            />
            <p className={classes.forgetPassword}>Forgot Password?</p>
            <LoginButton
              data={dataFrowarded}
              handleLoginClick={handleLoginClick}
              handleLoading={handleLoading}
            />
            <DoNotHaveAccount style={{ marginTop: "5%" }} />
          </div>
          {!alert && (
            <div className={classes.alert}>
              <Alert
                message="Wrong password!"
                style={{ width: "30%", top: "-3%" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnterPassword;
