import React, { useState } from "react";

import UserNameRow from "./UserNameRow";
import CollapsedDetails from "./CollapsedDetails";

const UserRow = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <UserNameRow
        name={row.name}
        open={open}
        ban={row.isBanned}
        handleOpen={handleOpen}
        class={props.class}
        userId={row._id}
      />
      <CollapsedDetails open={open} user={row} />
    </React.Fragment>
  );
};

export default UserRow;
