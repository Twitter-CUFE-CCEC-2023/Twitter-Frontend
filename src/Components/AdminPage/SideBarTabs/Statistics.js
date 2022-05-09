import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";

import AdminStyles from "../AdminStyles";
import AdminHeader from "../AdminComponents/AdminHeader";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import BackgroundPaper from "../BackgroundPaper";
import ShowHide from "./Charts/ShowHide";
import axios from "../../axios";

import classess from "./CommunStyles.module.css";

// const data_Bar = [
//   {
//     name: "Likes",
//     AveragePerDay: 2400,
//     TotalNumber: 5000,
//   },
//   {
//     name: "Tweets",
//     AveragePerDay: 1398,
//     TotalNumber: 3000,
//   },
//   {
//     name: "Retweets",
//     AveragePerDay: 8,
//     TotalNumber: 2000,
//   },
// ];
// const data_Pie = [
//   { name: "Avg Likes", value: 2400 },
//   { name: "Avg Tweets", value: 1398 },
//   { name: "Avg Retweets", value: 500 },
//   { name: "Total Likes", value: 5000 },
//   { name: "Total Tweets", value: 3000 },
//   { name: "Total Retweets", value: 2000 },
// ];

const Statistics = () => {
  const classes = AdminStyles();
  const [totalLikes, setTotalLikes] = useState();
  const [avgLikes, setAvgLikes] = useState();
  const [totalTweets, setTotalTweets] = useState();
  const [avgTweets, setAvgTweets] = useState();
  const [totalRetweets, setotalRetweets] = useState();
  const [avgRetweets, setAvgRetweets] = useState();

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

    // Likes request
    axios
      .get("/dashboard/likes", request, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setTotalLikes(response.data.count);
          setAvgLikes(response.data.avgPerDay.toFixed(3));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Tweets request
    axios
      .get("/dashboard/tweets", request, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setTotalTweets(response.data.count);
          setAvgTweets(response.data.avgPerDay.toFixed(3));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Retweets request
    axios
      .get("/dashboard/retweets", request, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setotalRetweets(response.data.count);
          setAvgRetweets(response.data.avgPerDay.toFixed(3));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data_Bar = [
    {
      name: "Likes",
      AveragePerDay: avgLikes,
      TotalNumber: totalLikes,
    },
    {
      name: "Tweets",
      AveragePerDay: avgTweets,
      TotalNumber: totalTweets,
    },
    {
      name: "Retweets",
      AveragePerDay: avgRetweets,
      TotalNumber: totalRetweets,
    },
  ];

  const data_Pie = [
    { name: "Avg Likes", value: avgLikes * 1 },
    { name: "Avg Tweets", value: avgTweets * 1 },
    { name: "Avg Retweets", value: avgRetweets * 1 },
    { name: "Total Likes", value: totalLikes },
    { name: "Total Tweets", value: totalTweets },
    { name: "Total Retweets", value: totalRetweets },
  ];

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <BackgroundPaper>
          <h1 className={classess.header}>Statistics</h1>
          <ShowHide dataPie={data_Pie} dataBar={data_Bar} />
        </BackgroundPaper>
      </main>
    </div>
  );
};

export default Statistics;
