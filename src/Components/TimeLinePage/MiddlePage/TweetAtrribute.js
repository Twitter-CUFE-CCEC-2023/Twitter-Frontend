import React from "react";
import classes from "./TweetAtrribute.module.css";
import feedBoxButtonClasses from "./FeedBoxButton.module.css";
// import axios from "axios";
import instance from "../../axios";

function TweetAtrribute(props) {
  const [clicked, setClicked] = React.useState("");
  const [num, setNum] = React.useState(props.num);
  const [hlLike, setHlLike] = React.useState(false);

  let isMock = localStorage.getItem("isMock") === "true";

  React.useEffect(() => {
    if (props.tooltip === "Like" && props.isLiked) {
      setHlLike(true);
      setClicked(classes.clicked);
    }
    if (props.tooltip === "Retweet" && props.isRetweeted) {
      setClicked(classes.clicked);
    }
  }, []);

  const white =
    props.textColor && props.textColor === "white" ? classes.white : "";

  //console.log(props.tweet);
  function click() {
    if (props.tooltip === "Like" || props.tooltip === "Retweet") {
      if (props.tooltip === "Like") {
        setHlLike((prevhlLike) => {
          return !prevhlLike;
        });
        if (clicked === classes.clicked) {
          if (!isMock) {
            instance.delete("/status/unlike", {
              data: {
                id: props.tweet.id,
              },
            });
          } else {
            fetch(`http://localhost:3000/home/${props.tweet.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                likes_count: num - 1,
                is_liked: false,
              }),
            });
            fetch(`http://localhost:3000/replies/${props.tweet.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                likes_count: num - 1,
                is_liked: false,
              }),
            });
          }
        } else {
          if (!isMock) instance.post("/status/like", { id: props.tweet.id });
          else {
            fetch(`http://localhost:3000/home/${props.tweet.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                likes_count: num + 1,
                is_liked: true,
              }),
            });
            fetch(`http://localhost:3000/replies/${props.tweet.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                likes_count: num + 1,
                is_liked: true,
              }),
            });
          }
        }
        //console.log(props.tweet.likes);
      } else {
        if (clicked === classes.clicked) {
          // props.tweet.retweets -= 1;
          instance.delete("/status/unretweet", {
            data: {
              id: props.tweet.id,
            },
          });
        } else {
          // props.tweet.retweets += 1;
          instance.post("/status/retweet", { id: props.tweet.id });
        }
      }
      setNum((prevNum) => {
        return clicked === classes.clicked ? prevNum - 1 : prevNum + 1;
      });
      setClicked((prevClicked) => {
        return prevClicked === classes.clicked ? "" : classes.clicked;
      });
      //console.log(props.tweet);
      //const resp = api.put(`users/${props.tweet.userId}/tweet/${props.tweet.id}`, props.tweet);
    } else if (props.tooltip === "Reply") {
      props.onClick();
    }
  }

  return (
    <div
      className={`${classes.tweetAtrribute} ${
        classes[props.color]
      } ${clicked} ${white}`}
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
