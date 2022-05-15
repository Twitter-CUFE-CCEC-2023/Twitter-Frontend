import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import axios from "../../axios";

import { useStyles, getStyles, MenuProps } from "./FilterRegionStyles";

const FilterRegion = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get("/get-locations").then((response) => {
      if (response.status === 200) {
        // console.log(response.data.locations);
        setNames(response.data.locations);
      } else {
        setNames([""]);
      }
    });
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Region</InputLabel>
        <Select
          labelId="demo-mutiple-region-label"
          id="demo-mutiple-region"
          multiple
          value={props.regions}
          onChange={props.handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, props.regions, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterRegion;

// const handleChangeMultiple = (event) => {
//   const { options } = event.target;
//   const value = [];
//   for (let i = 0, l = options.length; i < l; i += 1) {
//     if (options[i].selected) {
//       value.push(options[i].value);
//     }
//   }
//   setPersonName(value);
// };
