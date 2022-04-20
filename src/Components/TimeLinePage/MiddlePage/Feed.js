import React from "react";
import classes from "./Feed.module.css";
import FeedTweetBox from "./UpperTweetBox/FeedTweetBox";
import FeedTweet from "./FeedTweet";
import defaultMaleProfile from "../../../Assets/defaultMaleProfile.jpg";

export default function Feed() {
  const tweet = {
    tweetId : 1,
    profilePic: defaultMaleProfile,
    name: "Andrew",
    userName: "andrew9991",
    text: "Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler ",
    replies: 121,
    retweets: 13,
    likes: 2345,
    date: new Date("April 4, 2022 13:23:00"),
  };

  const tweet2 = {
    tweetId : 2,
    profilePic: defaultMaleProfile,
    name: "Andrew",
    userName: "andrew9991",
    text: "Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler ",
    replies: 121,
    retweets: 13,
    likes: 2345,
    date: new Date("April 3, 2022 01:00:00"),
  };

  const tweet3 = {
    tweetId : 3,
    profilePic: defaultMaleProfile,
    name: "Andrew",
    userName: "andrew9991",
    text: "Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler ",
    replies: 121,
    retweets: 13,
    likes: 2345,
    date: new Date("April 2, 2022 01:00:00"),
  };

  const tweet4 = {
    tweetId : 4,
    profilePic: defaultMaleProfile,
    name: "Andrew",
    userName: "andrew9991",
    text: "Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler ",
    replies: 121,
    retweets: 13,
    likes: 2345,
    date: new Date("April 2, 2022 01:00:00"),
  };

  const tweet5 = {
    tweetId : 5,
    profilePic: defaultMaleProfile,
    name: "Andrew",
    userName: "andrew9991",
    text: "Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler ",
    replies: 121,
    retweets: 13,
    likes: 2345,
    date: new Date("April 1, 2020 01:00:00"),
  };
  

  const users = [
    tweet,
    tweet2,
    tweet3,
    tweet4,
    tweet5,
  ];

  const tweets = users.map((tweet) => {
    return <FeedTweet {...tweet} showAction={true} />;
  });

  return (
    <div className={classes.feed}>
      <h2 className={classes.feedHeader}>Home</h2>
      <FeedTweetBox />
      {tweets}
    </div>
  );
}
