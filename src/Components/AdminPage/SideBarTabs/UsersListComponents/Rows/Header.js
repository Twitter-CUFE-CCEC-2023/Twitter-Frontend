import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Header = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell />
        <StyledTableCell>
          <PersonRoundedIcon /> User Name
        </StyledTableCell>
        <StyledTableCell />
        <StyledTableCell />
      </TableRow>
    </TableHead>
  );
};

export default Header;
