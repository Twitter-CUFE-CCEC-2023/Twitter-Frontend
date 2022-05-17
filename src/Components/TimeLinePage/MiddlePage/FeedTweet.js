import React, { useState } from "react";
// import { useEffect, useRef } from "react";
import classes from "./FeedTweet.module.css";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import LoopOutlinedIcon from "@material-ui/icons/LoopOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
//import VerifiedIcon from '@material-ui/icons/Verified';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TweetAtrribute from "./TweetAtrribute";
import MiniProfile from "../MiniProfile";
import { NavLink } from "react-router-dom";
import TopTweetAttributes from "./TopTweetAttributes";
// import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ImageGrid from "./ImageGrid";
import PhotosPage from "../ViewPhotosPage/PhotosPage";
import DefaultProfilePic from "../../../Assets/DefaultProfilePic.jpg";
import FeedTweetMore from "./FeedTweetMore";
// import { LinkSharp } from "@material-ui/icons";
// import { react } from "fontawesome";
import FeedTweetReplyModal from "./ReplyTweet/FeedTweetReplyModal";

export default function FeedTweet(props) {
  const [replyModal, setReplyModal] = useState(false);
  function viewReplyModal() {
    setReplyModal(true);
  }

  const [isDeleted, setIsDeleted] = useState(false);

  const [isFollowing, setIsFollowing] = useState(
    props.followingSet
      ? props.followingSet.has(props.userName)
      : props.isFollowing
  );

  React.useEffect(() => {
    if (props.followingSet) {
      if (props.followingSet.has(props.userName)) {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    }
  }, [props.followingSet]);

  // function hideReplyModal() {
  //   setReplyModal(false);
  // }
  function hideReplyModal() {
    setReplyModal(false);
  }

  // {
  //   console.log(props.img);
  // }
  const tweetDate = new Date(props.date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function getDateDiff(date) {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffSeconds = Math.floor(diffTime / 1000);
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

    if (diffYears > 0) {
      return `${
        months[date1.getMonth()]
      } ${date1.getDate()}, ${date1.getFullYear()}`;
    }
    if (diffDays > 0) {
      return `${months[date1.getMonth()]} ${date1.getDate()}`;
    }
    if (diffHours > 0) {
      return `${diffHours}h`;
    }
    if (diffMinutes > 0) {
      return `${diffMinutes}m`;
    }
    if (diffSeconds > 0) {
      return `${diffSeconds}s`;
    }
  }

  const imageExtenionsSet = new Set(["jpg", "jpeg", "png","webp"]);
  const videoExtenionsSet = new Set(["mp4", "avi", "mkv"]);

  function getMediaType() {
    if (props.media) {
      if (props.media.length > 0) {
        if (imageExtenionsSet.has(props.media[0].split(".")[3])) {
          return "image";
        } else if (videoExtenionsSet.has(props.media[0].split(".")[3])) {
          return "video";
        } else {
          return "gif";
        }
      }
    }
  }

  // let observer = React.createRef();
  const [tweetText, setTweetText] = useState(props.text);

  let profilePic = props.profilePic ? props.profilePic : DefaultProfilePic;

  React.useEffect(() => setTweetText(linkify(props.text)), []);

  function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 =
      /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    if (inputText) {
      replacedText = inputText.replace(
        replacePattern1,
        `<div name = "link" > <a href="$1" target="_blank">$1</a> </div>`
      );
    }

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    if (replacedText) {
      replacedText = replacedText.replace(
        replacePattern2,
        `<div name = "link" >$1<a href="http://$2" target="_blank">$2</a></div>`
      );
    }

    //Change email addresses to mailto:: links.
    if (replacedText) {
      replacePattern3 =
        /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
      replacedText = replacedText.replace(
        replacePattern3,
        `<div name = "link" ><a href="mailto:$1">$1</a></div>`
      );
    }

    //console.log(replacedText);
    return replacedText;
  }
  React.useEffect(() => {
    // console.log("changed");
    let links = document.getElementsByName("link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  }, [tweetText]);

  let tweet = {
    content: props.text,
    dateCreated: props.date,
    likes: props.likes,
    retweets: props.retweets,
    replies: props.replies,
    id: props.tweetId,
    userId: props.userId,
  };

  const [activePhotos, setActivePhotos] = useState(false);

  let history = useHistory();
  function handleClick(e) {
    if (!props.isTopTweet) {
      localStorage.setItem("currentPage", window.location.pathname);
      history.push(`/${props.userName}/status/${props.tweetId}`);
      window.location.reload();
    }
  }

  if (isDeleted) {
    return null;
  }

  return (
    <div onClick={handleClick} className={classes.FeedTweet}>
      {/* {!props.isShowPhotos && activePhotos && <PhotosPage className={classes.absolute}/>} */}
      <div
        id={`Tweet${props.tweetId}`}
        className={props.isTopTweet ? classes.topTweet : classes.feedTweet}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {replyModal && (
            <FeedTweetReplyModal
              onHide={hideReplyModal}
              {...props}
            ></FeedTweetReplyModal>
          )}
        </div>
        {/* <NavLink
          to={`/userProfile/${props.userName}`}
          className={classes.fs15  + " " + classes.noStyle}
        > */}
        <img
          onClick={(e) => {
            e.stopPropagation();
            history.push(`/userProfile/${props.userName}`);
            window.location.reload();
          }}
          className={classes.profilePic + " " + classes.minip}
          alt="profile"
          src={profilePic}
        ></img>
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className={classes.hoverProfile + " " + classes.top}
        >
          <MiniProfile
            profilePic={profilePic}
            name={props.name}
            userName={props.userName}
            profileDesciption={props.bio}
            following={props.following}
            followers={props.followers}
            isFollowing={isFollowing}
            setIsFollowing={setIsFollowing}
            setFollowingSet={props.setFollowingSet}
          />
        </div>
        {/* </NavLink> */}

        <div className={classes.tweet}>
          <div className={classes.user}>
            <NavLink
              to={`/userprofile/${props.userName}`}
              className={
                classes.fs15 + " " + classes.minip + " " + classes.noStyle
              }
            >
              <h2
                onClick={(e) => {
                  e.stopPropagation();
                }}
                data-testid="name"
                className={
                  classes.underline +
                  " " +
                  classes.fs15 +
                  " " +
                  classes.pointer +
                  " " +
                  classes.alignTop
                }
              >
                {props.name}{" "}
                {props.isVerified && (
                  <CheckCircleIcon className={classes.verifiedIcon} />
                )}
              </h2>
            </NavLink>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={classes.hoverProfile + " " + classes.bot}
            >
              <MiniProfile
                profilePic={profilePic}
                name={props.name}
                userName={props.userName}
                profileDesciption={props.bio}
                following={props.following}
                followers={props.followers}
                isFollowing={isFollowing}
                setIsFollowing={setIsFollowing}
                setFollowingSet={props.setFollowingSet}
              />
            </div>
            &nbsp;
            <NavLink
              to={`/userprofile/${props.userName}`}
              className={
                classes.fs15 + " " + classes.minip + " " + classes.noStyle
              }
            >
              <p
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={
                  classes.gray +
                  " " +
                  classes.minip +
                  " " +
                  classes.fs15 +
                  " " +
                  classes.pointer +
                  " " +
                  classes.alignTop
                }
                data-testid="userName"
              >
                @{props.userName}
              </p>
            </NavLink>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={classes.hoverProfile + " " + classes.bot}
            >
              <MiniProfile
                profilePic={profilePic}
                name={props.name}
                userName={props.userName}
                profileDesciption={props.bio}
                following={props.following}
                followers={props.followers}
                isFollowing={isFollowing}
                setIsFollowing={setIsFollowing}
                setFollowingSet={props.setFollowingSet}
              />
            </div>
            &nbsp;{!props.isTopTweet && <p className={classes.gray}>.</p>}&nbsp;
            {!props.isTopTweet && (
              <p
                className={
                  classes.gray + " " + classes.underline + " " + classes.fs15
                }
                data-testid="date"
              >
                {getDateDiff(props.date)}
              </p>
            )}
            <div className={classes.moreIcon}>
              <FeedTweetMore
                userName={props.userName}
                tweetId={props.tweetId}
                setIsDeleted={setIsDeleted}
                isFollowing={isFollowing}
                setIsFollowing={setIsFollowing}
                setFollowingSet={props.setFollowingSet}
              />
            </div>
          </div>
          {props.isReply && !props.isTopTweet && (
            <div className={classes.flex}>
              <p className={`${classes.gray} ${classes.fs15} ${classes.nom}`}>
                Replying to{" "}
              </p>
              &nbsp;
              <p
                className={`${classes.gray}  ${classes.fs15} ${classes.minip} ${classes.replyat} ${classes.nom}`}
              >
                @{props.topUser ? props.topUser.userName : ""}
              </p>
              <div
                className={classes.hoverProfile + " " + classes.repmin}
                onClick={(e) => e.stopPropagation()}
              >
                <MiniProfile
                  profilePic={
                    props.topUser
                      ? props.topUser.profilePic
                        ? props.topUser.profilePic
                        : DefaultProfilePic
                      : ""
                  }
                  name={props.topUser ? props.topUser.name : ""}
                  userName={props.topUser ? props.topUser.userName : ""}
                  profileDesciption={props.topUser ? props.topUser.bio : ""}
                  following={props.topUser.following}
                  followers={props.topUser.followers}
                  isFollowing = {props.topUser.isFollowing}
                />
              </div>
            </div>
          )}
          <div
            data-testid="text"
            className={classes.fs15 + " " + classes.txt}
            dangerouslySetInnerHTML={{ __html: tweetText }}
          ></div>
          {props.media &&
            !props.isShowPhotos &&
            props.media.length > 0 &&
            getMediaType() === "image" && (
              <ImageGrid
                media={props.media}
                userName={props.userName}
                tweetId={props.tweetId}
                setPhotosActive={props.setPhotosActive}
                setIncrement={props.setIncrement}
              />
            )}

          {props.media &&
            !props.isShowPhotos &&
            props.media.length > 0 &&
            getMediaType() === "video" && (
              <video>
                <source
                  src={props.media[0]}
                  type={`video/${props.media[0].split(".")[3]}`}
                />
              </video>
            )}

          {props.isTopTweet && (
            <div
              className={classes.flex + " " + classes.gray + " " + classes.m10}
            >
              <p
                className={
                  classes.underline + " " + classes.fs15 + " " + classes.pointer
                }
              >
                {`${tweetDate.getHours()}:${tweetDate.getMinutes()} . ${
                  months[tweetDate.getMonth()]
                } ${tweetDate.getDay()}, ${tweetDate.getFullYear()}`}
              </p>
            </div>
          )}

          {!props.isTopTweet && (
            <div id="FeedTweetAttributes" className={classes.attributes}>
              <TweetAtrribute
                Icon={ChatBubbleOutlineOutlinedIcon}
                num={props.repliesCount ? props.repliesCount : 0}
                color="b"
                tooltip="Reply"
                onClick={viewReplyModal}
                tweet={tweet}
              />
              <TweetAtrribute
                Icon={LoopOutlinedIcon}
                num={props.retweets}
                color="g"
                tooltip="Retweet"
                isRetweeted={props.isRetweeted}
                tweet={tweet}
              />
              <TweetAtrribute
                Icon={FavoriteBorderOutlinedIcon}
                FilledIcon={FavoriteIcon}
                num={props.likes}
                color="r"
                tooltip="Like"
                isLiked={props.isLiked}
                tweet={tweet}
              />
              <TweetAtrribute
                isLiked={props.isLiked}
                isRetweeted={props.isRetweeted}
                Icon={ShareOutlinedIcon}
                color="b"
                tooltip="Share"
                tweet={tweet}
              />
            </div>
          )}

          {props.isTopTweet && (
            <TopTweetAttributes
              isLiked={props.isLiked}
              isRetweeted={props.isRetweeted}
              tweet={tweet}
              likes={props.likes}
              retweets={props.retweets}
              quoteTweets={props.quotes}
              isShowPhotos={props.isShowPhotos}
              {...props}
            />
          )}
        </div>
        {/* {!props.showAction && <div></div>} */}
      </div>
    </div>
  );
}
