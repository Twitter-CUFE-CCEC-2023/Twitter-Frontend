import React, { useEffect, useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";

import AdminStyles from "../AdminStyles";
import AdminHeader from "../AdminComponents/AdminHeader";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import BackgroundPaper from "../BackgroundPaper";
import ShowHide from "./Charts/ShowHide";
import axios from "../../axios";
import LoadingSpinner from "../AdminComponents/LoadingSpinner";

import classess from "./CommunStyles.module.css";

const Likes = () => {
  const classes = AdminStyles();
  const [total, setTotal] = useState();
  const [avg, setAvg] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let likesRequest;
    if (localStorage.getItem(`filter-regions`).length === 0) {
      likesRequest = {
        start_date: localStorage.getItem(`filter-From-date`),
        end_date: localStorage.getItem(`filter-To-date`),
        gender: localStorage.getItem(`filter-gender`),
      };
    } else {
      likesRequest = {
        start_date: localStorage.getItem(`filter-From-date`),
        end_date: localStorage.getItem(`filter-To-date`),
        gender: localStorage.getItem(`filter-gender`),
        location: localStorage.getItem(`filter-regions`),
      };
    }

    axios
      .get("/dashboard/likes", likesRequest, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setTotal(response.data.count);
          setAvg(response.data.avgPerDay.toFixed(3));
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data_Bar = [
    {
      name: "Likes",
      AveragePerDay: avg,
      TotalNumber: total,
    },
  ];

  const data_Pie = [
    { name: "Total Likes", value: total },
    { name: "Avg Likes", value: avg * 1 },
  ];

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <BackgroundPaper>
          <h1 className={classess.header}>Likes</h1>
          {isLoading && <LoadingSpinner />}
          {!isLoading && <ShowHide dataPie={data_Pie} dataBar={data_Bar} />}
        </BackgroundPaper>
      </main>
    </div>
  );
};

export default Likes;
