import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import InputField from "./InputField";
import FilterDates from "../../../Filters/FilterDates";
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

const BlueCheckbox = withStyles({
  root: {
    color: "#3F51B5",
    "&$checked": {
      color: "#3b4fbf",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function BanModel(props) {
  const classes = useStyles();
  const [todate, setToDate] = useState(new Date());
  const [reason, setReason] = useState("");
  const [banForever, setBanForever] = useState(false);
  const [alert, setAlert] = useState(false);
  const [submitButton, setSubmitButton] = useState("Submit");
  const [error, setError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleToDateChange = (value) => {
    setToDate(value);
  };

  const handleBanForever = () => {
    setBanForever(!banForever);
  };

  const handleReason = (value) => {
    setReason(value);
  };

  const handleCloseModal = () => {
    props.setOpenModalValue(false);
  };

  const handleBan = () => {
    if (reason.length === 0 || (banForever === false && todate === null)) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      const today = new Date();
      if (!banForever && today >= todate) {
        setDateError(true);
        setTimeout(() => {
          setDateError(false);
        }, 3000);
        return;
      }

      let banRequest = {
        accessToken: localStorage.getItem("token"),
        userId: props.userId,
        reason: reason,
        banDuration: todate,
        isPermanent: banForever,
      };
      // console.log(banRequest)
      setSubmitButton("Submitting");
      axios
        .post("/dashboard/ban", banRequest, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          // console.log(response)
          if (response.status === 200) {
            setSubmitButton("Submited");
            props.handleBanSuccessFn(true);
          } else {
            setSubmitButton("Error");
          }
        })
        .catch((err) => {
          // console.log(err)
          setError(true);
          setTimeout(() => {
            setError(false);
            setSubmitButton("Submit");
            setReason("");
            setToDate(new Date());
          }, 3000);
        });
    }
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
            <h2 id="transition-modal-title">Banning</h2>
            <div style={{ marginTop: "20px" }}>
              <InputField
                label="Reason"
                disable={false}
                maxLength={100}
                passData={handleReason}
                value={reason}
              />
            </div>
            {!banForever && (
              <div style={{ marginTop: "20px" }}>
                <FilterDates
                  label="To"
                  date={todate}
                  handleChange={handleToDateChange}
                />
              </div>
            )}
            <div style={{ marginTop: "10px" }}>
              <FormControlLabel
                control={
                  <BlueCheckbox
                    checked={banForever}
                    onChange={handleBanForever}
                    name="banForever"
                  />
                }
                label="Ban Forever"
              />
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <BootstrapButton
                variant="contained"
                color="primary"
                disableRipple
                onClick={handleBan}
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
            {alert && (
              <p
                id="transition-modal-description"
                style={{
                  marginTop: "30px",
                  fontSize: "100%",
                  textAlign: "center",
                }}
              >
                Please enter a reason and/or to date first
              </p>
            )}
            {dateError && (
              <p
                id="transition-modal-description"
                style={{
                  marginTop: "30px",
                  fontSize: "100%",
                  textAlign: "center",
                }}
              >
                ToDate can't be before/equal today
              </p>
            )}
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
