import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import $ from "jquery";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& .MuiInputLabel-outlined": {
      transform: "translate(14px, 15px) scale(1)",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "var(--twitterBlue)",
      transform: "Translate(14px, 5px) scale(0.75)",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--twitterBlue)",
    },
    "& .MuiOutlinedInput-input": {
      paddingTop: "23px",
      paddingBottom: "14px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(207, 217, 222)",
    },
    "& .MuiOutlinedInput-root:hover": {
      borderColor: "rgb(207, 217, 222)",
      // pointerEvents: "none",
      // opacity: 0.3,
    },
  },
  margin: {
    // margin: "1px",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "440px",
    "@media (max-width: 700px)": {
      width: "79vw",
    },
  },
}));

const PasswordInputField = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  // useEffect(() => {
  //   $(".MuiOutlinedInput-root").removeClass("hover");
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      props.passData(values.password);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [values.password]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            {props.label}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            inputProps={{ maxLength: `${props.maxLength}` }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
};

export default PasswordInputField;
