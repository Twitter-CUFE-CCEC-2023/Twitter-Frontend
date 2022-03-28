import React from "react";
import classes from "./ProfileHeader.module.css";
import ArrowBack from "./ArrowBack";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileHeader() {
  return (
    <div className={`row`}>
      <div className={`col-1 me-3 ${classes.arrowRow}`}>
        <ArrowBack></ArrowBack>
      </div>
      <div className={` col-9`}>
        <h5 className={`row mb-0  ${classes.username}`}>عمرو أكا زيكاااااااا</h5>
        <small className={`${classes.tweetsNumber} row text-muted `}>809 Tweets</small>
      </div>
    </div>
  );
}

export default ProfileHeader;
