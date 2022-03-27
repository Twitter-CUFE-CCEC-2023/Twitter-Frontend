import React, { Fragment } from "react";
import classes from "./ProfileInfo.module.css";
import { IoBalloonOutline } from "react-icons/io5";
import FollowingButton from "./RoutingButtons/FollowingButton";
import FollowersButton from "./RoutingButtons/FollowersButton";
import { GoCalendar } from "react-icons/go";

function ProfileInfo(props) {
  return (
    <Fragment>
      <div>
        <h6 className={`${classes.username} mb-0`}>{props.username}</h6>
        <p className={`${classes.email} mt-0 mb-0 `}>{props.userEmail}</p>
      </div>
      <div>
        <p className={`${classes.userBio} py-0 my-2`}>{props.userBio}</p>
      </div>
      <div className={`${classes.userBirthDate}`}>
        <IoBalloonOutline className={``}></IoBalloonOutline> Born{" "}
        {props.birthMonth} {props.birthDay}, {props.birthYear}
        <GoCalendar className={`${classes.calender} ms-3`}></GoCalendar> Joined
        July 2021
      </div>
      <div className={`${classes.followesRow}row  mt-2 no-gutters`}>
          <FollowingButton  followingNum={289}/>
          <FollowersButton  followersNum={56}/>
      </div>
    </Fragment>
  );
}

export default ProfileInfo;
