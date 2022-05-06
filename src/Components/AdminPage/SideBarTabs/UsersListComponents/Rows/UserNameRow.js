import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Avatar from "@material-ui/core/Avatar";

import BootstrapButton from "../../../BootstrapButton";
import BanModal from "../Modal/BanModal";

const COLORS = [
  "#0088FE",
  "#FFBB28",
  "#00C49F",
  "#5946FA",
  "#FA4145",
  "#C646E3",
  "#FF8042",
];
// const COLORS = ["red", "green", "blue", "violet"];

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const UserNameRow = (props) => {
  const classes = useRowStyles();

  const [ban, setBan] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = (value) => {
    setTimeout(() => {
      setOpenModal(value);
    }, 100);
    // setBan(false);
  };

  const handleBanModal = () => {
    setBan(true);
    setOpenModal(true);
  };

  return (
    <TableRow className={`${classes.root}`}>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={props.handleOpen}
        >
          {props.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        <Avatar
          style={{
            backgroundColor: `${COLORS[props.id % COLORS.length]}`,
            marginRight: "15px",
            display: "inline-grid",
          }}
        >
          {props.name[0].toUpperCase()}
        </Avatar>
        {props.name}
      </TableCell>
      <TableCell align="center">
        <BootstrapButton
          variant="contained"
          color="primary"
          disableRipple
          className={classes.margin}
          onClick={handleBanModal}
        >
          {!props.ban && <span>ban</span>}
          {props.ban && <span>unban</span>}
          {openModal && (
            <BanModal
              setOpenModalValue={closeModal}
              open={openModal}
              userId={props.userId}
            />
          )}
        </BootstrapButton>
      </TableCell>
    </TableRow>
  );
};

export default UserNameRow;
