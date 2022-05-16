import React, { useState, useEffect } from "react";
import FeedTweet from "../FeedTweet";
import classes from "./FeedTweetReplyModal.module.css";
import IsReplying from "./IsReplying";
import Reply from "./Reply";
import TweetReplyBody from "./TweetReplyBody";
import x from "../../../../Assets/icons/close.png";
import instance from "../../../axios";
import ErrorModal from "../../BanModal/ErrorModal";

function FeedTweetReplyModal(props) {
  const [tweetContent, setTweetContent] = useState("");
  const [banned, setBanned] = useState(false);
  const handleOpenModal = (val) => {
    setBanned(val);
  };

  function replyTweet(e) {
    const isBanned = JSON.parse(localStorage.getItem("UserInfo")).isBanned;
    if (isBanned === true) {
      setBanned(true);
      return;
    }
    e.preventDefault();
    instance
      .post("/status/tweet/post", {
        content: tweetContent,
        replied_to_tweet: props.tweetId,
      })
      .then((res) => {
        console.log(res);
        props.onGoBack();
      })
      .catch((err) => {
        console.log(err);
        // setError(1);
      });
  }

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
          <Reply
            image={props.userName}
            isReply={true}
            setTweetContent={(val) => {
              setTweetContent(val);
            }}
          ></Reply>
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

          <button className={classes.button} onClick={replyTweet}>
            reply
          </button>
        </div>
      </div>
      {banned && (
        <ErrorModal
          message="You are Banned."
          open={banned}
          setOpenModalValue={handleOpenModal}
        />
      )}
    </React.Fragment>
  );
}

export default FeedTweetReplyModal;
