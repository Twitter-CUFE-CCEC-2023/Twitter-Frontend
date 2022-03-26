import React from "react";
import classes from "./MentionNotifications.module.css";
import NotificationsNavBar from "./NotificationsNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
function MentionNotifications() {
  return (
    <div className={classes.notes}>
      <NotificationsNavBar selected={false} />
      <h6>Nothing to see here yet</h6>
      <h3>When someone mentions you, you'll find it here</h3>
    </div>
  );
}
export default MentionNotifications;
