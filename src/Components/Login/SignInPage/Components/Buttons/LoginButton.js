import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginButton.module.css";
import axios from "../../../../axios";

const LoginButton = (props) => {
  const history = useHistory();
  const disable = props.data.length === 0;

  const handleClick = () => {
    const username = JSON.parse(localStorage.getItem("userEmailOrName"));
    const password = JSON.parse(localStorage.getItem("userPassword"));

    let authentication = { email_or_username: username, password: password };
    axios
      .post("/auth/login", authentication, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.message === "User logged in successfully") {
          // save user object in a local storage
          localStorage.setItem("UserInfo", JSON.stringify(response.user));
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log(err);
        props.handleLoginClick(false);
      });
  };

  // axios
  //   .post("/portal/auth/login", admin, {
  //     headers: { "Content-Type": "application/json" },
  //   })
  //   .then((response) => {
  //     if (response.statusText === "OK") {
  //       setValidAdmin(true);
  //       props.successfulAdminSubmit(true);
  //     }
  //   })
  //   .catch((err) => console.log(err));

  return (
    <div>
      <button
        disabled={disable}
        className={disable ? `${classes.disabled}` : `${classes.loginButton}`}
        onClick={handleClick}
      >
        Log in
      </button>
    </div>
  );
};

export default LoginButton;
