import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MiniProfile.module.css";

function MiniProfile(props) {
  return (
    <div className={classes.miniProfile}>
      <div className={classes.flex}>
        <NavLink className={`noDecoration`} to="profile">
          <img
            className={classes.miniImg + " " + classes.pointer}
            src={props.profilePic}
          ></img>
        </NavLink>
        <Button className={classes.miniButton}>Follow</Button>
      </div>
      <div className={classes.userNames}>
        <NavLink className={`noDecoration black `} to="profile">
          <p className={classes.name + " " + classes.pointer + " noMargin"}>{props.name}</p>
        </NavLink>
        <NavLink className={`noDecoration gray `} to="profile">
          <p className={classes.gray + " " + classes.pointer+ " noMargin"}>
            @{props.userName}
          </p>
        </NavLink>
      </div>
      <p className={classes.normalText}>{props.profileDesciption}</p>
      <div className={classes.flex}>
        <p className={classes.normalText + " " + classes.underline}>
          <span className={classes.bold}>{props.following}</span>{" "}
          <span className={classes.gray}>
            Following
          </span>
        </p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p className={classes.normalText + " " + classes.underline}>
          <span className={classes.bold}>{props.followers}</span>{" "}
          <span className={classes.gray}>Followers</span>
        </p>
      </div>
    </div>
  );
}

export default MiniProfile;
