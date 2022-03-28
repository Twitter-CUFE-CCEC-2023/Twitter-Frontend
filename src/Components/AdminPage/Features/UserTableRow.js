import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import BootstrapButton from "../BootstrapButton";
import classess from "./UserTableRow.module.css";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const UserTableRow = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const [ban, setBan] = useState(false);

  const handleBan = () => {
    setBan(!ban);
  };

  return (
    <React.Fragment>
      <TableRow className={`${classes.root} ${props.class}`}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
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

      <TableRow className={classess.detailsBackground}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Phone</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Account Creation Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key="1">
                    <TableCell component="th" scope="row">
                      {row.phone}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.accountCreation}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default UserTableRow;
