import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Fragment,
} from "react";
import { useLocation } from "react-router-dom";
import classes from "./ProfileTabs.module.css";
import axios from "axios";
import instance from "../../axios";
import { useParams } from "react-router-dom";
import ProfileTweets from "./ProfileTweets";
import ProfileLikes from "./ProfileLikes";

function ProfileTabs(props) {
  const [tweetsSelected, setTweetsSelected] = useState(true);
  const [tweetsAndRepliesSelected, setTweetsAndRepliesSelected] =
    useState(false);
  const [mediaSelected, setMediaSelected] = useState(false);
  const [likesSelected, setlikesSelected] = useState(false);
  const [tweetsType, setTweetsType] = useState("Tweets");

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
    setTweetsType(() => {
      return "Tweets";
    });
    props.onChangeTab("Tweets");
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
    props.onChangeTab("TweetsAndReplies");
    setTweetsType(() => {
      return "TweetsAndReplies";
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
    props.onChangeTab("Media");
    setTweetsType(() => {
      return "Media";
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
    props.onChangeTab("Likes");
    setTweetsType(() => {
      return "Likes";
    });
  };

  return (
    <Fragment>
      <div className={`row`}>
        <a
          href="#"
          className={`${
            tweetsSelected ? classes.selectedTab : classes.tab
          } col pb-0 text-muted btn `}
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
          className={`${
            tweetsAndRepliesSelected ? classes.selectedTab : classes.tab
          }  col btn text-muted pb-0 `}
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
          className={`${
            mediaSelected ? classes.selectedTab : classes.tab
          } col btn text-muted pb-0`}
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
          className={` ${
            likesSelected ? classes.selectedTab : classes.tab
          } col btn text-muted pb-0`}
          onClick={onClickLikes}
        >
          <div className={` align-self-center`}>
            <p className={`mb-2`}> Likes</p>{" "}
          </div>
          {likesSelected && (
            <div className={`${classes.tabdiv} align-self-center`}></div>
          )}
        </a>
      </div>

      {tweetsType == "Tweets" && <ProfileTweets />}
      {tweetsType == "Likes" && <ProfileLikes />}
    </Fragment>
  );
}

export default ProfileTabs;
