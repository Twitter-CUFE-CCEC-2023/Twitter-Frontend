import React, {
  useState,
  useEffect,
  Fragment,
  useRef,
  useCallback,
} from "react";
import classes from "./User.module.css";
import ftclasses from "../../TimeLinePage/MiddlePage/FeedTweet.module.css";
import MiniProfile from "../../TimeLinePage/MiniProfile.js";
import { NavLink } from "react-router-dom";
import FollowButton from "../ProfileActions/FollowButton";
import DefaultProfilePic from "../../../Assets/DefaultProfilePic.jpg";

function User(props) {
  const [isFollowing, setIsFollowing] = useState(
    props.isFollowing ? true : false
  );
  const [user, setUser] = useState(props.user);
    const[followersCount, setFollowersCount] = useState(props.followers);
    const[followingCount, setFollowingCount] = useState(props.following);
  const onFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
    } else {
      setIsFollowing(true);
    }
  };
  const onFollowChange=(userName)=> {
    setFollowersCount(followersCount+1);
  }
  const onUnFollowChange=(userName)=> {
    setFollowersCount(followersCount-1);
  }
  return (
    <div className={classes.userContainer}>
      <NavLink to={`/userprofile/${props.userName}`} className={classes.navl + " " + classes.minip} >
        <img
          className={`${ftclasses.profilePic} ${classes.center} ${classes.minip}`}
          src={
            props.profilePic
              ? props.profilePic
              :  DefaultProfilePic 
          }
          alt="profile"
          data-testid="profilePic"
        ></img>
      </NavLink>
      <div className={`${classes.hoverProfile} ${classes.top}`}>
        <MiniProfile
          profilePic={
            props.profilePic
              ? props.profilePic
              : DefaultProfilePic 
          }
          name={props.name}
          userName={props.userName}
          profileDesciption={props.bio}
          isFollowing={isFollowing}
          setIsFollowing = {setIsFollowing}
          onClickFollow={onFollow}
          following={followingCount}
          followers={followersCount}
          onFollowChange={onFollowChange}
          onUnFollowChange={onUnFollowChange}
        />
      </div>

      <div className={classes.names + " " + classes.minip}>
        <NavLink to={`/userprofile/${props.userName}`} className={classes.navl} >
          <p
            className={classes.name + " " + classes.minip + " " + classes.nom}
            data-testid="name"
          >
            {props.name}
          </p>
        </NavLink>
        <NavLink to={`/userprofile/${props.userName}`} className={classes.navl}>
          <p
            className={classes.userName + " " + classes.nom}
            data-testid="userName"
          >
            @{props.userName}
          </p>
        </NavLink>
        <div>
          <p className={`${classes.bio}`}>{props.bio}</p>
        </div>
      </div>
      <div className={`${classes.hoverProfile} ${classes.bot}`}>
        <MiniProfile
          profilePic={
            props.profilePic
              ? props.profilePic
              :  DefaultProfilePic 
          }
          name={props.name}
          onClickFollow={onFollow}
          isFollowing={isFollowing}
          setIsFollowing = {setIsFollowing}
          userName={props.userName}
          profileDesciption={props.bio}
          following={followingCount}
          followers={followersCount}
          onFollowChange={onFollowChange}
          onUnFollowChange={onUnFollowChange}
        />
      </div>
      <div
        className={`${classes.followButton} col-2 pe-0 ${
          !isFollowing ? "me-3" : "me-4"
        }`}
      >
        {!props.currentuser && (
          <FollowButton
            isFollowing={isFollowing}
            setIsFollowing = {setIsFollowing}
            onFollow={onFollow}
            username={props.userName}
            onFollowChange={onFollowChange}
            onUnFollowChange={onUnFollowChange}
          ></FollowButton>
        )}
      </div>
    </div>
  );
}

export default User;
