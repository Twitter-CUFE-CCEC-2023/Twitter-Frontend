import React from 'react'
import classes from "./WhoToFollow.module.css"
import WhoToFollowItem from './WhoToFollowItem'

function WhoToFollow() {
  return (
    <div className={classes.whoToFollow}>
      <h2 className={classes.whoToFollowHeader}>Who to follow</h2>
      <WhoToFollowItem  profilePic = "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                        name = "Iris"
                        userName = "ItsIris"/>
      <WhoToFollowItem  profilePic = "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                        name = "Iris"
                        userName = "ItsIris"/>
      <p className={classes.showMore}>Show more</p>
    </div>
  )
}

export default WhoToFollow