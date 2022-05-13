import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./ForgetPasswordButton.module.css";
import axios from "../../axios";
import { useHistory } from "react-router-dom";

const ForgetPasswordButton = (props) => {
  const history = useHistory();
  const handleClick = () => {
    
    const Email = JSON.parse(localStorage.getItem("userEmailOrName"));

    let userObject = {
      email_or_username: Email,
    };
    console.log(userObject);
    axios
      .post("/auth/send-reset-password", userObject, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response);
          // loginCtx.login(false, response.data.access_token, response.data.expirartion_time);
          history.push("/SignInPage");
        }
      })
      .catch((err) => { });

    if (Email === "") {
      props.handleButtonClick(false);
    } else {
      props.handleButtonClick(true);
    }
    localStorage.removeItem("Email");
  };
  return (
    <div>
        <div className={classes.forgetPassword}>
          <p className={classes.content} onClick={handleClick}>Forgot Password?</p>
        </div>
    </div>
  );
};

export default ForgetPasswordButton;
