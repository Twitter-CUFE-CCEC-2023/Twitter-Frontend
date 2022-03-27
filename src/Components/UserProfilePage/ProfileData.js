import React from "react";
import classes from "./ProfileData.module.css";
import ProfileHeader from "./ProfileHeader";
import CoverPhoto from "./CoverPhoto";
import image from "../../Assets/new-york-city.jpg";
import ProfileActions from "./ProfileActions/ProfileActions.js";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileData() {
  return (
    <div className={classes.profileDataContainer}>
      <div className={`${classes.header} row`}>
        <ProfileHeader></ProfileHeader>
      </div>
      <div className={`${classes.coverPhoto}  row `}>
        <CoverPhoto coverImage={image}></CoverPhoto>
        <div className={`p-0`}>
          <img
          className={`${classes.profileImage} img-fluid`}
            src="https://pbs.twimg.com/profile_images/1492532221110104067/_3ozwoyh_400x400.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={`row justify-content-end my-2 mb-4 `}>
        <ProfileActions isMyProfile={false}></ProfileActions>
      </div>
    </div>
  );
}

export default ProfileData;
