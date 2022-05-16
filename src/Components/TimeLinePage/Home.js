import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Home.module.css";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Feed from "./MiddlePage/Feed";
import RightSideBar from "./RightSideBar/RightSideBar";
import PhotosPage from "./ViewPhotosPage/PhotosPage";

export default function Home() {
  const [photosActive, setPhotosActive] = useState(false);
  const [path, setPath] = useState(window.location.pathname);
  const [increment, setIncrement] = useState(0);
  const [updateTweets, setUpdateTweets] = useState(false);
  function toggleUpdateTweets(prev) {
    setUpdateTweets(!prev);
  }
  const [currentTweet, setCurrentTweet] = useState(undefined);

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
      <div className={classes.timeLine}>
        <LeftSideBar
          addTweet={(tweet) => {
            toggleUpdateTweets();
            setCurrentTweet(tweet);
          }}
          changePostingTweet={() => {}}
        />
        <Feed
          setPhotosActive={setPhotosActive}
          setIncrement={setIncrement}
          updateTweets={updateTweets}
          currentTweet={currentTweet}
        />
        <RightSideBar />
      </div>
    </div>
  );
}
