import React, { useState } from "react";
import classes from "./ButtonSignUp.module.css";
// import { NavLink } from "react-router-dom";
import ErrorModal from "../FirstPage/BanModal/ErrorModal";

const ButtonSignUp = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleOpenModal = (val) => {
    setOpen(val);
  };

  return (
    <div className={classes.container}>
      {/* <NavLink to="/Mail" className={classes.navLink}> */}
      <div className={classes.buttonSignUp} onClick={handleClick}>
        <p className={classes.content}>Sign up with a phone number or email</p>
      </div>
      {/* </NavLink> */}
      {open && <ErrorModal open={open} setOpenModalValue={handleOpenModal} />}
    </div>
  );
};

export default ButtonSignUp;
