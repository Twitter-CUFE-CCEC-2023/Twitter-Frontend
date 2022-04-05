import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";

import FilterDates from "./FilterDates";
import FilterGender from "./FilterGender";
import FilterRegion from "./FilterRegion";
import classes from "./Filters.module.css";
import BootstrapButton from "../BootstrapButton";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

function Filters() {
  const [fromdate, setFromDate] = useState(new Date());
  const [todate, setToDate] = useState(new Date());
  const [gender, setGender] = useState("male");
  const [regions, setRegions] = useState([]);

  const [submitFilters, setSubmitFilters] = useState(false);

  const handleFromDateChange = (value) => {
    setFromDate(value);
  };
  const handleToDateChange = (value) => {
    setToDate(value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleRegionsChange = (event) => {
    setRegions(event.target.value);
  };

  const handleSubmissiom = () => {
    window.localStorage.setItem(`filter-From-date`, fromdate);
    window.localStorage.setItem(`filter-To-date`, todate);
    window.localStorage.setItem(`filter-gender`, gender);
    window.localStorage.setItem(`filter-regions`, regions);
    setSubmitFilters(true);
  };

  const handleClearFilters = () => {
    setFromDate(new Date());
    setToDate(new Date());
    setGender("male");
    setRegions([]);
    setSubmitFilters(false);
    window.localStorage.removeItem(`filter-To-date`);
    window.localStorage.removeItem(`filter-From-date`);
    window.localStorage.removeItem(`filter-gender`);
    window.localStorage.removeItem(`filter-regions`);
  };

  return (
    <Paper className={classes.container}>
      <h1 className={classes.instructions}>
        Please select the filters you want to apply
      </h1>
      <div className={classes.filtersWrapper}>
        <FilterDates
          label="From"
          date={fromdate}
          handleChange={handleFromDateChange}
        />
        <FilterDates
          label="To"
          date={todate}
          handleChange={handleToDateChange}
        />
        <FilterGender gender={gender} handleChange={handleGenderChange} />
        <FilterRegion regions={regions} handleChange={handleRegionsChange} />
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

// when you want to use the state after updating use it inside useEffect
// because:
// React useState does not make changes directly to the state object
// But it create queues for React core to update the state object of a React component
// date.toLocaleDateString()
