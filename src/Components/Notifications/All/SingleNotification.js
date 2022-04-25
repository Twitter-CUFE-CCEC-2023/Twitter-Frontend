import React from "react";
import classes from "./SingleNotification.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PersonIcon from "@mui/icons-material/Person";
import BlockIcon from "@mui/icons-material/Block";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NavLink } from "react-router-dom";
function SingleNotification(props) {
  let nottype = "";
  let description = "";

  if (props.type === "Account Update") {
    nottype = classes.ban;
    description = "This account is restricted for " + props.banDuration;
    return (
      <div className={classes.notification}>
        <div className="container">
          <div className="row pt-2">
            <div className="col-1">
              <BlockIcon className={`${classes.noteicon} ${nottype}`} />
            </div>
            <div className="col-8 pt-3">
              <p
                className={classes.notedescription}
                style={{ marginLeft: "0.25em" }}
              >
                <strong>{description}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.type === "Following Tweet") {
    nottype = classes.tweet;
    description = "New tweet notification for ";
    return (
      <NavLink
        to={`/${props.uid}/status/${props.tweetID}`}
        className={classes.link}
      >
        <div className={classes.notification}>
          <div className="container">
            <div className="row pt-2">
              <div className="col-1">
                <NotificationsIcon
                  className={`${classes.noteicon} ${nottype}`}
                />
              </div>
              <div className="col-4">
                <img
                  className={classes.profilePic}
                  alt="profile"
                  src={props.profilePicture}
                ></img>
              </div>
            </div>
            <div className="row mt-3">
              <p className={classes.notedescription}>
                {description}
                <span>
                  <strong>{props.Person} </strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    );
  } else if (props.type === "Like") {
    nottype = classes.like;
    description = "liked your tweet";
    return (
      <NavLink
        to={`/${props.uid}/status/${props.tweetID}`}
        className={classes.link}
      >
        <div className={classes.notification}>
          <div className="container">
            <div className="row pt-2">
              <div className="col-1">
                <FavoriteIcon className={`${classes.noteicon} ${nottype}`} />
              </div>
              <div className="col-4">
                <img
                  className={classes.profilePic}
                  alt="profile"
                  src={props.profilePicture}
                ></img>
              </div>
            </div>
            <div className="row mt-3">
              <p className={classes.notedescription}>
                <span>
                  <strong>{props.Person} </strong>
                </span>
                {description}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    );
  } else if (props.type === "Retweet") {
    nottype = classes.retweet;
    description = "retweeted your tweet";
    return (
      <NavLink
        to={`/${props.uid}/status/${props.tweetID}`}
        className={classes.link}
      >
        <div className={classes.notification}>
          <div className="container">
            <div className="row pt-2">
              <div className="col-1">
                <AutorenewIcon className={`${classes.noteicon} ${nottype}`} />
              </div>
              <div className="col-4">
                <img
                  className={classes.profilePic}
                  alt="profile"
                  src={props.profilePicture}
                ></img>
              </div>
            </div>
            <div className="row mt-3">
              <p className={classes.notedescription}>
                <span>
                  <strong>{props.Person} </strong>
                </span>
                {description}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    );
  } else if (props.type === "Follow") {
    nottype = classes.follow;
    description = "followed you";
    return (
      <NavLink to={`/userProfile/${props.person}`} className={classes.link}>
        <div className={classes.notification}>
          <div className="container">
            <div className="row pt-2">
              <div className="col-1">
                <PersonIcon className={`${classes.noteicon} ${nottype}`} />
              </div>
              <div className="col-4">
                <img
                  className={classes.profilePic}
                  alt="profile"
                  src={props.profilePicture}
                ></img>
              </div>
            </div>
            <div className="row mt-3">
              <p className={classes.notedescription}>
                <span>
                  <strong>{props.Person} </strong>
                </span>
                {description}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}
export default SingleNotification;
