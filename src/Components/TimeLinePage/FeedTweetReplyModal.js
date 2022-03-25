import React from "react";
import classes from "./FeedTweetReplyModal.module.css";
function FeedTweetReplyModal(props) {
  return (
    <React.Fragment>
      <div className={classes.background} onClick={props.onHide}></div>
      <div className={classes.body}>
        <div className={classes.header}>
          <div className={classes["header-x"]}>x</div>
        </div>
        <div className={classes.message}></div>
        <div className={classes.actions}></div>
      </div>
    </React.Fragment>
  );
}

export default FeedTweetReplyModal;
