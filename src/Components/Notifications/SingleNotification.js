import React from "react";
import classes from "./SingleNotification.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SingleNotification(props) {
  let nottype = "";
  if (props.type === "like") {
    nottype = classes.like;
  } else if (props.type === "retweet") {
    nottype = classes.retweet;
  }
  return (
    <div className={classes.notification}>
      <div className="row align-items-start">
        <div className={`${classes.noteicon} col-3`}>
          <props.Icon className={nottype} />
        </div>
        <img
          className={`${classes.profilePic} col-6`}
          alt="profile"
          src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        ></img>
      </div>
    </div>
  );
}
export default SingleNotification;
