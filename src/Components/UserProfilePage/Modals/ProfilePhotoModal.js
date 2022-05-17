import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

import classes from "./ProfilePhotoModal.module.css";
import { DialogContent } from "@mui/material";

const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   boxShadow: 0,
//   border: '0px dashed grey' 
p:0
};
function ProfilePhotoModal(props) {
  const handleClose = () => {
    props.handleProfilePhotoOpenAndClose();
  };
  return (
    <Fragment>
      <Dialog
        open={props.isOpen}
        onClose={handleClose}
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
      >
        <DialogContent className={classes.profilePicDialog}>
            {/* sx={{backgroundImage: "black"}} */}
            {/* style={{backgroundImage: "black"}} */}
            <div className={classes.imageBox}>
              <img
                src={props.profilePic}
                className={classes.openedProfilePic}
                alt=""
              />
            </div>
        </DialogContent>
      
      </Dialog>
    </Fragment>
  );
}

export default ProfilePhotoModal;
