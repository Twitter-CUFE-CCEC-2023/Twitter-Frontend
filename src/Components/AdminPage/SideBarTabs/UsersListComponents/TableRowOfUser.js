import React, { useState } from "react";

import UserNameRow from "./UserNameRow";
import CollapsedDetails from "./CollapsedDetails";

const TableRowOfUser = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <UserNameRow name={row.name} open={open} handleOpen={handleOpen} />
      <CollapsedDetails open={open} user={row} />
    </React.Fragment>
  );
};

export default TableRowOfUser;
