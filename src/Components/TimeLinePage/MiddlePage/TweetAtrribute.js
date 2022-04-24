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
  });

  React.useEffect(() => {
    if (props.tooltip === "Like" && props.isLiked) {
      setHlLike(true);
      setClicked(classes.clicked);
    }
    if (props.tooltip === "Retweet" && props.isRetweeted) {
      setClicked(classes.clicked);
    }
  }, []);

  //console.log(props.tweet);
  function click() {
    if (props.tooltip === "Like" || props.tooltip === "Retweet") {
      if (props.tooltip === "Like") {
        setHlLike((prevhlLike) => {
          return !prevhlLike;
        });
        if (clicked === classes.clicked) {
          props.tweet.likes -= 1;
        } else {
          // props.tweet.likes += 1;
          axios({
            url: "http://backendlb-1541065125.us-east-1.elb.amazonaws.com/status/like",
            headers: {
              "Access-Control-Allow-Credentials": true,
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json; charset=utf-8",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRhNGE5NGM2NjczOGYxMzg1NGI0NzQiLCJ1c2VybmFtZSI6ImFtcnpha2kiLCJpYXQiOjE2NTA3OTg3MDR9.rubqGuQ7HdZZNnWxValrJWdHVGbxtXv1fY5N9dXhneI",
            },
            method: "post",
            data: {
              id: props.tweet.id,
            },
          }).then((res) => {
            console.log(res.data);
          });
        }
        //console.log(props.tweet.likes);
      } else {
        if (clicked === classes.clicked) {
          props.tweet.retweets -= 1;
        } else {
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
      const resp = api.put(
        `users/${props.tweet.userId}/tweet/${props.tweet.id}`,
        props.tweet
      );
    } else if (props.tooltip === "Reply") {
      props.onClick();
    }
  }

  return (
    <div
      className={`${classes.tweetAtrribute} ${classes[props.color]} ${clicked}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
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
