import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MiniProfile.module.css";
import FollowButton from "../UserProfilePage/ProfileActions/FollowButton";

function MiniProfile(props) {
  const [isFollowing, setIsFollowing] = useState(
    props.isFollowing ? true : false
  );
  let loggedUser = JSON.parse(localStorage.getItem("UserInfo"));

  const onFollow = () => {
    if (isFollowing) {
      setIsFollowing(()=>{return false});
      props.setIsFollowing(false);
      if(props.setFollowingSet){
        props.setFollowingSet((prev) => {
          let newFollowingSet = new Set(prev);
          newFollowingSet.delete(props.userName);
          return newFollowingSet;
        });
      }
    } else {
      setIsFollowing(()=>{return true});
      props.setIsFollowing(true);
      if(props.setFollowingSet){
        props.setFollowingSet((prev) => {
          let newFollowingSet = new Set(prev);
          newFollowingSet.add(props.userName);
          return newFollowingSet;
        });
      }
    }
  };


  return (
    <div className={classes.miniProfile}>
      <div className={classes.flexContainer}>
        <NavLink
          className={`noDecoration`}
          to={`/userprofile/${props.userName}`}
        >
          <img
            className={classes.miniImg + " " + classes.pointer}
            src={props.profilePic}
            data-testid="profilePicmp"
          ></img>
        </NavLink>
        <div
          className={`${classes.followButton} col-2 pe-0 ${
            !isFollowing ? "me-0" : "me-0"
          }`}
        >
          {loggedUser && loggedUser.username !== props.userName &&
            <FollowButton
            isFollowing={props.isFollowing}
            setIsFollowing={props.setIsFollowing}
            onFollow={onFollow}
            className={classes.miniButton}
            username={props.userName}
            setFollowingSet = {props.setFollowingSet}
            followingSet={props.followingSet}
            onFollowChange={props.onFollowChange}
            onUnFollowChange={props.onUnFollowChange}
          ></FollowButton>}
        </div>
      </div>
      <div className={classes.userNames}>
        <NavLink
          className={`noDecoration black `}
          to={`/userprofile/${props.userName}`}
        >
          <p
            className={classes.name + " " + classes.pointer + " noMargin"}
            data-testid="namemp"
          >
            {props.name}
          </p>
        </NavLink>
        <NavLink
          className={`noDecoration gray `}
          to={`/userprofile/${props.userName}`}
        >
          <p
            className={classes.gray + " " + classes.pointer + " noMargin"}
            data-testid="userNamemp"
          >
            @{props.userName}
          </p>
        </NavLink>
      </div>
      <p className={classes.normalText} data-testid="profileDesciption">
        {props.profileDesciption}
      </p>
      <div className={classes.flex}>
        <p
          className={
            classes.normalText + " " + classes.underline + " " + classes.pointer
          }
          data-testid="followingmp"
        >
          <span className={classes.bold}>{props.following}</span>{" "}
          <NavLink
            className={`noDecoration ${classes.fs15}`}
            to={`/following/${props.userName}`}
          >
            <span className={classes.gray}>Following</span>
          </NavLink>
        </p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p
          className={
            classes.normalText + " " + classes.underline + " " + classes.pointer
          }
          data-testid="followersmp"
        >
          <span className={classes.bold}>{props.followers}</span>{" "}
          <NavLink
            className={`noDecoration ${classes.fs15}`}
            to={`/followers/${props.userName}`}
          >
            <span className={classes.gray}>Followers</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default MiniProfile;
