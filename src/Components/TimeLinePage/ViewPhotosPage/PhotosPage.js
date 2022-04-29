import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./PhotosPage.module.css";
import instance from "../../axios";
import ReactLoading from "react-loading";
import TweetAndReplies from "../TweetPage/TweetAndReplies";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import TweetAtrribute from "../MiddlePage/TweetAtrribute";

import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import LoopOutlinedIcon from "@material-ui/icons/LoopOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function PhotosPage() {
  const [replyModal, setReplyModal] = useState(false);
  function viewReplyModal() {
    setReplyModal(true);
  }
  const [photos, setPhotos] = useState(null);
  let isMock = localStorage.getItem("isMock") === "true";
  const [isLoading, setLoading] = React.useState(true);
  let { userName, id, photoNum } = useParams();
  const [currentPhoto, setCurrentPhoto] = useState(parseInt(photoNum));
  const [photosTweet, setPhotosTweet] = useState(null);
  const [sendTweet, setSendTweet] = useState(null);
  React.useEffect(() => {
    getTweet();
  }, []);
  let tweet;
  async function getTweet() {
    setLoading(true);
    if (!isMock) {
      const res = await instance.get(`/status/tweet/${id}`);
      setPhotosTweet(res.data.tweet);
      tweet = {
        content: photosTweet.content,
        dateCreated: photosTweet.created_at,
        likes: photosTweet.likes_count,
        retweets: photosTweet.retweets_count,
        replies: photosTweet.replies_count,
        id: photosTweet.id,
        userId: photosTweet.user.id,
      };
      setPhotos(res.data.tweet.media);
    } else {
      await fetch(`http://localhost:3000/home/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPhotos(data.media);
          setPhotosTweet(data);
          tweet = {
            content: data.content,
            dateCreated: data.created_at,
            likes: data.likes_count,
            retweets: data.retweets_count,
            replies: data.replies_count,
            id: data.id,
            userId: data.user.id,
          };
          setSendTweet(tweet);
        });
    }
    setLoading(false);
  }

  return (
    <div className={`${classes.flex} ${classes.photosPage}`}>
      <div className={`${classes.photo}`}>
        {photos && (
          <div className={classes.flex}>
            {currentPhoto > 1 && (
              <div
                className={`${classes.arrow} ${classes.back}`}
                onClick={() => {
                  setCurrentPhoto((prevNum) => prevNum - 1);
                }}
              >
                <ArrowBackOutlinedIcon />
              </div>
            )}
            <img
              className={classes.image}
              src={photos[currentPhoto - 1]}
              alt=""
            />
            {currentPhoto < photos.length && (
              <div
                className={`${classes.arrow} ${classes.forward}`}
                onClick={() => {
                  setCurrentPhoto((prevNum) => prevNum + 1);
                }}
                onKeyPress={(e) => {
                  if (e.key === "ArrowRight")
                    setCurrentPhoto((prevNum) => prevNum + 1);
                }}
              >
                <ArrowForwardOutlinedIcon />
              </div>
            )}
          </div>
        )}
        {photosTweet && (
          <div id="FeedTweetAttributes" className={classes.attributes}>
            <TweetAtrribute
              Icon={ChatBubbleOutlineOutlinedIcon}
              num={photosTweet.replies_count}
              color="b"
              textColor = "white"
              tooltip="Reply"
              onClick={viewReplyModal}
              tweet={sendTweet}
            />
            <TweetAtrribute
              Icon={LoopOutlinedIcon}
              num={photosTweet.retweets_count}
              color="g"
              textColor = "white"
              tooltip="Retweet"
              isRetweeted={photosTweet.is_retweeted}
              tweet={sendTweet}
            />
            <TweetAtrribute
              Icon={FavoriteBorderOutlinedIcon}
              FilledIcon={FavoriteIcon}
              num={photosTweet.likes_count}
              color="r"
              textColor = "white"
              tooltip="Like"
              isLiked={photosTweet.is_liked}
              tweet={sendTweet}
            />
            <TweetAtrribute
              isLiked={photosTweet.is_liked}
              isRetweeted={photosTweet.is_retweeted}
              Icon={ShareOutlinedIcon}
              color="b"
              textColor = "white"
              tooltip="Share"
              tweet={sendTweet}
            />
          </div>
        )}
      </div>
      <div className={classes.tweetsAndReplies}>
        <TweetAndReplies isShowPhotos={true} />
      </div>
      {isLoading && (
        <ReactLoading
          type={"spin"}
          color={"#1DA1F2"}
          height={"4%"}
          width={"4%"}
          className={`${classes.loadingIcon}`}
        />
      )}
    </div>
  );
}

export default PhotosPage;
