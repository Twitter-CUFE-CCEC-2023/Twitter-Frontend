import React, { useRef, useState } from "react";
import "./FeedTweetBox.css";
import defaultMaleProfile from "../../../../Assets/defaultMaleProfile.jpg";
import FeedBoxButton from "../FeedBoxButton";
import { NavLink } from "react-router-dom";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Button } from "@material-ui/core";
import classes from "./FeedTweetBox.module.css";
// import Modal from "../../../UI/Modal";
import ImageUploading from "react-images-uploading";
import PhotosContainer from "./PhotosContainer";
export default function FeedTweetBox(props) {
  const [leftLetters, setLeftLetters] = useState(280);
  {
    /*const [photosNumberErrorModal, setPhotosNumberErrorModal] = useState(false);*/
  }
  function textAreaChangeHandler(event) {
    setLeftLetters(280 - event.target.value.length);
  }
  const browseMediaButton = useRef();
  function browseMedia() {
    browseMediaButton.current.click();
  }
  {
    /*
  function photosSubmitHandler(event) {
    const files = event.target.files;
    if (files.length > 4) {
      setPhotosNumberErrorModal(true);
    }
    // let reader = new FileReader();
    // let urls = [];
    // let i = 0;
    // for (; i < files.length; i++) {
    //   // urls.push(reader.readAsDataURL(files[i]));
    //   reader.readAsDataURL(files[i]);
    // }
    // reader.onload = (e) => {
    //   console.warn(e.target.result);
    // };
  }*/
  }

  // function hideModal() {
  //   setPhotosNumberErrorModal(false);
  // }

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

  React.useEffect(() => {setLoggedInUser(JSON.parse(localStorage.getItem("UserInfo")));}, []);

  let loggedUser = JSON.parse(localStorage.getItem("UserInfo"));
  //console.log(loggedUser);
  return (
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
        <div className="feedTweetBox">
          <div className="boxInput">
            <div className="profileImgOpacity">
              <NavLink to= {`userprofile/${loggedUser.username}`}>
                <img
                  className="profileImg"
                  src={loggedUser.profile_image_url}
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
                  maxLength="280"
                ></textarea>

                {images.length > 0 && (
                  <div className={classes.container}>
                    {imageList.map((image, index) => (
                      <PhotosContainer
                        photos={image}
                        onUpdate={() => onImageUpdate(index)}
                        onRemove={() => onImageRemove(index)}
                      ></PhotosContainer>
                    ))}
                  </div>
                )}
                <span className={classes.tweetBoxTextSpan}>
                  {leftLetters}/280
                </span>
              </div>
            </form>
          </div>
          <div
            className={`buttons  ${
              !props.isReply || show ? classes.show : classes.hidden
            }`}
          >
            {/* // write your building UI */}
            <div className="upload__image-wrapper">
              <FeedBoxButton
                Icon={ImageOutlinedIcon}
                text="Media"
                // style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                // {...dragProps}
              />

              {/* <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button> 
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              //toCopy
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
              */}
            </div>
            <FeedBoxButton Icon={GifOutlinedIcon} text="GIF" />
            <FeedBoxButton Icon={PollOutlinedIcon} text="Poll" />
            <FeedBoxButton Icon={SentimentSatisfiedOutlinedIcon} text="Emoji" />
            <FeedBoxButton Icon={DateRangeOutlinedIcon} text="Schedule" />
            <FeedBoxButton Icon={LocationOnOutlinedIcon} text="Location" />
            <Button className={`tweetButton`}>
              {props.isReply ? "Reply" : "Tweet"}
            </Button>
          </div>
        </div>
      )}
    </ImageUploading>
  );
}
