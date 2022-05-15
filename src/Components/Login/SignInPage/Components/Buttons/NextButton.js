import React from "react";
import classes from "./NextButton.module.css";
import axios from "../../../../axios";

const NextButton = (props) => {
  const handleClick = () => {
    props.handleLoadingfn(true);

    const username = JSON.parse(localStorage.getItem("userEmailOrName"));
    // console.log(username);
    if (username === "") {
      props.handleButtonClick(false);
      props.handleLoadingfn(false);
    } else {
      // props.handleButtonClick(true);
      if (localStorage.getItem("isMock") !== "true") {
        // Backend request
        axios
          .post(
            "/check-user",
            { email_or_username: username },
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((response) => {
            // console.log(response);
            if (response.status === 200) {
              if (response.data.is_found === true) {
                props.handleButtonClick(true);
              } else {
                props.handleButtonClick(false);
              }
            } else {
              props.handleButtonClick(false);
            }
            props.handleLoadingfn(false);
          })
          .catch(() => {
            props.handleButtonClick(false);
            props.handleLoadingfn(false);
          });
      } else {
        // Mocking API
        fetch("http://localhost:3000/UsersInDB")
          .then((response) => response.json())
          .then((data) => {
            if (data.response !== "NO") {
              props.handleButtonClick(true);
            } else {
              props.handleButtonClick(false);
            }
            props.handleLoadingfn(false);
          });
      }
    }
  };

  return (
    <div className={classes.buttonNext}>
      <p className={classes.content} onClick={handleClick}>
        Next
      </p>
    </div>
  );
};

export default NextButton;
