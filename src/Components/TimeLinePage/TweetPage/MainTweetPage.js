import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import classes from './MainTweetPage.module.css'
import TweetAndReplies from './TweetAndReplies'


function MainTweetPage() {
  return (
    <div className={classes.mainTweetPage}>
    <LeftSideBar/>
    <TweetAndReplies/>
    <RightSideBar/>
    </div>
  )
}

export default MainTweetPage