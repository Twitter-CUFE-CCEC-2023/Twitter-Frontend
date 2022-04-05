import React from "react";
import classes from "./WhatsHappeningItem.module.css";

function WhatsHappeningItem(props) {
  if (props.isTrending) {
    var stTweets;
    if (props.tweets >= 1000) {
      stTweets = props.tweets.toString().slice(0, -3) + "k";
    } else if (props.tweets >= 1000000) {
      console.log(toString(props.tweets));
      stTweets = props.tweets.toString().slice(0, -6) + "m";
    }
    return (
      <div className={classes.whatsHappeningItem}>
        <p className={classes.fs13 + " " + classes.gray}>
          {props.genre} . Trending
        </p>
        <p className={classes.fs15 + " " + classes.bold}>{props.topic}</p>
        <p className={classes.fs13 + " " + classes.gray}>{stTweets} Tweets</p>
      </div>
    );
  } else if (props.isLive) {
    return (
      <div className={classes.whatsHappeningItem + " " + classes.flex}>
        <div className={classes.text}>
          <p className={classes.fs13 + " " + classes.gray}>
            {props.genre} . LIVE
          </p>
          <p className={classes.fs15 + " " + classes.bold}>{props.topic}</p>
          <p className={classes.fs13 + " " + classes.gray}>
            Trending with <span className={classes.link}>#{props.tag}</span>
          </p>
        </div>
        <img className={classes.img} src={props.img} alt="poster"></img>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default WhatsHappeningItem;
