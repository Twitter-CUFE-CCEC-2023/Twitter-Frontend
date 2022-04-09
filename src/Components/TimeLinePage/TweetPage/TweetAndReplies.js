import React from 'react'
import FeedTweet from '../MiddlePage/FeedTweet'
import classes from './TweetAndReplies.module.css'
import defaultMaleProfile from '../../../Assets/defaultMaleProfile.jpg'
import FeedTweetBox from '../MiddlePage/UpperTweetBox/FeedTweetBox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavLink } from 'react-router-dom';

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

const reply ={
  tweetId : 2,
  profilePic: defaultMaleProfile,
  name: "replyUser",
  userName: "reUser",
  text: "Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler ",
  replies: 121,
  retweets: 13,
  likes: 2345,
  date: new Date("April 4, 2022 13:23:00"),
}

const replies = [reply,reply,reply,reply,reply,reply,reply]

const tweets = replies.map((tweet) => {
  return <FeedTweet {...tweet} isReply = {true}  topUser = "andrew9991" showAction={true} />;
});

function TweetAndReplies() {
  return (
    <div className={classes.TweetAndReplies}>
      <div className={classes.tweetHeader}>
        <NavLink className={classes.nlink} to = "/home">
          <ArrowBackIcon className={`${classes.fs20} ${classes.icon}`}/>
        </NavLink>
        <h2 className={`${classes.headerText} ${classes.fs20}`}>Tweet</h2>
      </div>
      <FeedTweet isTopTweet = {true} {...tweet}/>
      <div className= {classes.tbox} > <FeedTweetBox isReply = {true}/> </div>
      {tweets}
    </div>
  )
}

export default TweetAndReplies