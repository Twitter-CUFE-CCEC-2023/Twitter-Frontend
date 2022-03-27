import React from "react";
import classes from "./SingleNotification.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SingleNotification(props) {
  let nottype = "";
  let description = "";
  if (props.type === "like") {
    nottype = classes.like;
    description = "liked your tweet";
  } else if (props.type === "retweet") {
    nottype = classes.retweet;
    description = "retweeted your tweet";
  } else if (props.type === "follow") {
    nottype = classes.follow;
    description = "followed you";
  }
  return (
    <div className={classes.notification}>
      <div className="container">
        <div className="row pt-2">
          <div className="col-1">
            <props.Icon className={`${classes.noteicon} ${nottype}`} />
          </div>
          <div className="col-4">
            <img
              className={classes.profilePic}
              alt="profile"
              src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
            ></img>
          </div>
        </div>
        <div className="row mt-3">
          <p className={classes.notedescription}>
            <span>
              <strong>YoussefMokhtar </strong>
            </span>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default SingleNotification;
