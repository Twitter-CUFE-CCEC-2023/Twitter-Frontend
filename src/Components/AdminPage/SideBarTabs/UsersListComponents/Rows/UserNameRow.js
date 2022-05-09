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
import UnBanModal from "../Modal/UnBanModal";

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

  const [ban, setBan] = useState(props.ban);
  const [openModalBan, setOpenModalBan] = useState(false);
  const [openModalUnban, setOpenModalUnban] = useState(false);

  const closeModalBan = (value) => {
    setTimeout(() => {
      setOpenModalBan(value);
    }, 100);
  };

  const closeModalUnban = (value) => {
    setTimeout(() => {
      setOpenModalUnban(value);
    }, 100);
  };

  const handleBanModal = () => {
    if (!ban) {
      setOpenModalBan(true);
    } else {
      setOpenModalUnban(true);
    }
  };

  const handleBanSuccess = (val) => {
    setTimeout(() => {
      setBan(val);
      setOpenModalBan(false);
      setOpenModalUnban(false);
    }, 1000);
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
          {!ban && <span>ban</span>}
          {ban && <span>unban</span>}
          {openModalBan && !ban && (
            <BanModal
              setOpenModalValue={closeModalBan}
              open={openModalBan}
              userId={props.userId}
              handleBanSuccessFn={handleBanSuccess}
            />
          )}
          {openModalUnban && ban && (
            <UnBanModal
              setOpenModalValue={closeModalUnban}
              open={openModalUnban}
              userId={props.userId}
              handleBanSuccessFn={handleBanSuccess}
            />
          )}
        </BootstrapButton>
      </TableCell>
    </TableRow>
  );
};

export default UserNameRow;
