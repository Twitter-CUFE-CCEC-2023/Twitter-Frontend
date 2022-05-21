import React from "react";
import classes from "./FeedBoxButton.module.css";

function FeedBoxButton(props) {
  return (
    <button
      className={`${classes.buttonRemover} ${
        props.disabled ? classes["disabled"] : ""
      }`}
      onClick={props.disabled ? undefined : props.onClick}
    >
      <div
        className={`${classes.tooltip} ${classes.feedBoxButton}  ${
          props.disabled ? classes["disabled"] : ""
        }`}
      >
        <props.Icon />
        <span className={classes.tooltiptext}>{props.text}</span>
      </div>
    </button>
  );
}

export default FeedBoxButton;
