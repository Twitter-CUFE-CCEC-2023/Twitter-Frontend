import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MiniProfile.module.css";

function MiniProfile(props) {
  return (
    <div className={classes.miniProfile}>
      <div className={classes.flex}>
        <NavLink className={`noDecoration`} to={`/userprofile/${props.userName}`}>
          <img
            className={classes.miniImg + " " + classes.pointer}
            src={props.profilePic}
            data-testid = "profilePicmp"
          ></img>
        </NavLink>
        <Button className={classes.miniButton}>Follow</Button>
      </div>
      <div className={classes.userNames}>
        <NavLink className={`noDecoration black `} to={`/userprofile/${props.userName}`}>
          <p className={classes.name + " " + classes.pointer + " noMargin"}
          data-testid = "namemp"
        >
            {props.name}</p>
        </NavLink>
        <NavLink className={`noDecoration gray `} to={`/userprofile/${props.userName}`}>
          <p className={classes.gray + " " + classes.pointer+ " noMargin"}
          data-testid = "userNamemp"
          >
            @{props.userName}
          </p>
        </NavLink>
      </div>
      <p className={classes.normalText}
      data-testid = "profileDesciption"
      >{props.profileDesciption}</p>
      <div className={classes.flex}>
        <p className={classes.normalText + " " + classes.underline}
        data-testid = "followingmp"
        >
          <span className={classes.bold}>{props.following}</span>{" "}
          <span className={classes.gray}>
            Following
          </span>
        </p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p className={classes.normalText + " " + classes.underline}
        data-testid = "followersmp"
        >
          <span className={classes.bold}>{props.followers}</span>{" "}
          <span className={classes.gray}>Followers</span>
        </p>
      </div>
    </div>
  );
}

export default MiniProfile;
