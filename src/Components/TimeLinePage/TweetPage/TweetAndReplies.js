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
import instance from '../../axios';
import ReactLoading from "react-loading";


function TweetAndReplies(props) {

  let {userId , id} = useParams();
  const [isLoading, setLoading] = React.useState(true);
  const [topTweet, setTopTweet] = React.useState([]);
  const [replies, setReplies] = React.useState([]);
  const [topUser, setTopUser] = React.useState({ name: "", userName: "", profilePic: "" , bio: ""});
  React.useEffect(() => getTweet(), []);

  const getTweet = async () => {
    let TweetAndReplies =props.testUrl ? await axios.get(props.testUrl) : await instance.get(`/status/tweet/${id}?include_replies=true`);
    let maintweet = TweetAndReplies.data.tweet;
    let replies = TweetAndReplies.data.tweet.replies;

    let tweet = {
      name : maintweet.user.name,
      profilePic : maintweet.user.profile_image_url,
      userName : maintweet.user.username,
      isVerified : maintweet.user.isVerified,
      bio : maintweet.user.bio,
      followers : maintweet.user.followers_count,
      following : maintweet.user.following_count,
      text : maintweet.content,
      tweetId : maintweet.id,
      date : maintweet.created_at,
      replies : maintweet.replies,
      likes : maintweet.likes_count,
      retweets : maintweet.retweets_count,
      quotes : maintweet.quotes_count,
      isLiked : maintweet.is_liked,
      isRetweeted : maintweet.is_retweeted,
      isReply : maintweet.is_reply
    }

    let repl = replies.map(async(reply) => {
      return{
        name : reply.user.name,
        profilePic : reply.user.profile_image_url,
        userName : reply.user.username,
        isVerified : reply.user.isVerified,
        bio : reply.user.bio,
        followers : reply.user.followers_count,
        following : reply.user.following_count,
        text : reply.content,
        tweetId : reply.id,
        date : reply.created_at,
        replies : reply.replies,
        likes : reply.likes_count,
        retweets : reply.retweets_count,
        quotes : reply.quotes_count,
        isLiked : reply.is_liked,
        isRetweeted : reply.is_retweeted,
        isReply : reply.is_reply
      }
    })

    setTopTweet(tweet);
    setReplies(repl);
    setLoading(false);
  }
    
  //let history = useHistory();

  if(isLoading) {
    return(
      <div className={classes.TweetAndReplies}>
        <div className={classes.tweetHeader}>
        <NavLink className={classes.nlink} to = "/home">
          <ArrowBackIcon className={`${classes.fs20} ${classes.icon}`}/>
        </NavLink>
        <h2 className={`${classes.headerText} ${classes.fs20}`}>Tweet</h2>
        </div>
        {isLoading && <ReactLoading type={"spin"} color={"#1DA1F2"} height={'4%'} width={'4%'} className={`${classes.loadingIcon}`}  />}
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
      <div data-testid="topTweet">
        <FeedTweet isTopTweet = {true} {...topTweet}/>
      </div>
      <div className= {classes.tbox} > <FeedTweetBox isReply = {true}/> </div>
      {isLoading && <ReactLoading type={"spin"} color={"#1DA1F2"} height={'4%'} width={'4%'} className={`${classes.loadingIcon}`}  />}
      {replies.map((tweet, index) => {
  return <FeedTweet {...tweet} isReply = {true}  topUser = {topUser} showAction={true} key = {index}/>;
})}
    </div>
  )
}

export default TweetAndReplies