import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";

import AdminStyles from "../AdminStyles";
import AdminHeader from "../AdminComponents/AdminHeader";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import BackgroundPaper from "../BackgroundPaper";
import ShowHide from "./Charts/ShowHide";
import axios from "../../axios";
import LoadingSpinner from "../AdminComponents/LoadingSpinner";

import classess from "./CommunStyles.module.css";

const Tweets = () => {
  const classes = AdminStyles();
  const [total, setTotal] = useState();
  const [avg, setAvg] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let request = {
      start_date: localStorage.getItem(`filter-From-date`),
      end_date: localStorage.getItem(`filter-To-date`),
    };

    if (
      localStorage.getItem(`filter-gender`) !== "" &&
      localStorage.getItem(`filter-gender`) !== "All"
    ) {
      request["gender"] = localStorage.getItem("filter-gender");
    }

    if (localStorage.getItem(`filter-regions`).length !== 0) {
      request["location"] = localStorage.getItem("filter-regions");
    }

    axios
      .post("/dashboard/tweets", request, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          // console.log(response.data);
          setTotal(response.data.count);
          const avg = response.data.avgPerDay
            ? response.data.avgPerDay.toFixed(3)
            : 0;
          setAvg(avg);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        // console.log(err);
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
          {isLoading && <LoadingSpinner />}
          {!isLoading && <ShowHide dataPie={data_Pie} dataBar={data_Bar} />}
        </BackgroundPaper>
      </main>
    </div>
  );
};

export default Tweets;
