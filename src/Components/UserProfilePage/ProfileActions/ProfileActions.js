import React, { useState, Fragment } from "react";
import classes from "./ProfileActions.module.css";
import EditProfileButton from "./EditProfileButton";
import FollowButton from "./FollowButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

function ProfileActions(props) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleChangeData = (user) => {
    props.setProfileData(user)
  }

  const onFollowHandeler = () => {
    if (isFollowing) setIsFollowing(false);
    else setIsFollowing(true);
  };

  let actionsRendered;
  if (props.isMyProfile === true) {
    actionsRendered = (

      <EditProfileButton setData={handleChangeData} ></EditProfileButton>

    );
  } else {
    actionsRendered = (
      <Fragment>

        <div className={`col-2 pe-0 ${!isFollowing ? "me-3" : "me-4"}`}>
          <FollowButton
            isFollowing={isFollowing}
            onFollow={onFollowHandeler}

          ></FollowButton>
        </div>
        <div className={`${classes.settingButton} col-2`}>
          <MoreHorizOutlinedIcon />
        </div>
        <div className={`${classes.messageButton} col-2 d-flex `}>
          <MailOutlineRoundedIcon fontsize="meduim" />
        </div>
      </Fragment>
    );
  }
  return <Fragment>{actionsRendered}</Fragment>;
}

export default ProfileActions;
