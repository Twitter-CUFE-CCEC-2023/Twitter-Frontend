import React, { useRef, useCallback } from "react";
import classes from "./Feed.module.css";
import FeedTweetBox from "./UpperTweetBox/FeedTweetBox";
import FeedTweet from "./FeedTweet";
import defaultMaleProfile from "../../../Assets/defaultMaleProfile.jpg";
import axios from "axios";
import ReactLoading from "react-loading";
import instance from "../../axios";
import { ContactlessOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { data } from "jquery";

export default function Feed(props) {
  const [users, setUsers] = React.useState([]);
  const [tweets, setTweets] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const observer = useRef();
  let isMock = localStorage.getItem("isMock") === "true";


  const lastTweetElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  React.useEffect(() => getTweets(), [pageNumber]);
  const getTweets = async () => {
    setLoading(true);
    let response;
    let newTweets;
    if (!isMock) {
      if(!props.testUrl)
        response = await instance.get(`/home/${pageNumber}/5`);
      else
        response = await axios.get(props.testUrl);
        newTweets = response.data.tweets;
    } else {
      await fetch(`http://localhost:3000/home?_page=${pageNumber}&_limit=5`)
      .then(res => res.json())
      .then(data => {
        newTweets = data;
        })
    }
    newTweets.forEach((APItweet) => {
      let tweet = {
        name: APItweet.user.name,
        profilePic: APItweet.user.profile_image_url,
        userName: APItweet.user.username,
        isVerified: APItweet.user.isVerified,
        bio: APItweet.user.bio,
        followers: APItweet.user.followers_count,
        following: APItweet.user.following_count,
        text: APItweet.content,
        tweetId: APItweet.id,
        date: APItweet.created_at,
        replies: APItweet.replies,
        likes: APItweet.likes_count,
        retweets: APItweet.retweets_count,
        quotes: APItweet.quotes_count,
        isLiked: APItweet.is_liked,
        isRetweeted: APItweet.is_retweeted,
        isReply: APItweet.is_reply,
      };
      //console.log(tweet);
      setTweets((prevTweets) => {
        return [...prevTweets, tweet];
      });
    });
    setHasMore(newTweets.length === 5);
    setLoading(false);
  };
  function addTweet(tweet) {
    setTweets((prevTweets) => {
      let tweet_to_add = {
        name: tweet.user.name,
        profilePic: tweet.user.profile_image_url,
        userName: tweet.user.username,
        isVerified: tweet.user.isVerified,
        bio: tweet.user.bio,
        followers: tweet.user.followers_count,
        following: tweet.user.following_count,
        text: tweet.content,
        tweetId: tweet.id,
        date: tweet.created_at,
        replies: tweet.replies,
        likes: tweet.likes_count,
        retweets: tweet.retweets_count,
        quotes: tweet.quotes_count,
        isLiked: tweet.is_liked,
        isRetweeted: tweet.is_retweeted,
        isReply: tweet.is_reply,
      };
      return [tweet_to_add, ...prevTweets];
    });
  }
  const [postingTweet, setPostingTweet] = useState(0);
  function changePostingTweet() {
    setPostingTweet((prev) => {
      return !prev;
    });
  }

  return (
    <div className={classes.feed}>
      <h2 className={classes.feedHeader}>Home</h2>
      <FeedTweetBox
        onAddTweet={addTweet}
        changePostingTweet={changePostingTweet}
      />
      {postingTweet ? <p>tweeting...</p> : <React.Fragment></React.Fragment>}
      {tweets.map((tweet, index) => {
        if (index === tweets.length - 1) {
          let tid = `tweet-${index}`;
          return (
            <div data-testid = {`tweet-${index}`} ref={lastTweetElementRef} key={index}>
              <FeedTweet  {...tweet} showAction={true} />
            </div>
          );
        } else {
          return <FeedTweet data-testid = {`tweet-${index}`} {...tweet} key={index} showAction={true} />;
        }
      })}
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
