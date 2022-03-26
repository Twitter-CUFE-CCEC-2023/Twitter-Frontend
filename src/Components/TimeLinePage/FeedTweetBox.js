import React, { useRef, useState } from "react";
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
import Modal from "../UI/Modal";
export default function FeedTweetBox(props) {
  const [leftLetters, setLeftLetters] = useState(280);
  const [photosNumberErrorModal, setPhotosNumberErrorModal] = useState(false);
  function textAreaChangeHandler(event) {
    setLeftLetters(280 - event.target.value.length);
  }
  const browseMediaButton = useRef();
  function browseMedia() {
    browseMediaButton.current.click();
  }
  function photosSubmitHandler(event) {
    const files = event.target.files;
    if (files.length > 4) {
      setPhotosNumberErrorModal(true);
    }
    let reader = new FileReader();
    let urls = [];
    let i = 0;
    // for (; i < files.length; i++) {
    //   // urls.push(reader.readAsDataURL(files[i]));
    //   reader.readAsDataURL(files[i]);
    // }
    // reader.onload = (e) => {
    //   console.warn(e.target.result);
    // };
  }
  function hideModal(){
    setPhotosNumberErrorModal(false);
  }
  return (
    <div className="feedTweetBox">
      {photosNumberErrorModal && (
        <Modal
          data={{
            header: "more photos than allowed",
            message:
              "you are not allowed to post more than four photos per one post , go back and rechoose your attached photos.",
            button: "okay",
          }}
          onHide={hideModal}
        ></Modal>
      )}
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
        <input
          type="file"
          id="myPhoto"
          name="myphoto"
          hidden={true}
          ref={browseMediaButton}
          accept="image/png, image/gif, image/jpeg"
          multiple={true}
          onChange={photosSubmitHandler}
        ></input>
        <FeedBoxButton
          Icon={ImageOutlinedIcon}
          text="Media"
          onClick={browseMedia}
        />
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
