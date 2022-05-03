import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: 180,
  },
  container: {
    // display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
    height: "50vh",
    width: "65vw",
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
      <div className={classes.container}>
        <Fade in={checked}>
          <div
            className={classes.paper}
            style={!checked ? { display: "none" } : {}}
          >
            <CustomPieChart data={props.dataPie} />
          </div>
        </Fade>
        <Fade in={!checked}>
          <div
            className={classes.paper}
            style={checked ? { display: "none" } : {}}
          >
            <CustomBarChart data={props.dataBar} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
