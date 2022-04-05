import React, { useEffect, useState } from "react";
import classes from "./LeftSideBar.module.css";
import classesLeftButton from "./LeftButton.module.css";
import TweetButton from "./TweetButton";
import LeftButton from "./LeftButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
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

  const pathname = window.location.pathname;

  const [pageActive, setPageActive] = React.useState(
    new Map([
      ["home", pathname == "home"],
      ["explore", pathname == "explore"],
      ["notifications", pathname == "notifications"],
      ["messages", pathname == "messages"],
      ["bookmarks", pathname == "i/bookmarks"],
      ["lists", pathname == "profileName/lists"],
      ["userprofile", pathname == "userprofile"],
      ["more", pathname == "more"],
    ])
  );

  useEffect(() => {
    setPageActive((prevPageActive) => {
      let newPageActive = new Map(prevPageActive);
      newPageActive.set(pathname.substring(1, pathname.length), true);
      return newPageActive;
    });
  }, [pathname]);

  return (
    <div className={classes.leftSideBar}>
      {moreSelected && <SelectMore />}
      {!moreSelected && <TwitterIcon className={classes.twitterIcon} />}
      {!moreSelected && (
        <LeftButton
          Icon={HomeOutlinedIcon}
          IconActive={HomeIcon}
          url="home"
          title="Home"
          onPage={pageActive.get("home")}
        />
      )}
      {!moreSelected && (
        <LeftButton
          Icon={SearchOutlinedIcon}
          IconActive={SearchOutlinedIcon}
          url="explore"
          title="Explore"
          onPage={pageActive.get("explore")}
        />
      )}
      {!moreSelected && (
        <LeftButton
          Icon={NotificationsNoneOutlinedIcon}
          IconActive={NotificationsIcon}
          url="notifications"
          title="Notifications"
          onPage={pageActive.get("notifications")}
        />
      )}
      {!moreSelected && (
        <LeftButton
          Icon={LocalPostOfficeOutlinedIcon}
          IconActive={LocalPostOfficeIcon}
          url="messages"
          title="Messages"
          onPage={pageActive.get("messages")}
        />
      )}
      {!moreSelected && (
        <LeftButton
          Icon={BookmarkBorderOutlinedIcon}
          IconActive={BookmarkIcon}
          url="i/bookmarks"
          title="Bookmarks"
          onPage={pageActive.get("bookmarks")}
        />
      )}
      {!moreSelected && (
        <LeftButton
          Icon={ViewListOutlinedIcon}
          IconActive={ViewListIcon}
          url="profileName/lists"
          title="Lists"
          onPage={pageActive.get("lists")}
        />
      )}{" "}
      {/* profile name is the logged in user in the future*/}
      {!moreSelected && (
        <LeftButton
          Icon={AccountCircleOutlinedIcon}
          IconActive={AccountCircleIcon}
          url="userprofile"
          title="Profile"
          onPage={pageActive.get("userprofile")}
        />
      )}
      {!moreSelected && (
        <div className={`${classesLeftButton.leftButton}`}>
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
      <TweetButton />
    </div>
  );
};

export default LeftSideBar;
