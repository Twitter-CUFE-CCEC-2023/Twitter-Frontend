import React, { useContext } from "react";
import classes from "./AccountButton.module.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DoneIcon from "@material-ui/icons/Done";

import LogoutModal from "./LogoutModal";

import DefaultProfilePic from "../../../Assets/DefaultProfilePic.jpg";

/**
 * The bottom left button used to open the list to logout
 */
function AccountButton() {
  let loggedUser = JSON.parse(localStorage.getItem("UserInfo"));
  loggedUser.profile_image_url = loggedUser.profile_image_url ? loggedUser.profile_image_url : DefaultProfilePic;
  const [hidden, setHidden] = React.useState(true);
  const [showLogout, setShowLogout] = React.useState(false);

  document.body.addEventListener("click", hide, true);

  function hide(event) {
    var isClickInsideElement;

    let elements = document.getElementsByName("accountListItem");
    for (var i = 0; i < elements.length; i++) {
      isClickInsideElement = elements[i].contains(event.target);
      if (isClickInsideElement) {
        return;
      }
    }
    setHidden(true);
  }

  return (
    <div>
      <div
        className={`${classes.flex} ${classes.accountButton}`}
        onClick={() => setHidden((prev) => !prev)}
      >

        <img
          src={loggedUser.profile_image_url}
          className={classes.profilePic}
        />
        <div className={classes.info}>
          <p className={classes.name}>{loggedUser.name}</p>
          <p className={classes.username}>@{loggedUser.username}</p>
        </div>
        <div className={classes.more}>
          <MoreHorizIcon />
        </div>
      </div>
      <div className={`${classes.list} ${hidden && classes.hidden}`}>
        <div
          name="accountListItem"
          className={`${classes.flex} ${classes.listHeader}`}
        >
          <img
            src={loggedUser.profile_image_url}
            className={classes.profilePic}
          />
          <div>
            <p className={classes.name}>{loggedUser.name}</p>
            <p className={classes.username}>@{loggedUser.username}</p>
          </div>
          <div className={classes.done}>
            <DoneIcon />
          </div>
        </div>
        <p name="accountListItem" className={classes.listItem}>
          Add an existing account
        </p>
        <p name="accountListItem" className={classes.listItem} onClick={() => setShowLogout(true)}>
          Log out @{loggedUser.username}
        </p>
      </div>
      {showLogout && <LogoutModal setShowLogout = {setShowLogout}/>}
    </div>
  );
}

export default AccountButton;
