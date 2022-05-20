import React, { useRef, useState } from "react";
// import "./FeedTweetBox.css";
import defaultMaleProfile from "../../../../Assets/DefaultProfilePic.jpg";
import FeedBoxButton from "../FeedBoxButton";
import { NavLink } from "react-router-dom";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
// import { Button } from "@material-ui/core";
import classes from "./FeedTweetBox.module.css";
// import Modal from "../../../UI/Modal";
import ImageUploading from "react-images-uploading";
import PhotosContainer from "./PhotosContainer";
import instance from "../../../axios";

import DefaultProfilePic from "../../../../Assets/DefaultProfilePic.jpg";
import PollBox from "./PollBox/PollBox";
import GifModal from "./GifBox/GifModal";
import ScheduleBox from "./Schedule Box/ScheduleBox";
import ErrorModal from "../../BanModal/ErrorModal";
import { set } from "date-fns";

export default function FeedTweetBox(props) {
  const [leftLetters, setLeftLetters] = useState(280);
  const [tweetContent, setTweetContent] = useState("");
  function textAreaChangeHandler(event) {
    setLeftLetters(280 - event.target.value.length);
    setTweetContent(event.target.value);
  }
  const browseMediaButton = useRef();
  function browseMedia() {
    browseMediaButton.current.click();
  }

  const [show, setShow] = React.useState(false);
  const [loggedInUser, setLoggedInUser] = React.useState(null);

  function focus() {
    setShow(true);
  }
  //image uploding variables&states
  const [images, setImages] = React.useState([]);
  const maxNumber = 4;
  const [imagesState, setImagesState] = useState(0);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    // setImagesState((previous) => {
    //   return previous + 1;
    // });
  };

  React.useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("UserInfo")));
  }, []);

  let loggedUser = JSON.parse(localStorage.getItem("UserInfo"));
  loggedUser.profile_image_url = loggedUser.profile_image_url
    ? loggedUser.profile_image_url
    : DefaultProfilePic;
  //console.log(loggedUser);
  //postTweet configuration

  const [banned, setBanned] = useState(false);
  const handleOpenModal = (val) => {
    setBanned(val);
  };

  function postTweet() {
    if (leftLetters < 0) return;
    // props.changePostingTweet();
    const isBanned = JSON.parse(localStorage.getItem("UserInfo")).isBanned;
    if (isBanned === true) {
      setBanned(true);
      return;
    }

    const formData = new FormData();
    const media = images.map((img) => {
      return img.file;
    });
    for (let i = 0; i < media.length; i++) {
      formData.append("media", media[i]);
    }
    formData.append("content", tweetContent);
    if (props.isReply) {
      formData.append("replied_to_tweet", props.Id);
    }
    if (gifChosen) {
      formData.append("gif", gifChosen);
    }
    instance
      .post("/status/tweet/post", formData)
      .catch((err) => {
        console.log(err);
      })
      .then((response) => {
        // props.onAddTweet(response.data.tweet);
        if (props.onAddTweet) props.onAddTweet();
        console.log(response);
        setTweetContent("");
        setImages([]);
        setLeftLetters(280);
        setPollView(false);
        setGifChosen(undefined);
      });

    // props.changePostingTweet();
  }
  const [pollView, setPollView] = useState(false);
  const togglePollView = () => {
    setPollView((prev) => {
      return !prev;
    });
  };
  const removePollView = () => {
    setPollView(false);
  };

  const [GifView, setGifView] = useState(false);
  const toggleGifView = () => {
    setGifView((prev) => {
      return !prev;
    });
  };
  const removeGifView = () => {
    setGifView(false);
  };
  const [gifChosen, setGifChosen] = useState(undefined);

  const [gifChosenUrl, setGifChosenUrl] = useState(undefined);
  function gifChosenChangeHandler(gif, val, url) {
    setGifChosen(gif);
    setGifView(val);
    setGifChosenUrl(url);
  }

  const [ScheduleView, setScheduleView] = useState(false);
  const toggleScheduleView = () => {
    setScheduleView((prev) => {
      return !prev;
    });
  };
  const removeScheduleView = () => {
    setScheduleView(false);
  };
  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          // onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          // isDragging,
          // dragProps,
        }) => (
          <div className={classes.feedTweetBox}>
            <div
              className={`${classes.boxInput} ${props.isModal ? "ms-0" : ""}`}
            >
              <div className={classes.profileImgOpacity}>
                <NavLink
                  to={`userprofile/${
                    loggedUser ? loggedUser.username : "amrzaki"
                  }`}
                >
                  <img
                    className={classes.profilePic + " " + classes.minip}
                    src={
                      loggedUser
                        ? loggedUser.profile_image_url
                        : defaultMaleProfile
                    }
                    alt="profile"
                  ></img>
                </NavLink>
              </div>
              <form onFocus={focus} className={classes.tweetBoxForm}>
                <div className={classes.tweetBoxFormContainer}>
                  <textarea
                    onChange={textAreaChangeHandler}
                    className={classes.tweetBoxText}
                    placeholder={
                      props.isReply ? "Tweet Your Reply" : "What's happening?"
                    }
                    value={tweetContent}
                    // maxLength="280"
                  ></textarea>

                  {images.length > 0 && (
                    <div className={classes.container}>
                      {imageList.map((image, index) => (
                        <PhotosContainer
                          key={index}
                          photos={image}
                          onUpdate={() => onImageUpdate(index)}
                          onRemove={() => onImageRemove(index)}
                        ></PhotosContainer>
                      ))}
                    </div>
                  )}
                  {gifChosen != undefined && (
                    <PhotosContainer
                      photos={gifChosen}
                      onRemove={() => setGifChosen(undefined)}
                      isGif={true}
                    ></PhotosContainer>
                  )}
                  <span className={classes.tweetBoxTextSpan}>
                    {leftLetters}/280
                  </span>
                  {pollView && <PollBox onRemove={removePollView}></PollBox>}
                  {GifView && (
                    <GifModal
                      onHide={removeGifView}
                      onChangeGif={gifChosenChangeHandler}
                    ></GifModal>
                  )}
                  {ScheduleView && (
                    <ScheduleBox onHide={removeScheduleView}></ScheduleBox>
                  )}
                </div>
              </form>
            </div>
            <div
              className={`${classes.buttons}  ${
                !props.isReply || show ? classes.show : classes.hidden
              }`}
            >
              {/* // write your building UI */}
              <div className={classes["upload__image-wrapper"]}>
                <FeedBoxButton
                  disabled={gifChosen != undefined || pollView}
                  Icon={ImageOutlinedIcon}
                  text="Media"
                  // style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  // {...dragProps}
                />
              </div>
              <FeedBoxButton
                disabled={
                  images.length > 0 || gifChosen != undefined || pollView
                }
                Icon={GifOutlinedIcon}
                onClick={toggleGifView}
                text="GIF"
              />
              <FeedBoxButton
                disabled={
                  images.length > 0 || gifChosen != undefined || pollView
                }
                Icon={PollOutlinedIcon}
                onClick={togglePollView}
                text="Poll"
              />
              <FeedBoxButton
                disabled={false}
                Icon={SentimentSatisfiedOutlinedIcon}
                text="Emoji"
              />
              <FeedBoxButton
                disabled={pollView}
                Icon={DateRangeOutlinedIcon}
                onClick={toggleScheduleView}
                text="Schedule"
              />
              <FeedBoxButton
                disabled={
                  images.length > 0 || gifChosen != undefined || pollView
                }
                Icon={LocationOnOutlinedIcon}
                text="Location"
              />
              <button
                className={classes["tweetButton"]}
                disabled={
                  (imageList.length === 0 &&
                    tweetContent.trim() === "" &&
                    gifChosen == undefined) ||
                  leftLetters < 0
                }
                onClick={postTweet}
              >
                {props.isReply ? "Reply" : "Tweet"}
              </button>
            </div>
          </div>
        )}
      </ImageUploading>
      {banned && (
        <ErrorModal
          message="You are Banned."
          open={banned}
          setOpenModalValue={handleOpenModal}
        />
      )}
    </>
  );
}
