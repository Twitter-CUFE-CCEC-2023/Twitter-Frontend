// import React from "react";

// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

// import classes from "./Filters.module.css";

// function FilterGender(props) {
//   return (
//     <div className={classes.gender}>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Gender</FormLabel>
//         <RadioGroup
//           aria-label="gender"
//           name="gender1"
//           value={props.gender}
//           onChange={props.handleChange}
//         >
//           <FormControlLabel value="Male" control={<Radio />} label="Male" />
//           <FormControlLabel value="Female" control={<Radio />} label="Female" />
//           <FormControlLabel value="both" control={<Radio />} label="both" />
//         </RadioGroup>
//       </FormControl>
//     </div>
//   );
// }

// export default FilterGender;

import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { useStyles, getStyles, MenuProps } from "./FilterRegionStyles";

const FilterGender = (props) => {
  const names = ["All", "Male", "Female"];
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-chip-label">Gender</InputLabel>
        <Select
          labelId="demo-gender-label"
          id="demo-gender"
          value={props.gender}
          onChange={props.handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, props.gender, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterGender;
