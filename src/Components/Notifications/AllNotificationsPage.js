import React from "react";
import classes from "./AllNotificationsPage.module.css";
import LeftSideBar from "../TimeLinePage/LeftSideBar/LeftSideBar";
import RightSideBar from "../TimeLinePage/RightSideBar/RightSideBar";
import AllNotifications from "./AllNotifications";
import "bootstrap/dist/css/bootstrap.min.css";

function AllNotificationsPage() {
  return (
    <div className={classes.notespage}>
      <LeftSideBar />
      <AllNotifications />
      <RightSideBar />
    </div>
  );
}
export default AllNotificationsPage;
