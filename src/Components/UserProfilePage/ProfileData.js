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
      </div>
      <div className={`row justify-content-end my-2 mb-4 `}>
        <ProfileActions isMyProfile={true}></ProfileActions>
      </div>
    </div>
  );
}

export default ProfileData;
