import React, { useState, useEffect } from "react";
import classes from "./EnterPassword.module.css";

import LogoHeader from "./HeaderAndFooter/LogoHeader";
import AlreadyHaveAccount from "./HeaderAndFooter/AlreadyHaveAccount";
import InputField from "../../InputField";
import LoginButton from "./Buttons/LoginButton";
import Alert from "./AlertMessage/Alert";

const EnterPassword = () => {
  const [dataFrowarded, setDataForwarded] = useState("");
  const [alert, setAlert] = useState(true);

  const forwardPassword = (val) => {
    setDataForwarded(val);
  };

  const handleLoginClick = (val) => {
    setAlert(val);
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(true);
    }, 5000);
  }, [alert]);

  return (
    <div>
      <LogoHeader width="438px" />
      <div className={classes.container}>
        <p className={classes.enterPassword}>Enter your password</p>
        <InputField
          label="Email"
          disable={true}
          default="millaniasameh@gmail.com"
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
        <LoginButton data={dataFrowarded} handleLoginClick={handleLoginClick} />
        <AlreadyHaveAccount style={{ marginTop: "5%" }} />
      </div>
      {!alert && (
        <Alert
          message="Wrong password!"
          style={{ width: "30%", left: "35%" }}
        />
      )}
    </div>
  );
};

export default EnterPassword;
