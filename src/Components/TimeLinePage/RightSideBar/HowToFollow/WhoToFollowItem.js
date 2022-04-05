import { Button } from "@material-ui/core";
import React from "react";
import classes from "./WhoToFollowItem.module.css";
import ftclasses from "../../MiddlePage/FeedTweet.module.css";
import MiniProfile from "../../MiniProfile";
import { NavLink } from "react-router-dom";

function WhoToFollowItem(props) {
  return (
    <div className={classes.whoToFollowItem}>
      <NavLink className={classes.navl + " " + classes.minip} to="profile">
        <img
          className={`${ftclasses.profilePic} ${classes.center} ${classes.minip}`}
          src={props.profilePic}
        ></img>
      </NavLink>
      <div className={`${classes.hoverProfile} ${classes.top}`}>
        <MiniProfile
          profilePic={props.profilePic}
          name={props.name}
          userName={props.userName}
          profileDesciption="Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler "
          following={777}
          followers={1863}
        />
      </div>

      <div className={classes.names + " " + classes.minip}>
        <NavLink className={classes.navl} to="profile">
          <p className={classes.name + " " + classes.minip + " " + classes.nom}>
            {props.name}
          </p>
        </NavLink>
        <NavLink className={classes.navl} to="profile">
          <p className={classes.userName + " " + classes.nom}>
            @{props.userName}
          </p>
        </NavLink>
      </div>
      <div className={`${classes.hoverProfile} ${classes.bot}`}>
        <MiniProfile
          profilePic={props.profilePic}
          name={props.name}
          userName={props.userName}
          profileDesciption="Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler "
          following={777}
          followers={1863}
        />
      </div>

      <Button className={classes.miniButton}>Follow</Button>
    </div>
  );
}

export default WhoToFollowItem;
