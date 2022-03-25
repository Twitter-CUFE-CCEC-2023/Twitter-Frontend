import { Button } from "@material-ui/core";
import React from "react";
import classes from "./WhoToFollowItem.module.css";
import ftclasses from "./FeedTweet.module.css";
import MiniProfile from "./MiniProfile";

function WhoToFollowItem(props) {
  return (
    <div className={classes.whoToFollowItem}>
      <img
        className={`${ftclasses.profilePic} ${ftclasses.minip} ${classes.center}`}
        src={props.profilePic}
      ></img>
      <div className={`${ftclasses.hoverProfile} ${classes.top}`}>
        <MiniProfile
          profilePic={props.profilePic}
          name={props.name}
          userName={props.userName}
          profileDesciption="Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler "
          following={777}
          followers={1863}
        />
      </div>
      <div className={classes.names}>
        <p className={classes.name+ " " + classes.minip}>{props.name}</p>
        <p className={classes.userName+ " " + classes.minip}>@{props.userName}</p>
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
      </div>
      <Button className={classes.miniButton}>Follow</Button>
    </div>
  );
}

export default WhoToFollowItem;