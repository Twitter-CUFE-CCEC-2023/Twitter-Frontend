import React from "react";
import classes from "./DeletedTweet.module.css";
import LeftSideBar from "../../TimeLinePage/LeftSideBar/LeftSideBar";
import RightSideBar from "../../TimeLinePage/RightSideBar/RightSideBar";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
function DeletedTweet() {
  return (
    <div className={classes.mainTweetPage}>
      <LeftSideBar />
      <div className={`${classes.TweetAndReplies}`}>
        <div className={classes.tweetHeader}>
          <NavLink
            className={classes.nlink}
            to={
              localStorage.getItem("currentPage") === "/notifications"
                ? "/notifications"
                : "/home"
            }
          >
            <ArrowBackIcon className={`${classes.fs20} ${classes.icon}`} />
          </NavLink>
          <h2 className={`${classes.headerText} ${classes.fs20}`}>Tweet</h2>
        </div>
        <div>
          <h6 className={classes.deleted}>This tweet has been deleted</h6>
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}
export default DeletedTweet;
