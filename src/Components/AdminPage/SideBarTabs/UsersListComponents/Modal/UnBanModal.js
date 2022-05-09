import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import BootstrapButton from "../../../BootstrapButton";
import axios from "../../../../axios";

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

export default function UnBanModal(props) {
  const classes = useStyles();
  const [submitButton, setSubmitButton] = useState("OK");
  const [error, setError] = useState(false);

  const handleCloseModal = () => {
    props.setOpenModalValue(false);
  };

  const handleUnban = () => {
    let unbanRequest = {
      accessToken: localStorage.getItem("token"),
      userId: props.userId,
    };
    setSubmitButton("OK ...");
    axios
      .post("/dashboard/unban", unbanRequest, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.status === 200) {
          setSubmitButton("Done");
          props.handleBanSuccessFn(false);
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
            setSubmitButton("OK");
          }, 3000);
        }
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
          setSubmitButton("OK");
        }, 3000);
      });
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
                marginTop: "30px",
                fontSize: "150%",
                textAlign: "center",
              }}
            >
              Are you sure you want to unban ?
            </p>
            <div style={{ marginTop: "30px", textAlign: "center" }}>
              <BootstrapButton
                variant="contained"
                color="primary"
                disableRipple
                onClick={handleUnban}
              >
                {submitButton}
              </BootstrapButton>{" "}
              <BootstrapButton
                variant="contained"
                color="primary"
                disableRipple
                onClick={handleCloseModal}
              >
                Close
              </BootstrapButton>
            </div>
            {error && (
              <p
                id="transition-modal-description"
                style={{
                  marginTop: "30px",
                  fontSize: "100%",
                  textAlign: "center",
                }}
              >
                An Error Occured, Please Try Again
              </p>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
