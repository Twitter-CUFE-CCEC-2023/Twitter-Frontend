import React, { useState } from "react";
import classes from "./TweetButton.module.css";
import RateReviewIcon from "@material-ui/icons/RateReview";
import TweetModal from "./TweetModal";

export default function TweetButton(props) {
  const [tweetModal, SetTweetModal] = useState(false);
  function showTweetModal() {
    SetTweetModal(true);
  }
  function hideTweetModal() {
    SetTweetModal(false);
  }
  return (
    <React.Fragment>
      <div className={classes.button} onClick={showTweetModal}>
        <div className={classes.icon}>
          <RateReviewIcon />
        </div>
        <p className={classes.text}>Tweet</p>
      </div>
      {tweetModal && (
        <TweetModal
          onHide={hideTweetModal}
          addTweet={(tweet) => {
            hideTweetModal();
            props.addTweet(tweet);
          }}
          changePostingTweet={props.changePostingTweet}
        ></TweetModal>
      )}
    </React.Fragment>
  );
}
