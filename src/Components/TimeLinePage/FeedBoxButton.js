import React from "react";
import classes from "./FeedBoxButton.module.css";

function FeedBoxButton(props) {
  return (
    <div>
      <div className={`${classes.tooltip} ${classes.feedBoxButton}`}>
        <props.Icon />
        <span className={classes.tooltiptext}>{props.text}</span>
      </div>
    </div>
  );
}

export default FeedBoxButton;
