import React from "react";

import FilterDates from "./FilterComponents/FilterDates";
import FilterGender from "./FilterComponents/FilterGender";
import FilterRegion from "./FilterComponents/FilterRegion";

function Filters() {
  return (
    <div>
      <FilterDates />
      <FilterGender />
      <FilterRegion />
    </div>
  );
}

export default Filters;
