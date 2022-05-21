import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedTweet from "../../../Components/TimeLinePage/MiddlePage/FeedTweet";
import ReactLoading from "react-loading";
import axios from "axios";
import instance from "../../axios";
import { useParams } from "react-router-dom";
import classes from "./ProfileTweets.module.css";
import DefaultProfilePic from "../../../Assets/DefaultProfilePic.jpg";

function ProfileTweetsAndReplies(props) {
  //GETTING TWEETS

  const pathlocation = useLocation();
  let userInPath = pathlocation.pathname.split("/")[2];
  const currentuser = JSON.parse(localStorage.getItem("UserInfo"));
  let currentuserName = currentuser.username;
  const location = useLocation();
  let { userName } = useParams();

  if (currentuser) {
    currentuserName = currentuser.username;
  }

  const [user, setUser] = useState({});

  const [isLoading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const [followingSet, setFollowingSet] = React.useState(new Set());
  let isMock = localStorage.getItem("isMock") === "true";
  let userTweets;
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

  useEffect(() => {
    getTweets();
  }, [pageNumber]);

  const getTweets = async () => {
    setLoading(true);

    let currentUserTweets;
    let currentUser;
    //get user tweets from api
    if (!isMock) {
      if (!props.testUrl) {
        const tweets = await instance
          .get(
            `/status/tweets/list/${userName}/${pageNumber}/3?include_replies=true`
          )
          .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
          });
        currentUser = await instance.get(`/info/${userName}`);
        userTweets = tweets.data.tweets;
        currentUserTweets = currentUser.data.user;
      } else {
        const tweets = await axios.get(props.testUrl);
        userTweets = tweets.data.tweets;
      }
    }

    userTweets.forEach((APItweet) => {
      if (props.testUrl) {
        currentUserTweets = {
          username: "userName",
          name: "userName",
          isVerified: true,
          profileImage:
            "https://pbs.twimg.com/profile_images/1209858989998693888/zHXx-qQl_400x400.jpg",
          bio: "biooo",
          followers: 0,
          following: 0,
        };
      }
      let tweet = {
        name: currentUserTweets.name, //user.name,
        profilePic: currentUserTweets.profile_image_url? currentUserTweets.profile_image_url : DefaultProfilePic,
        userName: currentUserTweets.username,
        isVerified: currentUserTweets.isVerified,
        bio: currentUserTweets.bio,
        isFollowing: currentUserTweets.is_followed,
        followers: currentUserTweets.followers_count,
        following: currentUserTweets.following_count,
        text: APItweet.content,
        tweetId: APItweet.id,
        date: APItweet.created_at,
        replies: APItweet.replies,
        likes: APItweet.likes_count,
        retweets: APItweet.retweets_count,
        repliesCount: APItweet.replies.length,
        quotes: APItweet.quotes_count,
        isLiked: APItweet.is_liked,
        isRetweeted: APItweet.is_retweeted,
        isTweetReply: APItweet.is_reply,
        media: APItweet.media,
        gif : APItweet.gif ? APItweet.gif : "",
      };
      setTweets((prevTweets) => {
        return [...prevTweets, tweet];
      });
    });
    setUser({
      name: currentUserTweets.name, //user.name,
      profilePic: currentUserTweets.profile_image_url? currentUserTweets.profile_image_url : DefaultProfilePic,
      coverimage: currentUserTweets.cover_image_url,
      userName: currentUserTweets.username,
      email: currentUserTweets.email,
      isVerified: currentUserTweets.isVerified,
      bio: currentUserTweets.bio,
      location: currentUserTweets.location,
      birth_date: currentUserTweets.birth_date,
      created_at: currentUserTweets.created_at,
      website: currentUserTweets.website,
      followers_count: currentUserTweets.followers_count,
      following_count: currentUserTweets.following_count,
      tweets_count: currentUserTweets.tweets_count,
      isFollowing: currentUserTweets.is_followed,
    });
    setHasMore(userTweets.length === 3);
    setLoading(false);
  };

  return (
    <div>
      <div>
        {/* FOR TWEETS */}
        {tweets.map((tweet, index) => {
          if (index === tweets.length - 1) {
            return (
              <div ref={lastTweetElementRef} key={index}>
                <FeedTweet
                  {...tweet}
                  setPhotosActive={props.setPhotosActive}
                  setIncrement={props.setIncrement}
                  followingSet={followingSet}
                  setFollowingSet={setFollowingSet}
                  showAction={true}
                />
              </div>
            );
          } else {
            return (
              <div data-testid={`${index}`}>
                {" "}
                <FeedTweet
                  {...tweet}
                  setPhotosActive={props.setPhotosActive}
                  setIncrement={props.setIncrement}
                  followingSet={followingSet}
                  setFollowingSet={setFollowingSet}
                  key={index}
                  showAction={true}
                />{" "}
              </div>
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
        {tweets.length === 0 && !isLoading && (
          <div className={classes.noLikesContainer}>
            <h1>{userName}</h1>
            <h1>hasn’t Tweeted </h1>
            <h1>yet</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileTweetsAndReplies;
