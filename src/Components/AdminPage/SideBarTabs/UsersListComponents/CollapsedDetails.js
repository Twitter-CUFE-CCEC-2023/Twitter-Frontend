import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import classess from "./UserTableRow.module.css";

const CollapsedDetails = (props) => {
  return (
    <TableRow className={classess.detailsBackground}>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={props.open} timeout="auto" unmountOnExit>
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
                    {props.user.phone}
                  </TableCell>
                  <TableCell>{props.user.email}</TableCell>
                  <TableCell>{props.user.country}</TableCell>
                  <TableCell>{props.user.gender}</TableCell>
                  <TableCell>{props.user.age}</TableCell>
                  <TableCell>{props.user.accountCreation}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapsedDetails;
