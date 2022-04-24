import React, { useState, Fragment } from "react";
import classes from "./FollowingFollowersPage.module.css";
import LeftSideBar from "../../TimeLinePage/LeftSideBar/LeftSideBar";
import RightSideBar from "../../TimeLinePage/RightSideBar/RightSideBar";
import ProfileHeader from "../ProfileHeader";
import User from "./User"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";

function FollowingFollowersPage() {
  const location = useLocation();
  let userName = location.pathname.split("/")[2];
  let type = location.pathname.split("/")[1];

  const [followersSelected, setFollowersSelected] = useState(
    type === "followers" ? true : false
  );
  const [followingSelected, setFollowingSelected] = useState(
    type === "following" ? true : false
  );

  const onClickFollowers = () => {
    setFollowersSelected(() => {
      return true;
    });
    setFollowingSelected(() => {
      return false;
    });
  };
  const onClickFollowing = () => {
    setFollowersSelected(() => {
      return false;
    });
    setFollowingSelected(() => {
      return true;
    });
  };

  return (
    <div className={classes.followingFollowersPage}>
      <LeftSideBar />
      <div className={classes.followingFollowersContainer}>
        <div className={`${classes.header} row`}>
          <ProfileHeader className={`${classes.infoHeader}`}></ProfileHeader>

          <div className={`${classes.headerTabs}`}>
            <NavLink
              to={`/followers/${userName}`}
              className={`${
                followersSelected ? classes.selectedTab : classes.tab
              } col pb-0 text-muted btn `}
              onClick={onClickFollowers}
            >
              <div className={` align-self-center`}>
                <p className={`mb-2`}> Followers</p>{" "}
              </div>
              {followersSelected ? (
                <div className={`${classes.tabdiv} align-self-center`}></div>
              ) : (
                <div></div>
              )}
            </NavLink>
            <NavLink
              to={`/following/${userName}`}
              className={`${
                followingSelected ? classes.selectedTab : classes.tab
              } col pb-0 text-muted btn `}
              onClick={onClickFollowing}
            >
              <div className={` align-self-center`}>
                <p className={`mb-2`}> Following</p>{" "}
              </div>
              {followingSelected ? (
                <div className={`${classes.tabdiv} align-self-center`}></div>
              ) : (
                <div></div>
              )}
            </NavLink>
          </div>
        </div>
        {/* add each user */}
        <div>
        <User    profilePic={"https://i.imgur.com/X2JhY8Y.jpg"}
        name={"Amr Zaki"}
        userName={"amrzaki"}
        bio={"bio AlAhly jkllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"}
        following={100}
        followers={500}>
        </User>
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}

export default FollowingFollowersPage;
