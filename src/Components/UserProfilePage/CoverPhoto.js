import React, { Fragment } from "react";
import classes from './CoverPhoto.module.css'

function CoverPhoto(props) {
  return (
    <Fragment>
      
      <img className={`${classes.image} img-fluid`} src={props.coverImage} alt="" />
      
    </Fragment>
  );
}

export default CoverPhoto;
