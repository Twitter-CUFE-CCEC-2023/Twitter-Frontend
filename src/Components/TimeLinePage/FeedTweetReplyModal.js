import React from "react";
import FeedTweet from "./FeedTweet";
import classes from "./FeedTweetReplyModal.module.css";
function FeedTweetReplyModal(props) {
  return (
    <React.Fragment>
      <div className={classes.background} onClick={props.onHide}></div>
      <div className={classes.body}>
        <div className={classes.header}>
          <div className={classes["header-x"]} onClick={props.onHide}>
            x
          </div>
        </div>
        <div className={classes.message}>
          <FeedTweet {...props.data} showAction={false}></FeedTweet>
          <div className={classes.replying}>
            replying to @{" "}
            <span style={{ color: "blue" }}>{props.data.name}</span>
          </div>
          <div className={classes.reply}>
            <img
              className="profilePic"
              alt="profile"
              src={props.data.profilePic}
            ></img>

            <input type="text" className={classes.replyText}></input>
          </div>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>reply</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FeedTweetReplyModal;
