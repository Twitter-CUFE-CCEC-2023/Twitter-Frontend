import React from "react";
import classes from "./MentionNotifications.module.css";
import NotificationsNavBar from "./NotificationsNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
function MentionNotifications() {
  return (
    <div className={classes.notes}>
      <NotificationsNavBar selected={false} />
      <div className="row mt-4">
        <div className="col-12">
          <h6>Nothing to see here yet</h6>
        </div>
        <div className="col-12">
          <h3>When someone mentions you, you'll find it here</h3>
        </div>
      </div>
    </div>
  );
}
export default MentionNotifications;
