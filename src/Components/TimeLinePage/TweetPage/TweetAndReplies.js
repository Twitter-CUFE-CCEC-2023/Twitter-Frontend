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
import { SkipPreviousRounded } from '@material-ui/icons';

function TweetAndReplies() {
  const api = axios.create({
    baseURL: "https://6262975a005a66e1e3aa1ebb.mockapi.io/",
  })

  let {userId , id} = useParams();
  const [isLoading, setLoading] = React.useState(true);
  const [topTweet, setTopTweet] = React.useState([]);
  const [replies, setReplies] = React.useState([]);
  const [topUser, setTopUser] = React.useState({ name: "", userName: "", profilePic: "" , bio: ""});
  React.useEffect(() => getTweet(), []);

  const getTweet = async () => {
    const userRes = await api.get(`users/${userId}/`);
    let user = userRes.data;
    //console.log(user);
    setTopUser(prevUser => ({
      ...prevUser,
      name: user.name,
      userName: user.userName,
      profilePic: user.profilePic,
      bio: user.bio,
      }));
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

    const repliesRes = await api.get(`users/${userId}/tweet/${id}/replies`);
    
    let inReplies = repliesRes.data;
    let repl = inReplies.map(async(reply) => {
      const replyUserRes = await api.get(`users/${reply.userId % 11}`);
      const replyUser = replyUserRes.data;
      return {
        userId : replyUser.id,
        name : replyUser.name,
        profilePic : replyUser.profilePic,
        userName : replyUser.userName,
        bio : replyUser.bio,
        text : reply.content,
        tweetId : reply.id,
        date : reply.dateCreated,
        likes : reply.likes,
        retweets : reply.retweets,
        replies : reply.replies
      }
    })
    const resolved = await Promise.all(repl);

    
    setTopTweet(tweet);
    setReplies(resolved);
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
      {replies.map((tweet, index) => {
  return <FeedTweet {...tweet} isReply = {true}  topUser = {topUser} showAction={true} key = {index}/>;
})}
    </div>
  )
}

export default TweetAndReplies