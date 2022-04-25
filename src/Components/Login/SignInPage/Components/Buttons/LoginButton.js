import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginButton.module.css";
import { LoginContext } from "../../../../../login-context";
import axios from "../../../../axios";

const LoginButton = (props) => {
  const loginCtx = useContext(LoginContext);
  const history = useHistory();
  const disable = props.data.length === 0;

  const handleClick = () => {
    props.handleLoading(true);
    const username = JSON.parse(localStorage.getItem("userEmailOrName"));
    const password = JSON.parse(localStorage.getItem("userPassword"));

    let authentication = { email_or_username: username, password: password };
    axios
      .post("/auth/login", authentication, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        console.log(response.status);
        if (response.statusText === "OK") {
          localStorage.setItem("UserInfo", JSON.stringify(response.data.user));
          if (response.data.user.role === "User") {
            loginCtx.login(false, response.data.access_token, 360000);
            history.push("/home");
          } else if (response.data.user.role === "Admin") {
            loginCtx.login(true, response.data.access_token, 360000);
            history.push("/admin");
          }
        } else {
          props.handleLoginClick(false);
        }
        props.handleLoading(false);
      })
      .catch((err) => {
        props.handleLoading(false);
        if (err.response.status === 401) {
          props.handleLoginClick(false);
        }
      });
  };

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
