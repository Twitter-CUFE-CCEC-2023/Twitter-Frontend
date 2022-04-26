import React, { useEffect, useState } from "react";
import classes from "./LeftSideBar.module.css";
import classesLeftButton from "./LeftButton.module.css";
import TweetButton from "./TweetButton";
import LeftButton from "./LeftButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
//import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PageviewOutlinedIcon from "@material-ui/icons/PageviewOutlined";
import PageviewIcon from "@material-ui/icons/Pageview";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LocalPostOfficeOutlinedIcon from "@material-ui/icons/LocalPostOfficeOutlined";
import LocalPostOfficeIcon from "@material-ui/icons/LocalPostOffice";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ViewListOutlinedIcon from "@material-ui/icons/ViewListOutlined";
import ViewListIcon from "@material-ui/icons/ViewList";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreOutlinedIcon from "@material-ui/icons/MoreOutlined";

import SelectMore from "./SelectMore/SelectMore";

const LeftSideBar = () => {
  const [moreSelected, setMoreSelected] = useState(false);
  const currentuser = JSON.parse(localStorage.getItem("UserInfo"));
  const pathname = window.location.pathname.toLowerCase();

  const [pageActive, setPageActive] = React.useState(
    new Map([
      ["home", pathname === "home"],
      ["explore", pathname === "explore"],
      ["notifications", pathname === "notifications"],
      ["mentionnotifications", pathname === "mentionnotifications"],
      ["messages", pathname === "messages"],
      ["bookmarks", pathname === "i/bookmarks"],
      ["lists", pathname === "profileName/lists"],
      ["userprofile", pathname === "userprofile"],
      ["more", pathname === "more"],
    ])
  );

  useEffect(() => {
    setPageActive((prevPageActive) => {
      let newPageActive = new Map(prevPageActive);
      [...newPageActive.keys()].forEach((key) => {
        newPageActive.set(key, false);
      });
      newPageActive.set(pathname.substring(1, pathname.length), true);
      return newPageActive;
    });
  }, [pathname]);

  return (
    <div className={classes.leftSideBar}>
      {moreSelected && <SelectMore />}
      {!moreSelected && (
        <div className={classes.twitterIcon}>
          {" "}
          <TwitterIcon />{" "}
        </div>
      )}
      {!moreSelected && (
        <div data-testid="homeButton" className={classes.phoneVis}>
          <LeftButton
            Icon={HomeOutlinedIcon}
            IconActive={HomeIcon}
            url="home"
            title="Home"
            onPage={pageActive.get("home")}
          />
        </div>
      )}
      {!moreSelected && (
        <div data-testid="exploreButton" className={classes.phoneVis}>
          <LeftButton
            Icon={PageviewOutlinedIcon}
            IconActive={PageviewIcon}
            url="explore"
            title="Explore"
            onPage={pageActive.get("explore")}
          />
        </div>
      )}
      {!moreSelected && (
        <div data-testid="notificationsButton" className={classes.phoneVis}>
          <LeftButton
            Icon={NotificationsNoneOutlinedIcon}
            IconActive={NotificationsIcon}
            url="notifications"
            title="Notifications"
            onPage={
              pageActive.get("notifications") ||
              pageActive.get("mentionnotifications")
            }
          />
        </div>
      )}
      {!moreSelected && (
        <div data-testid="messagesButton" className={classes.phoneVis}>
          <LeftButton
            Icon={LocalPostOfficeOutlinedIcon}
            IconActive={LocalPostOfficeIcon}
            url="messages"
            title="Messages"
            onPage={pageActive.get("messages")}
          />
        </div>
      )}
      {!moreSelected && (
        <div data-testid="bookmarksButton" className={classes.phoneInvis}>
          <LeftButton
            Icon={BookmarkBorderOutlinedIcon}
            IconActive={BookmarkIcon}
            url="i/bookmarks"
            title="Bookmarks"
            onPage={pageActive.get("i/bookmarks")}
          />
        </div>
      )}
      {!moreSelected && (
        <div data-testid="listsButton" className={classes.phoneInvis}>
          <LeftButton
            Icon={ViewListOutlinedIcon}
            IconActive={ViewListIcon}
            url="profileName/lists"
            title="Lists"
            onPage={pageActive.get("profilename/lists")}
          />
        </div>
      )}{" "}
      {/* profile name is the logged in user in the future*/}
      {!moreSelected && (
        <div data-testid="profileButton" className={classes.phoneInvis}>
          <LeftButton
            Icon={AccountCircleOutlinedIcon}
            IconActive={AccountCircleIcon}
            url={`userprofile/${currentuser ? currentuser.username : null}`}
            title="Profile"
            onPage={pageActive.get("userprofile")}
          />
        </div>
      )}
      {!moreSelected && (
        <div
          className={`${classesLeftButton.leftButton} ${classes.phoneInvis}`}
        >
          <MoreOutlinedIcon />
          <p
            className={classesLeftButton.title}
            onClick={() => setMoreSelected(true)}
          >
            More
          </p>
        </div>
      )}{" "}
      {/* need to add the functionality of more */}
      <div className={classes.phoneInvis}>
        <TweetButton />
      </div>
    </div>
  );
};

export default LeftSideBar;
