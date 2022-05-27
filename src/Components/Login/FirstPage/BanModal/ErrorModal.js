import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import BootstrapButton from "./BootstrapButton";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ErrorModal(props) {
  const classes = useStyles();

  const handleCloseModal = () => {
    props.setOpenModalValue(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <p
              id="transition-modal-description"
              style={{
                fontSize: "150%",
                textAlign: "center",
              }}
            >
              This feature is under construction
            </p>
            But you can check our website by using the following user
            credentials <br /> <br />
            Email: wolejey861@chokxus.com <br />
            Password: 12345678
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <BootstrapButton
                variant="contained"
                color="primary"
                disableRipple
                onClick={handleCloseModal}
              >
                OK
              </BootstrapButton>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
