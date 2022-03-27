// import "date-fns";
// import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// // import Clock from "@material-ui/pickers";

// const Filters = () => {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = useState(
//     new Date("2014-08-18T21:11:54")
//   );

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justifyContent="space-around">
//         <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
//           format="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date picker inline"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             "aria-label": "change date",
//           }}
//         />
//         <KeyboardDatePicker
//           margin="normal"
//           id="date-picker-dialog"
//           label="Date picker dialog"
//           format="MM/dd/yyyy"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             "aria-label": "change date",
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// };

// export default Filters;

import React, { useState } from "react";
import { Paper, Button } from "@material-ui/core";
import { useStaticState, ClockView, Calendar } from "@material-ui/pickers";

function Filters() {
  const [value, handleDateChange] = useState(new Date());

  // you can past mostly all available props, like minDate, maxDate, autoOk and so on
  const { pickerProps, wrapperProps } = useStaticState({
    value,
    onChange: handleDateChange,
  });

  return (
    <>
      <div>
        <Paper style={{ overflow: "hidden" }}>
          <Calendar {...pickerProps} />
        </Paper>

        <Button fullWidth onClick={wrapperProps.onClear}>
          Clear date ({value && value.toJSON()})
        </Button>
      </div>

      <div>
        <ClockView // or just directly use components
          type="hours"
          date={value}
          ampm={false}
          onMinutesChange={() => {}}
          onSecondsChange={() => {}}
          onHourChange={(date) => handleDateChange(date)}
        />
      </div>
    </>
  );
}

export default Filters;
