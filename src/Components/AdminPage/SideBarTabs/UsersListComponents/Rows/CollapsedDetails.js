import React, { useEffect, useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import classess from "./CollapsedDetails.module.css";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const CollapsedDetails = (props) => {
  const [age, setAge] = useState(0);
  const [accountCreaction, setAccountCreaction] = useState();

  useEffect(() => {
    const birthdate = new Date(props.user.birth_date);
    const diff_ms = Date.now() - birthdate.getTime();
    const age_dt = new Date(diff_ms);
    const calculatedAge = Math.abs(age_dt.getUTCFullYear() - 1970);
    setAge(calculatedAge);

    const createdAt = new Date(props.user.createdAt);
    setAccountCreaction(createdAt.toLocaleDateString());
  }, [props.user.birth_date, props.user.createdAt]);

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={props.open} timeout="auto" unmountOnExit>
          <Typography variant="h6" gutterBottom component="div">
            Details
          </Typography>

          <Paper elevation={3} className={classess.paper}>
            <TableContainer style={{ marginBottom: "10px" }}>
              <Table aria-label="simple table">
                <TableBody>
                  <StyledTableRow key={"Username"}>
                    <TableCell component="th" scope="row">
                      Username
                    </TableCell>
                    <TableCell align="left">{props.user.username}</TableCell>
                  </StyledTableRow>

                  <StyledTableRow key={"Email"}>
                    <TableCell component="th" scope="row">
                      Email
                    </TableCell>
                    <TableCell align="left">{props.user.email}</TableCell>
                  </StyledTableRow>

                  <StyledTableRow key={"location"}>
                    <TableCell component="th" scope="row">
                      Location
                    </TableCell>
                    <TableCell align="left">
                      {props.user.location
                        ? props.user.location
                        : "None provided"}
                    </TableCell>
                  </StyledTableRow>

                  <StyledTableRow key={"Gender"}>
                    <TableCell component="th" scope="row">
                      Gender
                    </TableCell>
                    <TableCell align="left">{props.user.gender}</TableCell>
                  </StyledTableRow>

                  <StyledTableRow key={"Age"}>
                    <TableCell component="th" scope="row">
                      Age
                    </TableCell>
                    <TableCell align="left">{age}</TableCell>
                  </StyledTableRow>

                  <StyledTableRow key={"Account Creation Date"}>
                    <TableCell component="th" scope="row">
                      Account Creation Date
                    </TableCell>
                    <TableCell align="left">{accountCreaction}</TableCell>
                  </StyledTableRow>

                  <StyledTableRow key={"Number of Followers"}>
                    <TableCell component="th" scope="row">
                      Number of Followers
                    </TableCell>
                    <TableCell align="left">
                      {props.user.followers ? props.user.followers.length : 0}
                    </TableCell>
                  </StyledTableRow>

                  <StyledTableRow key={"Number of Followings"}>
                    <TableCell component="th" scope="row">
                      Number of Followings
                    </TableCell>
                    <TableCell align="left">
                      {props.user.followings ? props.user.followings.length : 0}
                    </TableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapsedDetails;

{
  /* <Box margin={2}>
  <Typography variant="h6" gutterBottom component="div">
    Details
  </Typography>

  <Table size="small" aria-label="purchases">
    <TableHead>
      <TableRow>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Country</TableCell>
        <TableCell>Gender</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Account Creation Date</TableCell>
        <TableCell>Number of Followers</TableCell>
        <TableCell>Number of Followings</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow key="1">
        <TableCell component="th" scope="row">
          {props.user.username}
        </TableCell>
        <TableCell>{props.user.email}</TableCell>
        <TableCell>
          {props.user.country ? props.user.country : "None provided"}
        </TableCell>
        <TableCell>{props.user.gender}</TableCell>
        <TableCell>{age}</TableCell>
        <TableCell>{accountCreaction}</TableCell>
        <TableCell>
          {props.user.followers ? props.user.followers.length : 0}
        </TableCell>
        <TableCell>
          {props.user.followings ? props.user.followings.length : 0}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</Box>; */
}
