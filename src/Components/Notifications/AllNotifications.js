import React from "react";
import classes from "./AllNotifications.module.css";
import NotificationsNavBar from "./NotificationsNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
function AllNotifications() {
  return (
    <div className={classes.notes}>
      <NotificationsNavBar selected={true} />
    </div>
  );
}
export default AllNotifications;
