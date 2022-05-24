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

  /**@module AdminPage-UsersTable-TableRow */

  /**
   * @function closeModalBan
   * @name closeModalBan
   * @description Close the Ban modal after a timeout when submitted
   * @param {boolean} value ban value
   */
  const closeModalBan = (value) => {
    setTimeout(() => {
      setOpenModalBan(value);
    }, 100);
  };

  /**
   * @function closeModalUnban
   * @name closeModalUnban
   * @description Close the UnBan modal after a timeout when submitted
   * @param {boolean} value unban value
   */
  const closeModalUnban = (value) => {
    setTimeout(() => {
      setOpenModalUnban(value);
    }, 100);
  };

  /**
   * @function handleBanModal
   * @name handleBanModal
   * @description Handle which modal to be opened (if user banned and the button is clicked => open unban modal)
   */
  const handleBanModal = () => {
    if (!ban) {
      setOpenModalBan(true);
    } else {
      setOpenModalUnban(true);
    }
  };

  /**
   * @function handleBanSuccess
   * @name handleBanSuccess
   * @description Ban the user and close the modal after a timeout
   * @param {boolean} value unban value
   */
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
