import React, { useState, Fragment } from "react";
import classes from "./ProfileActions.module.css";
import EditProfileButton from "./EditProfileButton";
import FollowButton from "./FollowButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

function ProfileActions(props) {
  const [isFollowing, setIsFollowing] = useState(false);
  const onFollowHandeler = () => {
    if (isFollowing) setIsFollowing(false);
    else setIsFollowing(true);
  };

  let actionsRendered;
  if (props.isMyProfile === true) {
    actionsRendered = (
      <div className="col-3 pe-0">
        <EditProfileButton></EditProfileButton>
      </div>
    );
  } else {
    actionsRendered = (
      <Fragment>
        <div className={`${classes.settingButton} col-2`}>
          <MoreHorizOutlinedIcon />
        </div>
        <div className={`${classes.messageButton} col-2 d-flex `}>
          <MailOutlineRoundedIcon fontsize="meduim" />
        </div>
        <div className={`col-2 pe-0 ${!isFollowing ? "me-3" : "me-4"}`}>
          <FollowButton
            isFollowing={isFollowing}
            onFollow={onFollowHandeler}
          ></FollowButton>
        </div>
      </Fragment>
    );
  }
  return <Fragment>{actionsRendered}</Fragment>;
}

export default ProfileActions;
