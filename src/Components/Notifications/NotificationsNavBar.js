import React from "react";
import classes from "./NotificationsNavBar.module.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "bootstrap/dist/css/bootstrap.min.css";
function NotificationsNavBar(props) {
  return (
    <div className="">
      <div className="row">
        <div className="col-10 text-left">
          <h2 className={classes.notificationsHeader}>Notifications</h2>
        </div>
        <div className="col-2 text-right">
          <a className={classes.setIcon} href="#">
            <SettingsOutlinedIcon />
          </a>
        </div>
      </div>
      <div className="row">
        <a
          href="/notifications"
          className={`${classes.notebutton} ${
            props.selected && classes.selected
          } col`}
        >
          All
        </a>
        <a
          href="/mentionnotifications"
          className={`${classes.notebutton} ${
            !props.selected && classes.selected
          } col`}
        >
          Mentions
        </a>
      </div>
    </div>
  );
}
export default NotificationsNavBar;
