import React, { Fragment } from "react";
import classes from "./FollowingButton.module.css";

function FollowingButton(props) {
  return (
    <Fragment>
      <a href="" className={`${classes.following} col-2 col-sm-3  `}>
        {" "}
        <span className={`${classes.followingNum}`}>
          {props.followingNum}
        </span>{" "}
        Following
      </a>
    </Fragment>
  );
}

export default FollowingButton;
