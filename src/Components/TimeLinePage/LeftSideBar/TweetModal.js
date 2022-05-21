import React from "react";
import classes from "./TweetModal.module.css";
import x from "../../../Assets/icons/close.png";
import FeedTweetBox from "../MiddlePage/UpperTweetBox/FeedTweetBox";
function TweetModal(props) {
  return (
    <React.Fragment>
      <div className={classes.background} onClick={props.onHide}></div>
      <div className={classes.body}>
        <div className={classes.header}>
          <img
            className={classes["header-x"]}
            src={x}
            onClick={props.onHide}
          ></img>
        </div>
        <div className={classes.message}>
          <FeedTweetBox
            onAddTweet={props.onHide}
            // changePostingTweet={props.changePostingTweet}
          ></FeedTweetBox>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TweetModal;
