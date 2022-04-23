import React from "react";
import classes from "./TweetAtrribute.module.css";
import feedBoxButtonClasses from "./FeedBoxButton.module.css";
import axios from "axios";

function TweetAtrribute(props) {
  const [clicked, setClicked] = React.useState("");
  const [num, setNum] = React.useState(props.num);
  const [hlLike, setHlLike] = React.useState(false);

  const api = axios.create({
    baseURL: "https://6262975a005a66e1e3aa1ebb.mockapi.io/",
  })
  //console.log(props.tweet);
  function click() {
    if (props.tooltip === "Like" || props.tooltip === "Retweet") {
      if (props.tooltip === "Like") {
        setHlLike((prevhlLike) => {
          return !prevhlLike;
        });
        if(clicked === classes.clicked){
          props.tweet.likes -= 1;
        }else{
          props.tweet.likes += 1;
        }
        //console.log(props.tweet.likes);
      }
      else{
        if(clicked === classes.clicked){
          props.tweet.retweets -= 1;
        }
        else{
          props.tweet.retweets += 1;
        }
      }
      setNum((prevNum) => {
        return clicked === classes.clicked ? prevNum - 1 : prevNum + 1;
      });
      setClicked((prevClicked) => {
        return prevClicked === classes.clicked ? "" : classes.clicked;
      });
      //console.log(props.tweet);
      const resp = api.put(`users/${props.tweet.userId}/tweet/${props.tweet.id}`, props.tweet);

    } else if (props.tooltip === "Reply") {
      props.onClick();
    }
  }
  
  return (
    <div onClick={(e) =>{e.stopPropagation()}} className={`${classes.tweetAtrribute} ${classes[props.color]} ${clicked}`} >
      <div onClick={click} className={feedBoxButtonClasses.tooltip}>
        <div className={classes.flex}>
          {!hlLike && <props.Icon className={classes.attIcon} />}
          {hlLike && <props.FilledIcon className={classes.attIcon} />}
          <p className={classes.num}>{num}</p>
        </div>
        <span className={feedBoxButtonClasses.tooltiptext}>
          {props.tooltip}
        </span>
      </div>
    </div>
  );
}

export default TweetAtrribute;
