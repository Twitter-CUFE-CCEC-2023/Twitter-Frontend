import React from "react";
import classes from "./SignInBackground.module.css";

const SignInBackground = (props) => {
  // var win = window.innerWidth;
  // console.log(win);

  // const cardPosition = {
  //   left: win - "600px" / 2,
  // };

  // console.log(cardPosition);

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>{props.children}</div>
    </div>
  );
};

export default SignInBackground;
