import React, { Fragment,Route, Redirect ,Switch } from 'react'
import { useLocation } from 'react-router-dom'
import classes from './FollowersButton.module.css'
import { NavLink } from "react-router-dom";

function FollowersButton(props) {
  const location = useLocation();
  const userID = location.pathname.split("/")[2];
  return (
    <Fragment>
    <NavLink to={`/followers/${userID}`} className={`${classes.followers} col-2 col-sm-3 `} >
      {" "}
      <span className={`${classes.followersNum}`}>
        {props.followersNum}
      </span>{" "}
      Followers
    </NavLink>
  </Fragment>
  )
}

export default FollowersButton