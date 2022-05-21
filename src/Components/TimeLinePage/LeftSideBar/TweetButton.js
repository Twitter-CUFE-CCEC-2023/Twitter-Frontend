import React, { useState } from "react";
import classes from "./TweetButton.module.css";
import RateReviewIcon from "@material-ui/icons/RateReview";
import TweetModal from "./TweetModal";
import ErrorModal from "../BanModal/ErrorModal";

export default function TweetButton(props) {
  const [tweetModal, SetTweetModal] = useState(false);
  const [banned, setBanned] = useState(false);

  function showTweetModal() {
    const isBanned = JSON.parse(localStorage.getItem("UserInfo")).isBanned;
    if (isBanned === true) {
      setBanned(true);
    } else {
      SetTweetModal(true);
    }
  }

  const handleOpenModal = (val) => {
    setBanned(val)
  };

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
      {tweetModal && !banned && (
        <TweetModal
          onHide={hideTweetModal}
          addTweet={(tweet) => {
            hideTweetModal();
            props.addTweet(tweet);
          }}
          changePostingTweet={props.changePostingTweet}
        ></TweetModal>
      )}
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
