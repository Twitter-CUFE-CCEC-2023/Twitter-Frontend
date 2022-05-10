import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Fade from "@material-ui/core/Fade";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: 180,
    // "@media (min-width: 0px) and (max-width: 800px)": {
    //   fontSize: "102%",
    // },
  },
  paperBar: {
    height: "50vh",
    "@media (min-width: 800px)": {
      width: "65vw",
      margin: theme.spacing(1),
    },
    "@media (min-width: 0px) and (max-width: 800px)": {
      marginLeft: "-20px",
    },
  },
  paperPie: {
    height: "55vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    "@media (min-width: 1000px)": {
      alignItems: "center",
    },
  },
}));

export default function ShowHide(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Pie Chart"
      />
      <div>
        <Fade in={checked}>
          <div
            className={classes.paperPie}
            style={!checked ? { display: "none" } : {}}
          >
            <CustomPieChart data={props.dataPie} />
          </div>
        </Fade>
        <Fade in={!checked}>
          <div
            className={classes.paperBar}
            style={checked ? { display: "none" } : {}}
          >
            <CustomBarChart data={props.dataBar} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
