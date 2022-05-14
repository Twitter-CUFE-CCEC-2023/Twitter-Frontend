import React, { useState, Fragment } from "react";
import classes from "./FollowButton.module.css";
import instance from "../../axios";

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
  const [followOrFollowing, setFollowOrUnFollow] = useState(
    props.isFollowing === true ? "Following" : "Follow"
  );
  function followUser() {
    setFollowOrUnFollow(() => {
      if (followOrFollowing === "Follow") {
        console.log("follow");
        instance.post("/user/follow", {"username": props.username}).then((res) => { console.log(res); }); 
        // props.onFollow();
        if(props.setIsFollowing) 
          props.setIsFollowing(true);
        if(props.setFollowingSet)
        {
          props.setFollowingSet((prev) => {
            let newFollowingSet = new Set(prev);
            newFollowingSet.add(props.username);
            return newFollowingSet;
          });
        }
        return "Following";
      } else {
        console.log("unfollow");
        instance
          .post("/user/unfollow",  {"username": props.username} )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
          // props.onFollow();
        if(props.setIsFollowing) 
          props.setIsFollowing(false);
        if(props.setFollowingSet)
        {
          props.setFollowingSet((prev) => {
            let newFollowingSet = new Set(prev);
            newFollowingSet.delete(props.username);
            return newFollowingSet;
          });
        }
        return "Follow";
      }
    });
  }

  React.useEffect(() => {
    if (props.isFollowing === true) {
      setFollowOrUnFollow("Following");
    } else {
      setFollowOrUnFollow("Follow");
    }
  }, [props.isFollowing]);


  let followActionsRenderer;

  followActionsRenderer = (
    <button
      {...buttonAHoverProps}
      className={`${
        followOrFollowing === "Following"
          ? classes.followingButton
          : classes.followButton
      }  text-bold p-2 px-3`}
      onClick={followUser}
    >
      {followOrFollowing === "Follow"
        ? followOrFollowing
        : buttonAIsHovering
        ? "UnFollow"
        : followOrFollowing}
    </button>
  );

  return <Fragment>{followActionsRenderer}</Fragment>;
}

export default FollowButton;
