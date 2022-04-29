import React from "react";
import classes from "./NotificationsNavBar.module.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "bootstrap/dist/css/bootstrap.min.css";
function NotificationsNavBar(props) {
  return (
    <div className="">
      <div className="row">
        <div className="col-8 text-left">
          <h2 className={classes.notificationsHeader}>Notifications</h2>
        </div>
        <div className="col-4 text-right">
          <a href="/settings">
            <SettingsOutlinedIcon className={classes.setIcon} />
          </a>
        </div>
      </div>
      <div className="row">
        <div className={`${classes.selectedcol} col-6 text-center`}>
          <a
            href="/notifications"
            className={`${classes.notebutton} ${
              props.selected && classes.selected
            } `}
          >
            All
          </a>
        </div>
        <div className={`${classes.selectedcol} col-6 text-center`}>
          <a
            href="/mentionnotifications"
            className={`${classes.notebutton} ${
              !props.selected && classes.selected
            } `}
          >
            Mentions
          </a>
        </div>
      </div>
    </div>
  );
}
export default NotificationsNavBar;
