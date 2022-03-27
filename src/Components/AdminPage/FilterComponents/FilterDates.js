import React from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

function FilterDates() {
  const [valueDate, setValueDate] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="From"
        value={valueDate}
        minDate={new Date("2017-01-01")}
        onChange={(newValue) => {
          setValueDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />{" "}
      <DesktopDatePicker
        label="To"
        value={valueDate}
        minDate={new Date("2017-01-01")}
        onChange={(newValue) => {
          setValueDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default FilterDates;
