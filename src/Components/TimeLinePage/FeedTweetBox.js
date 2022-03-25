import React, { useState } from "react";
import "./FeedTweetBox.css";
import defaultMaleProfile from "../../Assets/defaultMaleProfile.jpg";
import FeedBoxButton from "./FeedBoxButton";
import { NavLink } from "react-router-dom";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Button } from "@material-ui/core";
import classes from "./FeedTweetBox.module.css";
export default function FeedTweetBox(props) {
  const [leftLetters, setLeftLetters] = useState(280);
  function textAreaChangeHandler(event) {
    setLeftLetters(280 - event.target.value.length);
  }
  return (
    <div className="feedTweetBox">
      <div className="boxInput">
        <div className="profileImgOpacity">
          <NavLink to="profile">
            <img className="profileImg" src={defaultMaleProfile}></img>
          </NavLink>
        </div>
        <form className={classes.tweetBoxForm}>
          <div className={classes.tweetBoxFormContainer}>
            <textarea
              onChange={textAreaChangeHandler}
              className={classes.tweetBoxText}
              placeholder="What's happening?"
              maxLength="280"
            ></textarea>
            <span className={classes.tweetBoxTextSpan}>{leftLetters}/280</span>
          </div>
        </form>
      </div>
      <div className="buttons">
        <FeedBoxButton Icon={ImageOutlinedIcon} text="Media" />
        <FeedBoxButton Icon={GifOutlinedIcon} text="GIF" />
        <FeedBoxButton Icon={PollOutlinedIcon} text="Poll" />
        <FeedBoxButton Icon={SentimentSatisfiedOutlinedIcon} text="Emoji" />
        <FeedBoxButton Icon={DateRangeOutlinedIcon} text="Schedule" />
        <FeedBoxButton Icon={LocationOnOutlinedIcon} text="Location" />
        <Button className="tweetButton">Tweet</Button>
      </div>
    </div>
  );
}
