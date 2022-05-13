import React, { useEffect, useState } from "react";

import FilterDates from "./FilterDates";
import FilterGender from "./FilterGender";
import FilterRegion from "./FilterRegion";
import BackgroundPaper from "../BackgroundPaper";
import classes from "./Filters.module.css";
import BootstrapButton from "../BootstrapButton";
import ErrorModal from "../AdminComponents/ErrorModal";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

function Filters() {
  const [fromdate, setFromDate] = useState(new Date());
  const [todate, setToDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [regions, setRegions] = useState([]);
  const [dateError, setDateError] = useState(false);

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

  const closeErrorModal = (value) => {
    setTimeout(() => {
      setDateError(value);
    }, 100);
  };

  const handleSubmissiom = () => {
    localStorage.setItem(`filter-gender`, gender);
    localStorage.setItem(`filter-regions`, regions);
    // console.log(localStorage.getItem(`filter-From-date`));
    // console.log(localStorage.getItem(`filter-To-date`));
    // console.log(fromdate > todate);
    // console.log(fromdate);
    // console.log(todate);

    // const from = fromdate.toLocaleString("en-US", { timeZone: "Africa/Cairo" });
    // const to = todate.toLocaleString("en-US", { timeZone: "Africa/Cairo" });
    // console.log(from);
    // console.log(to);
    // console.log(from > to);
    // console.log(fromdate > todate);

    if (fromdate > todate) {
      setDateError(true);
      return;
    }
    localStorage.setItem(`filter-From-date`, fromdate);
    localStorage.setItem(`filter-To-date`, todate);
    setSubmitFilters(true);
    setTimeout(() => {
      setSubmitFilters(false);
    }, 2000);
  };

  const handleClearFilters = () => {
    setFromDate(new Date());
    setToDate(new Date());
    setGender("");
    setRegions([]);
    setSubmitFilters(false);
    localStorage.setItem(`filter-From-date`, new Date());
    localStorage.setItem(`filter-To-date`, new Date());
    localStorage.setItem(`filter-gender`, "All");
    localStorage.setItem(`filter-regions`, []);
  };

  useEffect(() => {
    localStorage.setItem(`filter-From-date`, fromdate);
    localStorage.setItem(`filter-To-date`, todate);
    localStorage.setItem(`filter-gender`, gender);
    localStorage.setItem(`filter-regions`, regions);
  }, []);

  return (
    <BackgroundPaper>
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
        <div className={classes.clearFiltersButton}>
          <BootstrapButton
            variant="contained"
            color="primary"
            disableRipple
            onClick={handleClearFilters}
          >
            Clear filters
          </BootstrapButton>
        </div>
        <div className={classes.submitButton}>
          <BootstrapButton
            variant="contained"
            color="primary"
            data-testid="submitButton"
            disableRipple
            onClick={handleSubmissiom}
          >
            {!submitFilters && "Submit"}
            {submitFilters && "Submited"}
            {submitFilters && <CheckRoundedIcon />}
          </BootstrapButton>
        </div>
      </div>
      {dateError && (
        <ErrorModal
          message="End-date can't be before Start-date"
          open={dateError}
          setOpenModalValue={closeErrorModal}
        />
      )}
    </BackgroundPaper>
  );
}

export default Filters;

// when you want to use the state after updating use it inside useEffect
// because:
// React useState does not make changes directly to the state object
// But it create queues for React core to update the state object of a React component
// date.toLocaleDateString()
