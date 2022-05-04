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
    props.handleLoadingfn(true);

    const username = JSON.parse(localStorage.getItem("userEmailOrName"));
    const password = props.data;

    if (localStorage.getItem("isMock") !== "true") {
      // Backend request
      let authentication = { email_or_username: username, password: password };
      axios
        .post("/auth/login", authentication, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response);
          if (response.statusText === "OK") {
            localStorage.setItem(
              "UserInfo",
              JSON.stringify(response.data.user)
            );
            // console.log("role" + response.data.user.role);
            // localStorage.removeItem("userEmailOrName");
            if (response.data.user.role === "User") {
              loginCtx.login(
                false,
                response.data.access_token,
                response.data.token_expiration_date
              );
              history.push("/home");
            } else if (response.data.user.role === "Admin") {
              loginCtx.login(
                true,
                response.data.access_token,
                response.data.token_expiration_date
              );
              history.push("/admin");
            }
          } else {
            props.handleLoginClickfn(false);
          }
          props.handleLoadingfn(false);
        })
        .catch((err) => {
          props.handleLoadingfn(false);
          if (err.response.status === 401) {
            props.handleLoginClickfn(false);
          }
        });
    } else {
      // Mocking API
      fetch("http://localhost:3000/auth")
        .then((response) => response.json())
        .then((data) => {
          if (data.email === username && data.password === password) {
            localStorage.setItem("UserInfo", JSON.stringify(data.user));
            if (data.user.role === "User") {
              loginCtx.login(false, data.access_token, 360000);
              history.push("/home");
            } else if (data.user.role === "Admin") {
              loginCtx.login(true, data.access_token, 360000);
              history.push("/admin");
            }
            // console.log(data);
          } else {
            props.handleLoginClickfn(false);
          }
          props.handleLoadingfn(false);
        })
        .catch(() => {
          props.handleLoadingfn(false);
          props.handleLoginClickfn(false);
        });
    }
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
