import React from "react";
import FeedTweet from "../MiddlePage/FeedTweet";
import classes from "./TweetAndReplies.module.css";
// import defaultMaleProfile from '../../../Assets/defaultMaleProfile.jpg'
import FeedTweetBox from "../MiddlePage/UpperTweetBox/FeedTweetBox";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
// import { useHistory } from 'react-router-dom';
// import { SkipPreviousRounded } from '@material-ui/icons';
import instance from "../../axios";
import ReactLoading from "react-loading";

function TweetAndReplies(props) {
  let { userId, id } = useParams();
  if (props.isShowPhotos) id = window.location.pathname.split("/")[3];
  const [isLoading, setLoading] = React.useState(true);
  const [topTweet, setTopTweet] = React.useState([]);
  const [replies, setReplies] = React.useState([]);
  const [topUser, setTopUser] = React.useState(null);

  let isMock = localStorage.getItem("isMock") === "true";

  React.useEffect(() => getTweet(), [props.increment]);

  const getTweet = async () => {
    let maintweet;
    let replies;
    if (!isMock) {
      let TweetAndReplies = props.testUrl
        ? await axios.get(props.testUrl)
        : await instance.get(`/status/tweet/${id}?include_replies=true`);
      maintweet = TweetAndReplies.data.tweet;
      replies = TweetAndReplies.data.tweet.replies;
    } else {
      await fetch(`http://localhost:3000/replies/${id}`)
        .then((res) => res.json())
        .then((data) => {
          maintweet = data;
          replies = data.replies;
        });
    }


    let tweet = {
      name: maintweet.user.name,
      profilePic: maintweet.user.profile_image_url,
      userName: maintweet.user.username,
      isVerified: maintweet.user.isVerified,
      bio: maintweet.user.bio,
      followers: maintweet.user.followers_count,
      following: maintweet.user.following_count,
      isFollowing: maintweet.user.is_followed,
      text: maintweet.content,
      tweetId: maintweet.id,
      date: maintweet.created_at,
      replies: maintweet.replies,
      likes: maintweet.likes_count,
      retweets: maintweet.retweets_count,
      quotes: maintweet.quotes_count,
      isLiked: maintweet.is_liked,
      isRetweeted: maintweet.is_retweeted,
      isReply: maintweet.is_reply,
      media: maintweet.media,
    };
    let tu = {
      name: maintweet.user.name,
      profilePic: maintweet.user.profile_image_url,
      userName: maintweet.user.username,
      isVerified: maintweet.user.isVerified,
      bio: maintweet.user.bio,
      followers: maintweet.user.followers_count,
      following: maintweet.user.following_count,
      isFollowing: maintweet.user.is_followed
    }
    let repl = replies.map((reply) => {
      return {
        name: reply.user.name,
        profilePic: reply.user.profile_image_url,
        userName: reply.user.username,
        isVerified: reply.user.isVerified,
        bio: reply.user.bio,
        followers: reply.user.followers_count,
        following: reply.user.following_count,
        text: reply.content,
        tweetId: reply.id,
        date: reply.created_at,
        replies: reply.replies,
        likes: reply.likes_count,
        retweets: reply.retweets_count,
        quotes: reply.quotes_count,
        isLiked: reply.is_liked,
        isRetweeted: reply.is_retweeted,
        isReply: reply.is_reply,
        media: reply.media,
      };
    });
    setTopTweet(tweet);
    setTopUser(tu);
    setReplies(repl);
    setLoading(false);
  };

  //console.log(replies);

  //let history = useHistory();

  if (isLoading) {
    return (
      <div className={`${classes.TweetAndReplies} ${props.isShowPhotos && classes.widthPhotos}`}>
        {!props.isShowPhotos && <div className={classes.tweetHeader}>
          <NavLink className={classes.nlink} to={localStorage.getItem("currentPage")? localStorage.getItem("currentPage") : "/home"}>
            <ArrowBackIcon className={`${classes.fs20} ${classes.icon}`} />
          </NavLink>
          <h2 className={`${classes.headerText} ${classes.fs20}`}>Tweet</h2>
        </div>}
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

  return (
    <div className={`${classes.TweetAndReplies} ${props.isShowPhotos && classes.widthPhotos}`}>
      {!props.isShowPhotos && <div className={classes.tweetHeader}>
        <NavLink className={classes.nlink} to={localStorage.getItem("currentPage") ? "/notifications" : "/home"}>
          <ArrowBackIcon className={`${classes.fs20} ${classes.icon}`} />
        </NavLink>
        <h2 className={`${classes.headerText} ${classes.fs20}`}>Tweet</h2>
      </div>}
      <div data-testid="topTweet">
        <FeedTweet isShowPhotos={props.isShowPhotos} isTopTweet={true} {...topTweet} setPhotosActive={props.setPhotosActive} setIncrement={props.setIncrement} />
      </div>
      <div className={classes.tbox}>
        {" "}
        <FeedTweetBox isReply={true} />{" "}
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
      {replies.map((tweet, index) => {
        return (
          <FeedTweet
            {...tweet}
            isReply={true}
            topUser={topUser}
            showAction={true}
            key={index}
            setPhotosActive={props.setPhotosActive}
            setIncrement={props.setIncrement}
          />
        );
      })}
    </div>
  );
}

export default TweetAndReplies;
