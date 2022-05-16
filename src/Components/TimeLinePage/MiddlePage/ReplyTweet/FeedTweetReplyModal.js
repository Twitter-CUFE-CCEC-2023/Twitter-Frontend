import React from "react";
import FeedTweet from "../FeedTweet";
import classes from "./FeedTweetReplyModal.module.css";
import IsReplying from "./IsReplying";
import Reply from "./Reply";
import TweetReplyBody from "./TweetReplyBody";
import x from "../../../../Assets/icons/close.png";
function FeedTweetReplyModal(props) {
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
          <TweetReplyBody {...props}></TweetReplyBody>
          <IsReplying name={props.userName}></IsReplying>
          <Reply image={props.userName} isReply={true}></Reply>
        </div>
        <div className={classes.actions}>
          {/* <div className="upload__image-wrapper">
            <FeedBoxButton
              Icon={ImageOutlinedIcon}
              text="Media"
              // style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              // {...dragProps}
            />
          </div>
          <FeedBoxButton Icon={GifOutlinedIcon} text="GIF" />
          <FeedBoxButton Icon={PollOutlinedIcon} text="Poll" />
          <FeedBoxButton Icon={SentimentSatisfiedOutlinedIcon} text="Emoji" />
          <FeedBoxButton Icon={DateRangeOutlinedIcon} text="Schedule" />
          <FeedBoxButton Icon={LocationOnOutlinedIcon} text="Location" /> */}

          <button className={classes.button}>reply</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FeedTweetReplyModal;
