import React from "react";
import classes from "./AllNotificationsPage.module.css";
import LeftSideBar from "../TimeLinePage/LeftSideBar/LeftSideBar";
import RightSideBar from "../TimeLinePage/RightSideBar/RightSideBar";
import MentionNotifications from "./MentionNotifications";
import "bootstrap/dist/css/bootstrap.min.css";

function MentionNotificationsPage() {
  return (
    <div className={classes.notespage}>
      <LeftSideBar />
      <MentionNotifications />
      <RightSideBar />
    </div>
  );
}
export default MentionNotificationsPage;
