import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./PhoneVerify.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import SignUp from "./Buttons/PasswordNext";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import InputField from "../InputField";
import Alert from "./Alert/Alert";
import axios from "../../axios";

const Verify = (props) => {
  useEffect(() => {
    const Name = JSON.parse(localStorage.getItem("Name"));
    const Email = JSON.parse(localStorage.getItem("Email"));
    const phone = JSON.parse(localStorage.getItem("PhoneNumber"));
    const Username = JSON.parse(localStorage.getItem("Username"));

    let userObject = {
      email: Email,
      username: Username,
      name: Name,
      gender: props.gender,
      birth_date: props.birth,
    };

    console.log(userObject);

    if (phone.length !== 0) {
      userObject["phone_number"] = phone;
    }

    axios
      .post("/auth/signup", userObject, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("UserInfo", JSON.stringify(response.data.user));
        }
      })
      .catch((err) => { });
  }, []);

  const [alert, setAlert] = useState(true);

  const handleSendEmail = () => {

  }

  const handleClick = (val) => {
    props.handleButtonClick(val);
    setAlert(val);
  };
  //Use above for day month and year to gain their value
  useEffect(() => {
    setTimeout(() => {
      setAlert(true);
    }, 5000);
  }, [alert]);
  return (
    <div>
      <img
        className={classes.twitterBluelogo}
        src={twitterBlueLogo}
        alt="TwitterLogo"
      />
      <NavLink to="/" className={classes.closeIcon}>
        <ClearIcon />
      </NavLink>

      <div className={classes.container}>
        <div className={classes.Minor}>
          <p>We sent you a code</p>
        </div>
        <div className={classes.Minor3}>
          Enter it below to verify your email.
        </div>
        <InputField
          label="Verification Code"
          disable={false}
          itemName="VerificationCode"
          maxLength={50}
        />
        <div className={classes.Minor4} onClick={handleSendEmail}>
          Didn't receive email?
        </div>
        <div className={classes.NextButton}>
          <SignUp handleButtonClick={handleClick} />
        </div>
      </div>
      {!alert && (
        <div className={classes.alert}>
          <Alert message="Invalid. Please enter the verification code you received." />
        </div>
      )}
    </div>
  );
};

export default Verify;
