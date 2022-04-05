import React from "react";
import classes from "./ProfileData.module.css";
import ProfileHeader from "./ProfileHeader";
import CoverPhoto from "./CoverPhoto";
import image from "../../Assets/new-york-city.jpg";
import ProfileActions from "./ProfileActions/ProfileActions.js";
import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileData() {


  return (
    <div className={`${classes.profileDataContainer} `}>
      <div className={`${classes.header} row`}>
        <ProfileHeader></ProfileHeader>
      </div>
      <div className={`${classes.coverPhoto}  row `}>
        <CoverPhoto coverImage={image}></CoverPhoto>
        <div className={`${classes.profileImageContainer} p-0`}>
          <img
            className={`${classes.profileImage} img-fluid`}
            src="https://pbs.twimg.com/profile_images/1492532221110104067/_3ozwoyh_400x400.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={`${classes.profileActionsRow} row justify-content-end  `}>
        <ProfileActions isMyProfile={true}></ProfileActions>
      </div>
      <div className={`${classes.profileInfo} row  my-4 mx-1`}>
        <ProfileInfo
          username="عمرو أكا زيكا"
          userEmail="@Amr_Zaki2000"
          userBio="Al Ahly"
          birthMonth="October"
          birthDay={17}
          birthYear={2000}
        ></ProfileInfo>
      </div>
      <div className={`row`}>
        <ProfileTabs></ProfileTabs>
      </div>
    </div>
  );
}

export default ProfileData;
