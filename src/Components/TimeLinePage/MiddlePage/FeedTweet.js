import React, { useEffect, useState } from "react";
import classes from "./FeedTweet.module.css";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import LoopOutlinedIcon from "@material-ui/icons/LoopOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import TweetAtrribute from "./TweetAtrribute";
import MiniProfile from "../MiniProfile";
import { NavLink } from "react-router-dom";
import TopTweetAttributes from "./TopTweetAttributes";
// import FeedTweetReplyModal from "./FeedTweetReplyModal";

export default function FeedTweet(props) {
  const [replyModal, setReplyModal] = useState(false);
  function viewReplyModal() {
    setReplyModal(true);
  }

  // function hideReplyModal() {
  //   setReplyModal(false);
  // }

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

    if(diffYears > 0) {
      return `${months[date1.getMonth()]} ${date1.getDate()}, ${date1.getFullYear()}`;
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

  function URLReplacer(str) {
    let match = str.match(
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
    );
    let final = str;
    if (match) {
      match.map((url) => {
        final = final.replace(
          url,
          `<a href="' + url + '" target="_BLANK">` + url + `</a>`
        );
      });
    }
    return final;
  }

  let tweet ={
    content : props.text,
    dateCreated : props.date,
    likes : props.likes,
    retweets : props.retweets,
    replies : props.replies,
    id : props.tweetId,
    userId : props.userId,
  }


  return (
    <NavLink to = {`/${props.userId}/status/${props.tweetId}`} className={classes.fs15 + " " + classes.noStyle}>
    <div id={`Tweet${props.tweetId}`} className={props.isTopTweet ?classes.topTweet : classes.feedTweet}>
      {/* {replyModal && (
        <FeedTweetReplyModal
          onHide={hideReplyModal}
          data={props}
        ></FeedTweetReplyModal>
      )} */}
      <img
        onClick={(e) =>{e.preventDefault()}}
        className={classes.profilePic + " " + classes.minip}
        alt="profile"
        src={props.profilePic}
      ></img>
      <div onClick={(e) =>{e.preventDefault()}} className={classes.hoverProfile + " " + classes.top}>
        <MiniProfile
          profilePic = {props.profilePic}
          name={props.name}
          userName={props.userName}
          profileDesciption={props.bio}
          following={777}
          followers={1863}
        />
      </div>
      <div className={classes.tweet}>
        <div className={classes.user}>
          <h2
          onClick={(e) =>{e.preventDefault()}}
            data-testid="name"
            className={
              classes.underline + " " + classes.minip + " " + classes.fs15 + " " + classes.pointer
            }
          >
            {props.name}
          </h2>
          <div onClick={(e) =>{e.preventDefault()}} className={classes.hoverProfile + " " + classes.bot}>
            <MiniProfile
              profilePic = {props.profilePic}
              name={props.name}
              userName={props.userName}
              profileDesciption={props.bio}
              following={777}
              followers={1863}
            />
          </div>
          &nbsp;
          <p
            onClick={(e) =>{e.preventDefault()}}
            className={classes.gray + " " + classes.minip + " " + classes.fs15 + " " + classes.pointer}
            data-testid="userName"
          >
            @{props.userName}
          </p>
          <div onClick={(e) =>{e.preventDefault()}} className={classes.hoverProfile + " " + classes.bot}>
            <MiniProfile
              profilePic = {props.profilePic}
              name={props.name}
              userName={props.userName}
              profileDesciption={props.bio}
              following={777}
              followers={1863}
            />
          </div>
          &nbsp;{!props.isTopTweet && <p className={classes.gray}>.</p>}&nbsp;

          {!props.isTopTweet && <p className={classes.gray + " " + classes.underline + " " + classes.fs15} data-testid="date">
            {getDateDiff(props.date)}
          </p>}

        </div>
        {props.isReply && <div className={classes.flex}>
            <p className={`${classes.gray} ${classes.fs15} ${classes.nom}`}>Replying to </p>
            &nbsp;
            <p className={`${classes.gray}  ${classes.fs15} ${classes.minip} ${classes.replyat} ${classes.nom}`}>@{props.topUser}</p>
            <div className={classes.hoverProfile + " " + classes.repmin}>
            <MiniProfile
              profilePic = {props.profilePic}
              name={props.name}
              userName={props.userName}
              profileDesciption={props.bio}
              following={777}
              followers={1863}
            />
          </div>
          </div>}
        {/* {(!props.isTopTweet) && <NavLink to = {`/${props.userName}/status/${props.tweetId}`} className={classes.fs15 + " " + classes.noStyle}>
              <div data-testid="text"  dangerouslySetInnerHTML={{ __html: URLReplacer(props.text) }}></div>
        </NavLink>}
        {(props.isTopTweet) && 
          <div data-testid="text" className={classes.fs15}  dangerouslySetInnerHTML={{ __html: URLReplacer(props.text) }}></div>} */}
          <div data-testid="text" className={classes.fs15}  dangerouslySetInnerHTML={{ __html: URLReplacer(props.text) }}></div>
        {props.img && (
          <img className={classes.tweetImg} src={props.img} alt=""></img>
        )}

        {props.isTopTweet && <div className= {classes.flex + " " + classes.gray  + " " + classes.m10}>
        <p className={classes.underline + " " + classes.fs15 + " " + classes.pointer }>
          {`${tweetDate.getHours()}:${tweetDate.getMinutes()} . ${months[tweetDate.getMonth()]} ${tweetDate.getDay()}, ${tweetDate.getFullYear()}`}
          </p>
          </div>}

        {!props.isTopTweet && 
        <div id="FeedTweetAttributes" className={classes.attributes}>
          
          <TweetAtrribute
            Icon={ChatBubbleOutlineOutlinedIcon}
            num={props.replies}
            color="b"
            tooltip="Reply"
            onClick={viewReplyModal}
            tweet = {tweet}
          />
          <TweetAtrribute
            Icon={LoopOutlinedIcon}
            num={props.retweets}
            color="g"
            tooltip="Retweet"
            tweet = {tweet}
          />
          <TweetAtrribute
            Icon={FavoriteBorderOutlinedIcon}
            FilledIcon={FavoriteIcon}
            num={props.likes}
            color="r"
            tooltip="Like"
            tweet = {tweet}
          />
          <TweetAtrribute Icon={ShareOutlinedIcon} color="b" tooltip="Share" tweet = {tweet} />
        </div>
      }

      {props.isTopTweet && <TopTweetAttributes likes = {props.likes} retweets = {props.retweets} quoteTweets = {23}/>}
      </div>
      {/* {!props.showAction && <div></div>} */}
    </div>
    </NavLink>
  );
}
