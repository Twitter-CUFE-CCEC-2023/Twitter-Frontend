import React, { Fragment } from "react";
import classes from "./ProfileInfo.module.css";
import { IoBalloonOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import FollowingButton from "./RoutingButtons/FollowingButton";
import FollowersButton from "./RoutingButtons/FollowersButton";
import { GoCalendar } from "react-icons/go";
import { BsLink45Deg } from "react-icons/bs";

function ProfileInfo(props) {
  let JoinedDate = new Date(props.created_at);
  const joined_at=JoinedDate.toString().split(" ");
  let birth_date=new Date(props.birth_date);
  const birth_at=birth_date.toString().split(" ");
  return (
    <Fragment>
      <div>
        <h6 className={`${classes.username} mb-0`}>{props.name}</h6>
        <p className={`${classes.email} mt-0 mb-0 `}>{props.userEmail}</p>
      </div>
      <div>
        <p className={`${classes.userBio} py-0 my-2`}>{props.userBio}</p>
      </div>
      <div className={`${classes.Info}`}>
        {props.userLocation && (
          <div className={`${classes.userBirthDate} `}>
            <GrLocation className={`${classes.calender} ms-2`}></GrLocation>{" "}
            {props.userLocation}
          </div>
        )}
        <div className={`${classes.userBirthDate} ms-2`}>
          <IoBalloonOutline className={``}></IoBalloonOutline> Born{" "}
          {birth_at[1]} {birth_at[2]}, {birth_at[3]}
        </div>

        <div className={`${classes.userBirthDate}`}>
          <GoCalendar className={`${classes.calender} ms-2`}></GoCalendar>{" "}
          Joined {joined_at[1]} {joined_at[3]}
        </div>
        {props.userWebsite && (
          <div className={`${classes.userBirthDate}`}>
            <BsLink45Deg className={`${classes.calender} ms-3`}></BsLink45Deg>{" "}
            <a
              href={`https://${props.userWebsite}`}
              style={{ color: "#1DA1F2" }}
              target="_blank"
            >
              {props.userWebsite}
            </a>
          </div>
        )}
      </div>

      <div className={`${classes.followesRow}row  mt-2 no-gutters`}>
        <FollowingButton followingNum={props.following_count} />
        <FollowersButton followersNum={props.followers_count} />
      </div>
    </Fragment>
  );
}

export default ProfileInfo;
