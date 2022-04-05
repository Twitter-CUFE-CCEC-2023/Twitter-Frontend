import React from "react";
import classes from "./FeedBoxButton.module.css";

function FeedBoxButton(props) {
  return (
    <button className={classes.buttonRemover} onClick={props.onClick}>
      <div className={`${classes.tooltip} ${classes.feedBoxButton}`}>
        <props.Icon />
        <span className={classes.tooltiptext}>{props.text}</span>
      </div>
    </button>
  );
}

export default FeedBoxButton;
