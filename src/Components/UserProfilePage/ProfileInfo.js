import React, { Fragment } from "react";
import classes from "./ProfileInfo.module.css";
import { IoBalloonOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import FollowingButton from "./RoutingButtons/FollowingButton";
import FollowersButton from "./RoutingButtons/FollowersButton";
import { GoCalendar } from "react-icons/go";
import { BsLink45Deg } from "react-icons/bs";

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
      <div className={`${classes.Info}`}>
        <div className={`${classes.userBirthDate} `}>
          <GrLocation className={`${classes.calender} ms-2`}></GrLocation> New
          Cairo
        </div>
        <div className={`${classes.userBirthDate} ms-2`}>
          <IoBalloonOutline className={``}></IoBalloonOutline> Born{" "}
          {props.birthMonth} {props.birthDay}, {props.birthYear}
        </div>

        <div className={`${classes.userBirthDate}`}>
          <GoCalendar className={`${classes.calender} ms-2`}></GoCalendar>{" "}
          Joined July 2021
        </div>
        <div className={`${classes.userBirthDate}`}>
          <BsLink45Deg className={`${classes.calender} ms-3`}></BsLink45Deg>{" "}
          <a href='https://www.facebook.com/' style={{color:"#1DA1F2"}} target="_blank">https://www.facebook.com/</a>
        </div>
      </div>

      <div className={`${classes.followesRow}row  mt-2 no-gutters`}>
        <FollowingButton followingNum={1} />
        <FollowersButton followersNum={1} />
      </div>
    </Fragment>
  );
}

export default ProfileInfo;
