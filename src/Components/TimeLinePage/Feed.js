import React from "react";
import classes from "./Feed.module.css";
import FeedTweetBox from "./FeedTweetBox";
import FeedTweet from "./FeedTweet";
import defaultMaleProfile from "../../Assets/defaultMaleProfile.jpg";

export default function Feed() {
  const user = {
    profilePic: defaultMaleProfile,
    name: "Andrew",
    userName: "andrew9991",
    text: "Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler ",
    replies: 121,
    retweets: 13,
    likes: 2345,
  };

  return (
    <div className={classes.feed}>
      <h2 className={classes.feedHeader}>Home</h2>
      <FeedTweetBox />
      <FeedTweet
        {...user}
        img="https://pbs.twimg.com/media/FOteEvHXIBATGwD?format=jpg&name=small"
        showAction={true}
      />
      <FeedTweet {...user} showAction={true} />
      <FeedTweet {...user} showAction={true} />
      <FeedTweet {...user} showAction={true} />
      <FeedTweet {...user} showAction={true} />
      <FeedTweet {...user} showAction={true} />
      <FeedTweet {...user} showAction={true} />
      <FeedTweet {...user} showAction={true} />
      <FeedTweet {...user} showAction={true} />
      <FeedTweet {...user} showAction={true} />
    </div>
  );
}
