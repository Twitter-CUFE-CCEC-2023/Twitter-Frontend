import React from "react";
import classes from "./AllNotifications.module.css";
import NotificationsNavBar from "./NotificationsNavBar";
import SingleNotification from "./SingleNotification";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutorenewIcon from "@mui/icons-material/Autorenew";
function AllNotifications() {
  return (
    <div className={classes.notes}>
      <NotificationsNavBar selected={true} />
      <SingleNotification Icon={FavoriteIcon} type="like" />
    </div>
  );
}
export default AllNotifications;
