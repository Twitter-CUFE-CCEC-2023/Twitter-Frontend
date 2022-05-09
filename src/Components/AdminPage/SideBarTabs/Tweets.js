import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";

import AdminStyles from "../AdminStyles";
import AdminHeader from "../AdminComponents/AdminHeader";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import BackgroundPaper from "../BackgroundPaper";
import ShowHide from "./Charts/ShowHide";
import axios from "../../axios";

import classess from "./CommunStyles.module.css";

const Tweets = () => {
  const classes = AdminStyles();
  const [total, setTotal] = useState();
  const [avg, setAvg] = useState();

  useEffect(() => {
    let request;
    if (localStorage.getItem(`filter-regions`).length === 0) {
      request = {
        start_date: localStorage.getItem(`filter-From-date`),
        end_date: localStorage.getItem(`filter-To-date`),
        gender: localStorage.getItem(`filter-gender`),
      };
    } else {
      request = {
        start_date: localStorage.getItem(`filter-From-date`),
        end_date: localStorage.getItem(`filter-To-date`),
        gender: localStorage.getItem(`filter-gender`),
        location: localStorage.getItem(`filter-regions`),
      };
    }

    axios
      .get("/dashboard/tweets", request, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setTotal(response.data.count);
          setAvg(response.data.avgPerDay.toFixed(3));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data_Bar = [
    {
      name: "Tweets",
      AveragePerDay: avg,
      TotalNumber: total,
    },
  ];

  const data_Pie = [
    { name: "Total Tweets", value: total },
    { name: "Avg Tweets", value: avg * 1 },
  ];

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <BackgroundPaper>
          <h1 className={classess.header}>Tweets</h1>
          <ShowHide dataPie={data_Pie} dataBar={data_Bar} />
        </BackgroundPaper>
      </main>
    </div>
  );
};

export default Tweets;
