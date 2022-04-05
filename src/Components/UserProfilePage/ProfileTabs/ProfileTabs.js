import React, { useState, Fragment } from "react";
import classes from "./ProfileTabs.module.css";

function ProfileTabs(props) {
  const [tweetsSelected, setTweetsSelected] = useState(true);
  const [tweetsAndRepliesSelected, setTweetsAndRepliesSelected] =
    useState(false);
  const [mediaSelected, setMediaSelected] = useState(false);
  const [likesSelected, setlikesSelected] = useState(false);

  const onClickTweets = () => {
    setTweetsSelected(() => {
      return true;
    });
    setTweetsAndRepliesSelected(() => {
      return false;
    });
    setMediaSelected(() => {
      return false;
    });
    setlikesSelected(() => {
      return false;
    });
  };

  const onClickTweetsAndReplies = () => {
    setTweetsSelected(() => {
      return false;
    });
    setTweetsAndRepliesSelected(() => {
      return true;
    });
    setMediaSelected(() => {
      return false;
    });
    setlikesSelected(() => {
      return false;
    });
  };

  const onClickMedia = () => {
    setTweetsSelected(() => {
      return false;
    });
    setTweetsAndRepliesSelected(() => {
      return false;
    });
    setMediaSelected(() => {
      return true;
    });
    setlikesSelected(() => {
      return false;
    });
  };

  const onClickLikes = () => {
    setTweetsSelected(() => {
      return false;
    });
    setTweetsAndRepliesSelected(() => {
      return false;
    });
    setMediaSelected(() => {
      return false;
    });
    setlikesSelected(() => {
      return true;
    });
  };

  return (
    <Fragment>
      <a
        href="#"
        className={`${tweetsSelected ? classes.selectedTab : classes.tab} col pb-0 text-muted btn `}
        onClick={onClickTweets}
      >
        <div className={` align-self-center`}>
          <p className={`mb-2`}> Tweets</p>{" "}
        </div>
        {tweetsSelected ? (
          <div className={`${classes.tabdiv} align-self-center`}></div>
        ) : (
          <div></div>
        )}
      </a>
      <a
        href="#"
        className={`${tweetsAndRepliesSelected ?classes.selectedTab: classes.tab}  col btn text-muted pb-0 `}
        onClick={onClickTweetsAndReplies}
      >
        <div className={` align-self-center`}>
          <p className={`mb-2`}> Tweets & Replies</p>{" "}
        </div>
        {tweetsAndRepliesSelected ? (
          <div
            className={`${classes.tabdivTweetsAndReplies} align-self-center`}
          ></div>
        ) : (
          <div></div>
        )}
      </a>
      <a
        href="#"
        className={`${mediaSelected ?classes.selectedTab: classes.tab} col btn text-muted pb-0`}
        onClick={onClickMedia}
      >
        <div className={`align-self-center`}>
          <p className={`mb-2`}> Media</p>{" "}
        </div>
        {mediaSelected && (
          <div className={`${classes.tabdiv} align-self-center`}></div>
        )}
      </a>
      <a
        href="#"
        className={` ${likesSelected ?classes.selectedTab: classes.tab} col btn text-muted pb-0`}
        onClick={onClickLikes}
      >
        <div className={` align-self-center`}>
          <p className={`mb-2`}> Likes</p>{" "}
        </div>
        {likesSelected && (
          <div className={`${classes.tabdiv} align-self-center`}></div>
        )}
      </a>
    </Fragment>
  );
}

export default ProfileTabs;
