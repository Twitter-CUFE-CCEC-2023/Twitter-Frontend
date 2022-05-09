import React from "react";
import classes from "./ProfileHeader.module.css";
import ArrowBack from "./ArrowBack";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { blackberry } from "fontawesome";
const black='#000000';
function ProfileHeader(props) {
  const clickArrowBack=()=>{

  }
  return (
    <div className={`row`}>
      <div className={`col-1 me-3 ${classes.arrowRow}`}>
        <NavLink to={`/userprofile/${props.username}`} className={` ${classes.arrow}`} >
        <ArrowBack className={`${classes.arrow}`}  ></ArrowBack>
        </NavLink>
      </div>
      <div className={` col-9`}>
        <h5 className={`row mb-0  ${classes.username}`}>{props.name}</h5>
        {props.tweets_count && <h6 className={`${classes.tweetsNumber} row text-muted `}>{props.tweets_count} Tweets</h6>}
      </div>
    </div>
  );
}

export default ProfileHeader;
