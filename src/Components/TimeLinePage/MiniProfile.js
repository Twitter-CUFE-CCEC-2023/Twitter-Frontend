import { Button } from '@material-ui/core'
import React from 'react'
import classes from "./MiniProfile.module.css"

function MiniProfile(props) {
  return (
    <div className={classes.miniProfile}>
        <div className={classes.flex}>
            <img className={classes.miniImg + " " + classes.pointer} src={props.profilePic}></img>
            <Button className={classes.miniButton}>Follow</Button>
        </div>
        <div className={classes.userNames}>
            <p className={classes.name + " " + classes.pointer}>{props.name}</p>
            <p className={classes.gray + " " + classes.pointer}>@{props.userName}</p>
        </div>
        <p className={classes.normalText}>{props.profileDesciption}</p>
        <div className={classes.flex}>
            <p className={classes.normalText}><span className={classes.bold}>{props.following}</span> <span className={classes.gray}>Following &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
            <p className={classes.normalText}><span className={classes.bold}>{props.followers}</span> <span className={classes.gray}>Followers</span></p>
        </div>
    </div>
  )
}

export default MiniProfile