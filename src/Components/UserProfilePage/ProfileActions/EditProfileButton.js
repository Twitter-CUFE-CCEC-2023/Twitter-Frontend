import React, { Fragment } from "react";
import classes from './EditProfileButton.module.css'

function EditProfileButton() {
  return (
    <Fragment>
      <button className={`${classes.editButton} btn btn-outlined btn-light text-bold p-1 px-3`}>Edit Profile</button>
    </Fragment>
  );
}

export default EditProfileButton;
