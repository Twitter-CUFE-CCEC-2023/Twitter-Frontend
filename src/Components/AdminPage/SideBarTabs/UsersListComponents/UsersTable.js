import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

import classess from "./UsersTable.module.css";
import LoadingSpinner from "../../../ExtraPages/LoadingSpinner";
import Header from "./Rows/Header";
import UserRow from "./Rows/UserRow";
import TablePaginationActions from "./TablePaginationActions";
import axios from "../../../axios";

const UsersTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    let requestFilters = {
      access_token: localStorage.getItem("token"),
      // location_filter: localStorage.getItem(`filter-gender`),
    };

    axios
      .get("/dashboard/users", requestFilters, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.statusText === "OK") {
          setUsers(response.data.user);
          console.log(response.data.user);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        // props.handleLoadingfn(false);
        // if (err.response.status === 401) {
        //   props.handleLoginClickfn(false);
        // }
      });
  }, []);

  return (
    <Paper className={classess.paper}>
      <TableContainer className={classess.container}>
        {isLoading && (
          <TableBody>
            <LoadingSpinner className={classess.spinner} />
          </TableBody>
        )}

        {!isLoading && (
          <Table
            stickyHeader
            aria-label="collapsible table"
            className={classess.table}
          >
            <Header />
            <TableBody>
              {(rowsPerPage > 0
                ? users.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : users
              ).map((row, index) => {
                return <UserRow key={index} row={row} id={index} />;
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </Paper>
  );
};

export default UsersTable;
