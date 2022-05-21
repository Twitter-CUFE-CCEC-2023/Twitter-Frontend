import React, { useState, Fragment } from "react";
import classes from "./ProfileActions.module.css";
import EditProfileButton from "./EditProfileButton";
import FollowButton from "./FollowButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

function ProfileActions(props) {
  const [isFollowing, setIsFollowing] = useState(
    props.isFollowing ? true : false
  );
  const [isLoading, setIsLoading] = useState(false);

  const onFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
    } else {
      setIsFollowing(true);
    }
  };

  const handleChangeData = (user) => {
    props.setProfileData(user);
  };

  let actionsRendered;
  if (props.isMyProfile === true) {
    actionsRendered = (
      <EditProfileButton setData={handleChangeData}></EditProfileButton>
    );
  } else {
    actionsRendered = (
      <Fragment>
        <div
          className={`${classes.followButtonDiv} col-2 pe-0 ${
            !isFollowing ? "me-3" : "me-4"
          }`}
        >
          {!props.isLoading && (
            <FollowButton
              isFollowing={props.isFollowing}
              onFollow={onFollow}
              username={props.username}
              setIsFollowing={setIsFollowing}
              onFollowChange={props.onFollow}
              onUnFollowChange={props.onUnFollow}
            ></FollowButton>
          )}
        </div>
        {!props.isLoading && (
          <div className={`${classes.settingButton} col-2`}>
            <MoreHorizOutlinedIcon />
          </div>
        )}
        {!props.isLoading && (
          <div className={`${classes.messageButton} col-2 d-flex `}>
            <MailOutlineRoundedIcon fontsize="meduim" />
          </div>
        )}
        {
          props.isLoading && <div className={`${classes.messageButton1} col-2 d-flex `}></div>
        }
      </Fragment>
    );
  }
  return <Fragment>{actionsRendered}</Fragment>;
}

export default ProfileActions;
