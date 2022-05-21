import React, { useState } from "react";
import classes from "./UserProfile.module.css";
import LeftSideBar from "../TimeLinePage/LeftSideBar/LeftSideBar";
import ProfileData from "./ProfileData";
import RightSideBar from "../TimeLinePage/RightSideBar/RightSideBar";
import PhotosPage from "../TimeLinePage/ViewPhotosPage/PhotosPage";

function UserProfile() {
  const [photosActive, setPhotosActive] = useState(false);
  const [path, setPath] = useState(window.location.pathname);
  const [increment, setIncrement] = useState(0);
  const [updateTweets, setUpdateTweets] = useState(false);
  const [currentTweet, setCurrentTweet] = useState(undefined);
  function toggleUpdateTweets(prev) {
    setUpdateTweets(!prev);
  }
  return (
    <div>
      {photosActive && (
        <PhotosPage
          setPhotosActive={setPhotosActive}
          setIncrement={setIncrement}
          className={classes.absolute}
          prevPath={path}
          increment={increment}
        />
      )}
      <div className={classes.profilePage}>
        <LeftSideBar></LeftSideBar>
        <ProfileData
          setPhotosActive={setPhotosActive}
          setIncrement={setIncrement}
          updateTweets={updateTweets}
          currentTweet={currentTweet}
        ></ProfileData>
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}

export default UserProfile;
