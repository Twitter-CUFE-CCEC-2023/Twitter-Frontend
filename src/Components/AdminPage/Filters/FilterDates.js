import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const CustomDesktopDatePicker = withStyles({
  root: {
    // "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline":
    //   {
    //     borderColor: "#3F51B5",
    //   },
    // "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#3F51B5",
    //   backgroundColor: "red",
    // },
    // "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
    //   color: "red",
    //   backgroundColor: "red",
    // },
    "& .css-195y93z-MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
      backgroundColor: "#3F51B5",
    },
  },
})(DesktopDatePicker);

function FilterDates(props) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CustomDesktopDatePicker
          label={props.label}
          value={props.date}
          minDate={new Date("2016-01-01")}
          maxDate={new Date("2025-12-31")}
          onChange={props.handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default FilterDates;
