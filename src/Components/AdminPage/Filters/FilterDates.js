import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

function FilterDates(props) {
  const [date, setDate] = useState(new Date());

  // when you want to use the state after updating use it inside useEffect
  // because:
  // React useState does not make changes directly to the state object
  // But it create queues for React core to update the state object of a React component
  // date.toLocaleDateString()

  // useEffect(() => {
  //   setDate(props.date);
  // }, [props.date]);

  useEffect(() => {
    window.localStorage.setItem(
      `filter-${props.label}-date`,
      JSON.stringify(date)
    );
  }, [date, props.date]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={props.label}
          // value={window.localStorage.getItem(`filter-${props.label}-date`)}
          value={date}
          minDate={new Date("2016-01-01")}
          maxDate={new Date("2025-12-31")}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default FilterDates;
