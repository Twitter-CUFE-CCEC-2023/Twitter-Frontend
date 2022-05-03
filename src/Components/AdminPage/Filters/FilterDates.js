import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const CustomDesktopDatePicker = withStyles({
  root: {
    // "& .MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    //   {
    //     borderColor: "#3F51B5",
    //   },
    // // "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    // //   borderColor: "#3F51B5",
    // //   backgroundColor: "red",
    // // },
    // "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    //   borderColor: "rgb(207, 217, 222)",
    // },
    // "&:hover fieldset": {
    //   backgroundColor: "#3F51B5",
    // },
    // "&.Mui-focused fieldset": {
    //   backgroundColor: "#3F51B5",
    // },
    // "&.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
    //   color: "red",
    //   backgroundColor: "red",
    // },
    // "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
    //   // color: "red",
    //   // backgroundColor: "red",
    //   transform: "translate(14px, 16px) scale(1)",
    // },

    "& .css-195y93z-MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
      backgroundColor: "#3F51B5",
    },
    "& .css-195y93z-MuiButtonBase-root-MuiPickersDay-root.Mui-selected:hover": {
      backgroundColor: "#475ac9",
    },
    "& .css-195y93z-MuiButtonBase-root-MuiPickersDay-root.Mui-selected:hover": {
      backgroundColor: "#3b4fbf",
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
