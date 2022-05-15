import React, { useState, useEffect } from "react";
import classes from "./SingleNotification.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PersonIcon from "@mui/icons-material/Person";
import BlockIcon from "@mui/icons-material/Block";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NavLink } from "react-router-dom";
import FeedTweet from "../../TimeLinePage/MiddlePage/FeedTweet";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MiniProfile from "../../TimeLinePage/MiniProfile";
import instance from "../../axios";
function SingleNotification(props) {
  let nottype = "";
  let description = "";
  let history = useHistory();

  const readNote = async (e) => {
    await instance.put("/read-notification", { notificationId: props.note_id });
    e.stopPropagation();
    history.push(`/${props.personID}/status/${props.tweetID}`);
    localStorage.setItem("currentPage", "/notifications")
    window.location.reload();
  };

  const readNoteFollow = async (e) => {
    await instance.put("/read-notification", {
      notificationId: props.note_id,
    });
    e.stopPropagation();
    history.push(`/userprofile/${props.personID}`);
    window.location.reload();
  };

  if (props.type === "Account Update") {
    nottype = classes.ban;
    description = "This account is restricted for " + props.banDuration;
    return (
      <div
        className={`${classes.notification} ${props.is_read ? "" : classes.is_read
          }`}
      >
        <div className="container">
          <div className="row pt-2">
            <div className="col-1">
              <BlockIcon className={`${classes.noteicon} ${nottype}`} />
            </div>
            <div className="col-8 pt-3 mb-2">
              <p
                className={classes.notedescription}
                style={{ marginLeft: "0.25em", marginTop: "-0.2em" }}
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
      <div
        className={`${classes.notification} ${props.is_read ? "" : classes.is_read
          }`}
        onClick={readNote}
      >
        <div className="container">
          <div className="row pt-2">
            <div className="col-1">
              <NotificationsIcon className={`${classes.noteicon} ${nottype}`} />
            </div>
            <div className="col-4">
              <NavLink
                to={`/userprofile/${props.personID}`}
                className={classes.link}
              >
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${classes.profilePic} ${classes.minip}`}
                  alt="profile"
                  src={props.profilePicture}
                ></img>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  className={`${classes.hoverProfile} ${classes.top}`}
                >
                  <MiniProfile
                    profilePic={props.profilePicture}
                    name={props.Person}
                    userName={props.personID}
                    profileDesciption={props.bio}
                    following={props.following}
                    followers={props.followers}
                  />
                </div>
              </NavLink>
            </div>
          </div>
          <div className="row mt-2">
            <p className={classes.notedescription}>
              {description}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`${classes.underline} ${classes.fs15} ${classes.pointer} ${classes.alignTop} `}
              >
                <NavLink
                  to={`/userprofile/${props.personID}`}
                  className={`${classes.nameLink} ${classes.fs15} ${classes.minip} ${classes.noStyle}`}
                >
                  <strong>{props.Person} </strong>
                </NavLink>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${classes.hoverProfile}  ${classes.bot}`}
                >
                  <MiniProfile
                    profilePic={props.profilePicture}
                    name={props.person}
                    userName={props.personID}
                    profileDesciption={props.bio}
                    following={props.following}
                    followers={props.followers}
                  />
                </div>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  } else if (props.type === "Like") {
    nottype = classes.like;
    description = "liked your tweet";
    return (
      <div
        className={`${classes.notification} ${props.is_read ? "" : classes.is_read
          }`}
        onClick={readNote}
      >
        <div className="container">
          <div className="row pt-2">
            <div className="col-1">
              <FavoriteIcon className={`${classes.noteicon} ${nottype}`} />
            </div>
            <div className="col-4">
              <NavLink
                to={`/userprofile/${props.personID}`}
                className={classes.link}
              >
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${classes.profilePic} ${classes.minip}`}
                  alt="profile"
                  src={props.profilePicture}
                ></img>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  className={`${classes.hoverProfile} ${classes.top}`}
                >
                  <MiniProfile
                    profilePic={props.profilePicture}
                    name={props.Person}
                    userName={props.personID}
                    profileDesciption={props.bio}
                    following={props.following}
                    followers={props.followers}
                  />
                </div>
              </NavLink>
            </div>
          </div>
          <div className="row mt-2">
            <p className={classes.notedescription}>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`${classes.underline} ${classes.fs15} ${classes.pointer} ${classes.alignTop} `}
              >
                <NavLink
                  to={`/userprofile/${props.personID}`}
                  className={`${classes.nameLink} ${classes.fs15} ${classes.minip} ${classes.noStyle}`}
                >
                  <strong>{props.Person} </strong>
                </NavLink>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${classes.hoverProfile}  ${classes.bot}`}
                >
                  <MiniProfile
                    profilePic={props.profilePicture}
                    name={props.person}
                    userName={props.personID}
                    profileDesciption={props.bio}
                    following={props.following}
                    followers={props.followers}
                  />
                </div>
              </span>
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  } else if (props.type === "Retweet") {
    nottype = classes.retweet;
    description = "retweeted your tweet";
    return (
      <div
        className={`${classes.notification} ${props.is_read ? "" : classes.is_read
          }`}
        onClick={readNote}
      >
        <div className="container">
          <div className="row pt-2">
            <div className="col-1">
              <AutorenewIcon className={`${classes.noteicon} ${nottype}`} />
            </div>
            <div className="col-4">
              <NavLink
                to={`/userprofile/${props.personID}`}
                className={classes.link}
              >
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${classes.profilePic} ${classes.minip}`}
                  alt="profile"
                  src={props.profilePicture}
                ></img>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  className={`${classes.hoverProfile} ${classes.top}`}
                >
                  <MiniProfile
                    profilePic={props.profilePicture}
                    name={props.Person}
                    userName={props.personID}
                    profileDesciption={props.bio}
                    following={props.following}
                    followers={props.followers}
                  />
                </div>
              </NavLink>
            </div>
          </div>
          <div className="row mt-2">
            <p className={classes.notedescription}>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`${classes.underline} ${classes.fs15} ${classes.pointer} ${classes.alignTop} `}
              >
                <NavLink
                  to={`/userprofile/${props.personID}`}
                  className={`${classes.nameLink} ${classes.fs15} ${classes.minip} ${classes.noStyle}`}
                >
                  <strong>{props.Person} </strong>
                </NavLink>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${classes.hoverProfile}  ${classes.bot}`}
                >
                  <MiniProfile
                    profilePic={props.profilePicture}
                    name={props.person}
                    userName={props.personID}
                    profileDesciption={props.bio}
                    following={props.following}
                    followers={props.followers}
                  />
                </div>
              </span>
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  } else if (props.type === "Follow") {
    nottype = classes.follow;
    description = "started following you";
    return (
      <div
        className={`${classes.notification} ${props.is_read ? "" : classes.is_read
          }`}
        onClick={readNoteFollow}
      >
        <div className="container">
          <div className="row pt-2">
            <div className="col-1">
              <PersonIcon className={`${classes.noteicon} ${nottype}`} />
            </div>
            <div className="col-4">
              <NavLink
                to={`/userprofile/${props.personID}`}
                className={classes.link}
              >
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${classes.profilePic} ${classes.minip}`}
                  alt="profile"
                  src={props.profilePicture}
                ></img>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  className={`${classes.hoverProfile} ${classes.top}`}
                >
                  <MiniProfile
                    profilePic={props.profilePicture}
                    name={props.Person}
                    userName={props.personID}
                    profileDesciption={props.bio}
                    following={props.following}
                    followers={props.followers}
                  />
                </div>
              </NavLink>
            </div>
          </div>
          <div className="row mt-2">
            <p className={classes.notedescription}>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`${classes.underline} ${classes.fs15} ${classes.pointer} ${classes.alignTop} `}
              >
                <NavLink
                  to={`/userprofile/${props.personID}`}
                  className={`${classes.nameLink} ${classes.fs15} ${classes.minip} ${classes.noStyle}`}
                >
                  <strong>{props.Person} </strong>
                </NavLink>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${classes.hoverProfile}  ${classes.bot}`}
                >
                  <MiniProfile
                    profilePic={props.profilePicture}
                    name={props.person}
                    userName={props.personID}
                    profileDesciption={props.bio}
                    following={props.following}
                    followers={props.followers}
                  />
                </div>
              </span>
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleNotification;
