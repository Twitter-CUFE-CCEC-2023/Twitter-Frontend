import React, { Fragment } from "react";
import { useLocation } from 'react-router-dom'
import classes from "./FollowingButton.module.css";
import { NavLink } from "react-router-dom";

function FollowingButton(props) {
  const location = useLocation();
  let userName = location.pathname.split("/")[2];
  userName = userName.split(":")[1];
  return (
    <Fragment>
      <NavLink to={`/following/${userName}`} className={`${classes.following} col-2 col-sm-3  `}>
        {" "}
        <span className={`${classes.followingNum}`}>
          {props.followingNum}
        </span>{" "}
        Following
      </NavLink>
    </Fragment>
  );
}

export default FollowingButton;
