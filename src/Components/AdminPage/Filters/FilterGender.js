import React, { useState, useEffect } from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import classes from "./Filters.module.css";

function FilterGender() {
  const [gender, setGender] = useState("male");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  // when you want to use the state after updating use it inside useEffect
  // because:
  // React useState does not make changes directly to the state object
  // But it create queues for React core to update the state object of a React component

  useEffect(() => {
    window.localStorage.setItem(`filter-gender`, JSON.stringify(gender));
  }, [gender]);

  return (
    <div className={classes.gender}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={gender}
          onChange={handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default FilterGender;
