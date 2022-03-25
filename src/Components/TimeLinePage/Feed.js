import React from "react";
import "./Feed.css";
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
    <div className="feed">
      <h2 className="feedHeader">Home</h2>
      <FeedTweetBox />
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
