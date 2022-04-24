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

export default function Feed() {
  const [users, setUsers] = React.useState([]);
  const [tweets, setTweets] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  const observer = useRef();

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
    const res = await instance.get(`/home/${pageNumber}/5`);
    let newTweets = res.data.tweets;
    newTweets.forEach((APItweet) => {
      let tweet = {
        //userId : APItweet.user.id,
        name: APItweet.user.name, //user.name,
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
  };

  let history = useHistory();

  // if(isLoading) {
  //   return (
  //   <div className={classes.feed}>
  //     <h2 className={classes.feedHeader}>Home</h2>
  //     <FeedTweetBox />
  //     <div className="App">Loading...</div>
  //   </div>);

  // }

  return (
    <div className={classes.feed}>
      <h2 className={classes.feedHeader}>Home</h2>
      <FeedTweetBox />
      {tweets.map((tweet, index) => {
        if (index === tweets.length - 1) {
          return (
            <div ref={lastTweetElementRef} key={index}>
              <FeedTweet history={history} {...tweet} showAction={true} />
            </div>
          );
        } else {
          return (
            <FeedTweet
              history={history}
              {...tweet}
              key={index}
              showAction={true}
            />
          );
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
