import React from "react";
import classes from "./TweetAtrribute.module.css";
import feedBoxButtonClasses from "./FeedBoxButton.module.css";

function TweetAtrribute(props) {
  const [clicked, setClicked] = React.useState("");
  const [num, setNum] = React.useState(props.num);
  const [hlLike, setHlLike] = React.useState(false);

  function click() {
    if (props.tooltip === "Like" || props.tooltip === "Retweet") {
      if (props.tooltip === "Like") {
        setHlLike((prevhlLike) => {
          return !prevhlLike;
        });
      }
      setNum((prevNum) => {
        return clicked === classes.clicked ? prevNum - 1 : prevNum + 1;
      });
      setClicked((prevClicked) => {
        return prevClicked === classes.clicked ? "" : classes.clicked;
      });
    } else if (props.tooltip === "Reply") {
      props.onClick();
    }
  }
  return (
    <div className={`${classes.tweetAtrribute} ${classes[props.color]} ${clicked}`} onClick={click}>
      <div className={feedBoxButtonClasses.tooltip}>
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
