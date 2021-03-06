import React, { useState, useEffect } from "react";

export const LoginContext = React.createContext({
  token: "",
  isLoggedIn: false,
  // isAdmin: false,
  login: () => {},
  logout: () => {},
});

let logoutTimer;

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  // const storedAdmin = localStorage.getItem("admin");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 0) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    // localStorage.removeItem("admin");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    // admin: storedAdmin,
  };
};

export const LoginContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  // let initialAdmin;
  if (tokenData) {
    initialToken = tokenData.token;
    // initialAdmin = tokenData.admin;
  }

  // const [token, setToken] = useState(localStorage.getItem("token"));
  // const [admin, setAdmin] = useState(localStorage.getItem("admin"));

  const [token, setToken] = useState(initialToken);
  // const [admin, setAdmin] = useState(initialAdmin);
  const loginState = !!token;

  const logoutHandler = () => {
    setToken(null);
    // setAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    // localStorage.removeItem("admin");
    localStorage.removeItem("UserInfo");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (admin, token, expirationTime) => {
    console.log("Login is called");
    setToken(token);
    // setAdmin(admin);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    // localStorage.setItem("admin", admin);
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: loginState,
    // isAdmin: admin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
