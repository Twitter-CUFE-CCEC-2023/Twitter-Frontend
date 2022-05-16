import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

import classess from "./UsersTable.module.css";
import LoadingSpinner from "../../AdminComponents/LoadingSpinner";
import Header from "./Rows/Header";
import UserRow from "./Rows/UserRow";
import TablePaginationActions from "./TablePaginationActions";
import axios from "../../../axios";

const UsersTable = () => {
  const rowsPerPage = 10;

  const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalNumberUsers, setTotalNumberUsers] = useState(0);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noUsers, setNoUsers] = useState(false);
  const [error, setError] = useState(false);

  const requestUsers = (newPage) => {
    let requestFilters = {
      // access_token: localStorage.getItem("token"),
      count: rowsPerPage,
      page: newPage + 1,
    };

    if (
      localStorage.getItem(`filter-gender`) !== "" &&
      localStorage.getItem(`filter-gender`) !== "All"
    ) {
      requestFilters["gender"] = localStorage.getItem("filter-gender");
    }

    if (localStorage.getItem(`filter-regions`).length !== 0) {
      requestFilters["location"] = localStorage.getItem("filter-regions");
    }

    // console.log("Sending request", requestFilters);
    axios
      .post("/dashboard/users", requestFilters, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          if (response.data.user.length === 0) {
            setNoUsers(true);
          }
          setUsers(response.data.user);
          setTotalNumberUsers(response.data.count);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
        // console.log(err);
        // props.handleLoadingfn(false);
        // if (err.response.status === 401) {
        //   props.handleLoginClickfn(false);
        // }
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setIsLoading(true);
    setError(false)
    requestUsers(newPage);
  };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(event.target.value);
  //   setPage(1);
  // };

  useEffect(() => {
    setIsLoading(true);
    setError(false)
    requestUsers(0);
  }, []);

  return (
    <Paper className={classess.paper}>
      {!noUsers && !error && (
        <TableContainer className={classess.container}>
          {isLoading && (
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <LoadingSpinner />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}

          {!isLoading && (
            <Table
              stickyHeader
              aria-label="collapsible table"
              className={classess.table}
            >
              <Header />
              <TableBody>
                {users.map((row, index) => {
                  return <UserRow key={index} row={row} id={index} />;
                })}
                {/* {(rowsPerPage > 0
                ? users.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : users
              ).map((row, index) => {
                return <UserRow key={index} row={row} id={index} />;
              })} */}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      )}
      {!noUsers && !error && (
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={totalNumberUsers}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      )}
      {noUsers && !error && (
        <div
          className={classess.container}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>No Users Found</h1>
        </div>
      )}
      {error && (
        <div
          className={classess.container}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: "0% 12%" }}>An Error Occured, Please Try Again Later.</h2>
        </div>
      )}
    </Paper>
  );
};

export default UsersTable;
