import React, { Fragment } from "react";
import classes from './CoverPhoto.module.css'

function CoverPhoto(props) {
  return (
    <Fragment>
      <div className={`${classes.coverImageContainer}`}>
      <img className={`${classes.image} img-fluid`} src={props.coverImage} alt="" />
      </div>
    </Fragment>
  );
}

export default CoverPhoto;
