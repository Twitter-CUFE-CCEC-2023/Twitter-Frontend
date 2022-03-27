import React, { useState, Fragment } from "react";
import classes from "./FollowButton.module.css";

function useHover() {
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return [hovering, onHoverProps];
}

function FollowButton(props) {
  const [buttonAIsHovering, buttonAHoverProps] = useHover();
  const [followOrFollowing, setFollowOrUnFollow] = useState("Follow");
  function followUser() {
    setFollowOrUnFollow(() => {
      if (followOrFollowing === "Follow") {
        return "Following";
      } else {
        return "Follow";
      }
    });
    props.onFollow();
  }

  let followActionsRenderer;

  followActionsRenderer = (
    <button
      {...buttonAHoverProps}
      className={`${
        props.isFollowing ? classes.followingButton : classes.followButton
      }  text-bold p-2 px-3`}
      onClick={followUser}
    >
      {!props.isFollowing? followOrFollowing :buttonAIsHovering ? "UnFollow" : followOrFollowing}
      
    </button>
  );

  return <Fragment>{followActionsRenderer}</Fragment>;
}

export default FollowButton;
