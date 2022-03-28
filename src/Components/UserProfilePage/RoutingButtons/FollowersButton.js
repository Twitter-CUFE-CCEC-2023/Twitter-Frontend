import React, { Fragment } from 'react'
import classes from './FollowersButton.module.css'

function FollowersButton(props) {
  return (
    <Fragment>
    <a href="" className={`${classes.followers} col-2 col-sm-3 `}>
      {" "}
      <span className={`${classes.followersNum}`}>
        {props.followersNum}
      </span>{" "}
      Followers
    </a>
  </Fragment>
  )
}

export default FollowersButton