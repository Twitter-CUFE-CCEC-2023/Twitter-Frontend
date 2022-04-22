import React from 'react'
import FeedTweet from '../MiddlePage/FeedTweet'
import classes from './TweetAndReplies.module.css'
import defaultMaleProfile from '../../../Assets/defaultMaleProfile.jpg'
import FeedTweetBox from '../MiddlePage/UpperTweetBox/FeedTweetBox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
  const api = axios.create({
    baseURL: "https://6262975a005a66e1e3aa1ebb.mockapi.io/",
  })

  let {userId , id} = useParams();
  const [isLoading, setLoading] = React.useState(true);
  const [topTweet, setTopTweet] = React.useState([]);
  React.useEffect(() => getTweet(), []);

  const getTweet = async () => {
    const userRes = await api.get(`users/${userId}/`);
    let user = userRes.data;

    const tweetRes = await api.get(`users/${userId}/tweet/${id}`);
    let userTweet = tweetRes.data;
    let tweet = {
      userId : user.id,
      name : user.name,
      profilePic : user.profilePic,
      userName : user.userName,
      bio : user.bio,
      text : userTweet.content,
      tweetId : userTweet.id,
      date : userTweet.dateCreated,
      likes : userTweet.likes,
      retweets : userTweet.retweets
    }
    setTopTweet(tweet);
    setLoading(false);
  }
    
  let history = useHistory();

  if(isLoading) {
    return(
      <div className={classes.TweetAndReplies}>
        <div className={classes.tweetHeader}>
        <NavLink className={classes.nlink} to = "/home">
          <ArrowBackIcon className={`${classes.fs20} ${classes.icon}`}/>
        </NavLink>
        <h2 className={`${classes.headerText} ${classes.fs20}`}>Tweet</h2>
        </div>
        <div className="App">Loading...</div>
      </div>
    );
  }

  return (
    <div className={classes.TweetAndReplies}>
      <div className={classes.tweetHeader}>
        <NavLink className={classes.nlink} to = "/home">
          <ArrowBackIcon className={`${classes.fs20} ${classes.icon}`}/>
        </NavLink>
        <h2 className={`${classes.headerText} ${classes.fs20}`}>Tweet</h2>
      </div>
      <FeedTweet isTopTweet = {true} {...topTweet}/>
      <div className= {classes.tbox} > <FeedTweetBox isReply = {true}/> </div>
      {tweets}
    </div>
  )
}

export default TweetAndReplies