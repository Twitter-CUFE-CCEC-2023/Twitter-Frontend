import React, { Fragment, useEffect, useRef } from "react";
import CloseIcon from '@mui/icons-material/Close';

import classes from "./CoverPhotoModal.module.css";

function CoverPhotoModal(props) {
  const [open, setOpen] = React.useState(props.isOpen);
  console.log("CoverPhotoModal open", props.isOpen);


  return (
    <Fragment>
      <div
      onClick={() => {
        props.handleClose();
        setOpen(false);
      }}
        className={`${
          props.isOpen===true ? classes.coverPhotoModalOpened : classes.coverPhotoModalClosed
        }`}
      >
        <CloseIcon className={`${classes.closeIcon}`}/>
        <div
          className={classes.coverPhotoModalContent}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img src={props.coverPic} className={classes.openedCoverPic} alt="" />
        </div>
      </div>
    </Fragment>
  );
}

export default CoverPhotoModal;
