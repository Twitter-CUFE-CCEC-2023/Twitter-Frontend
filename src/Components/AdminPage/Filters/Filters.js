import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";

import FilterDates from "./FilterDates";
import FilterGender from "./FilterGender";
import FilterRegion from "./FilterRegion";
import classes from "./Filters.module.css";
import BootstrapButton from "../BootstrapButton";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

function Filters() {
  const [clearFilters, setClearFilters] = useState(false);
  const [submitFilters, setSubmitFilters] = useState(false);

  const handleClearFilters = () => {
    setClearFilters(true);
    window.localStorage.setItem(`filter-To-date`, JSON.stringify(new Date()));
    window.localStorage.setItem(`filter-From-date`, JSON.stringify(new Date()));
    window.localStorage.setItem(`filter-gender`, JSON.stringify("male"));
    window.localStorage.setItem(`filter-regions`, JSON.stringify([]));
    setClearFilters(false);
  };

  const handleSubmissiom = () => {
    setSubmitFilters(true);
    console.log("sending fetch request now");
    console.log(window.localStorage.getItem(`filter-To-date`));
    console.log(window.localStorage.getItem(`filter-From-date`));
    console.log(window.localStorage.getItem(`filter-gender`));
    console.log(window.localStorage.getItem(`filter-regions`));
  };

  return (
    <Paper className={classes.container}>
      <h1 className={classes.instructions}>
        Please select the filters you want to apply
      </h1>
      <div className={classes.filtersWrapper}>
        {/* {!clearFilters && <FilterDates label="From" date={new Date()} />}
        {!clearFilters && <FilterDates label="To" date={new Date()} />}
        {!clearFilters && <FilterGender />}
        {!clearFilters && <FilterRegion />} */}

        <FilterDates label="From" date={new Date()} />
        <FilterDates label="To" date={new Date()} />
        <FilterGender />
        <FilterRegion />
      </div>
      <div className={classes.buttonsGroup}>
        <BootstrapButton
          variant="contained"
          color="primary"
          disableRipple
          className={classes.clearFiltersButton}
          onClick={handleClearFilters}
        >
          Clear filters
        </BootstrapButton>{" "}
        <BootstrapButton
          variant="contained"
          color="primary"
          disableRipple
          className={classes.submitButton}
          onClick={handleSubmissiom}
        >
          {!submitFilters && "Submit"}
          {submitFilters && "Submited"}
          {submitFilters && <CheckRoundedIcon />}
        </BootstrapButton>
      </div>
    </Paper>
  );
}

export default Filters;
