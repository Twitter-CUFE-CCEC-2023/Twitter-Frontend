import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import BootstrapButton from "../../BootstrapButton";

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

  const handleBan = () => {
    setBan(!ban);
  };

  return (
    <TableRow className={`${classes.root} ${props.class}`}>
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
        {props.name}
      </TableCell>
      <TableCell align="right">
        <BootstrapButton
          variant="contained"
          color="primary"
          disableRipple
          className={classes.margin}
          onClick={handleBan}
        >
          {!ban && <span>ban</span>}
          {ban && <span>unban</span>}
        </BootstrapButton>
      </TableCell>
    </TableRow>
  );
};

export default UserNameRow;