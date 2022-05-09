import React, { useState } from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import PhotosPage from "../ViewPhotosPage/PhotosPage";
import classes from "./MainTweetPage.module.css";
import TweetAndReplies from "./TweetAndReplies";

function MainTweetPage() {
  const [photosActive, setPhotosActive] = useState(false);
  const [increment, setIncrement] = useState(0);
  const [path, setPath] = useState(window.location.pathname);
  return (
    <div>
      {photosActive && (
        <PhotosPage
          setPhotosActive={setPhotosActive}
          setIncrement = {setIncrement}
          className={classes.absolute}
          prevPath={path}
          increment = {increment}
        />
      )}

      <div className={classes.mainTweetPage}>
        <LeftSideBar />
        <TweetAndReplies setPhotosActive={setPhotosActive} setIncrement = {setIncrement}/>
        <RightSideBar />
      </div>
    </div>
  );
}

export default MainTweetPage;
