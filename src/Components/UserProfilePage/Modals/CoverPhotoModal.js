import React, { Fragment, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

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
          open===true ? classes.coverPhotoModalOpened : classes.coverPhotoModalClosed
        }`}
      >
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
