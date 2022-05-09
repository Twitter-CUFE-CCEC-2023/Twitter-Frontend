import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SignUpComplete.module.css";
import axios from "../../../axios";

const NextButtonUp = (props) => {
  const history = useHistory();
    
  const handleClick = () => {
    const Code = JSON.parse(localStorage.getItem("ValidationCode"));
    const Name = JSON.parse(localStorage.getItem("Name"));
    const PW = JSON.parse(localStorage.getItem("Password"));
    const Email = JSON.parse(localStorage.getItem("Email"));
    const phone = JSON.parse(localStorage.getItem("PhoneNumber"));
    const Username = JSON.parse(localStorage.getItem("Username"));
    
    let userObject = {
      email: Email,
      username: Username,
      password: PW,
      name: Name,
      gender: "",
      birth_date: "",
    } 

    if(phone.length !== 0)
    {
      userObject["phone_number"] = phone;
    }

    axios
      .post("/auth/signup", userObject, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "UserInfo",
            JSON.stringify(response.data.user)
          );
          localStorage.removeItem("ValidationCode");
          localStorage.removeItem("Name");
          localStorage.removeItem("Password");
          localStorage.removeItem("Email");
          localStorage.removeItem("PhoneNumber");
          localStorage.removeItem("Username");
        }
      })
      .catch((err) => {
      });
    
    if (Code === "") {
      props.handleButtonClick(false);
    } else {
      props.handleButtonClick(true);
    }
    
  };

  return (
    <div className={classes.buttonNext}>
      <p className={classes.content} onClick={handleClick}>
        Sign Up
      </p>
    </div>
  );
};

export default NextButtonUp;
