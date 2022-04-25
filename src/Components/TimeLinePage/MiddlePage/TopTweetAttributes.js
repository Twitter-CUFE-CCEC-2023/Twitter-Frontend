import React from 'react'
import classes from './TopTweetAttributes.module.css'

import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import LoopOutlinedIcon from "@material-ui/icons/LoopOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import instance from '../../axios';

function TopTweetAttributes(props) {


  const [clicked, setClicked] = React.useState("");
  const [likes, setLikes] = React.useState(props.likes);
  const [retweets, setRetweets] = React.useState(props.retweets);
  const [hlLike, setHlLike] = React.useState(false);
  const [hlRet, setHlRet] = React.useState(false);

  React.useEffect(() => {
    if (props.isLiked) {
      setHlLike(true);
    }
    if (props.isRetweeted) {
      setHlRet(true);
    }
    //console.log(hlLike, hlRet);
  }, []);

  function clickLike() {
    if (hlLike) {
      instance.delete("/status/unlike", {
        data :{
          id: props.tweet.id
        }})
      setLikes(likes - 1);
    } else {
      instance.post(`/status/like`, { id: props.tweet.id });
      setLikes(likes + 1);
    }
    setHlLike((prevhlLike) => {
      return !prevhlLike;
    });
    //const resp = api.put(`users/${props.tweet.userId}/tweet/${props.tweet.id}`, props.tweet);
  }

  function clickRet(){
    if (hlRet) {
      instance.delete("/status/unretweet", {
        data :{
          id: props.tweet.id
        }})
      setRetweets(retweets - 1);
    } else {
      instance.post(`/status/retweet`, { id: props.tweet.id });
      setRetweets(retweets + 1);
    }
    setHlRet((prevhlRet) => {
      return !prevhlRet;
    });
    //const resp = api.put(`users/${props.tweet.userId}/tweet/${props.tweet.id}`, props.tweet);
  }

  return (
    <div className={classes.topTweetAttributes}>
        <div className={classes.flex + " " + classes.nums}>
            <p className={classes.fs15 + " " + classes.ul}><span className={classes.bold}>{retweets}</span> <span className={classes.gray}>Retweets</span></p>
            &nbsp;&nbsp;
            <p className={classes.fs15 + " " + classes.ul}><span className={classes.bold}>{props.quoteTweets}</span> <span className={classes.gray}>Quote Tweets</span></p>
            &nbsp;&nbsp;
            <p className={classes.fs15 + " " + classes.ul}><span className={classes.bold}>{likes}</span> <span className={classes.gray}>Likes</span></p>
        </div>
        <div className={classes.flex}>
            <ChatBubbleOutlineOutlinedIcon className={`${classes.centre} ${classes.attIcon} ${classes.b}`}/>
            <div onClick={clickRet} className={` ${classes.centre} `}><LoopOutlinedIcon className={`${classes.attIcon} ${classes.g} ${hlRet && classes.clicked}`}/></div>
            {!hlLike && <div className={classes.centre} onClick={clickLike}> <FavoriteBorderOutlinedIcon className={`${classes.attIcon} ${classes.r}`}/> </div>}
            {hlLike && <div className={classes.centre} onClick={clickLike}> <FavoriteIcon className={`${classes.attIcon} ${classes.r} ${classes.clicked}`}/> </div>}
            <ShareOutlinedIcon className={`${classes.centre} ${classes.attIcon} ${classes.b}`}/>
        </div>
    </div>
  )
}

export default TopTweetAttributes