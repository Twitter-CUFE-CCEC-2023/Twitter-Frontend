import React, { useState, useEffect } from "react";

export const LoginContext = React.createContext({
  token: "",
  isLoggedIn: false,
  isAdmin: false,
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
  const storedAdmin = localStorage.getItem("admin");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    admin: storedAdmin,
  };
};

export const LoginContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  let initalAdmin;
  if (tokenData) {
    initialToken = tokenData.token;
    initalAdmin = tokenData.admin;
  }

  const [token, setToken] = useState(initialToken);
  const [admin, setAdmin] = useState(initalAdmin);
  const loginState = !!token;
  const adminState = admin;

  const logoutHandler = () => {
    setToken(null);
    setAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (admin, token, expirationTime) => {
    // console.log("Login is called");
    setToken(token);
    setAdmin(admin);
    localStorage.setItem("token", token);
    localStorage.setItem("admin", admin);
    localStorage.setItem("expirationTime", expirationTime);
    // const remainingTime = calculateRemainingTime(expirationTime);
    // logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  // useEffect(() => {
  //   if (tokenData) {
  //     // console.log(tokenData.duration);
  //     logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  //   }
  // }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: loginState,
    isAdmin: adminState,
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
