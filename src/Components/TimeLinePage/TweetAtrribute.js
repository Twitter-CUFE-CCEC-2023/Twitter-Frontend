import React from "react";
import "./TweetAtrribute.css";
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
        return clicked === "clicked" ? prevNum - 1 : prevNum + 1;
      });
      setClicked((prevClicked) => {
        return prevClicked === "clicked" ? "" : "clicked";
      });
    } else if (props.tooltip === "Reply") {
      props.onClick();
    }
  }
  return (
    <div className={`tweetAtrribute ${props.color} ${clicked}`} onClick={click}>
      <div className={feedBoxButtonClasses.tooltip}>
        <div className="flex">
          {!hlLike && <props.Icon className="attIcon" />}
          {hlLike && <props.FilledIcon className="attIcon" />}
          <p>{num}</p>
        </div>
        <span className={feedBoxButtonClasses.tooltiptext}>
          {props.tooltip}
        </span>
      </div>
    </div>
  );
}

export default TweetAtrribute;
