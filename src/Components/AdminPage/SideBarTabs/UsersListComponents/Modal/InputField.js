import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStylesReddit = makeStyles(() => ({
  root: {
    "& label.MuiFocused ": {
      color: "red",
    },
    width: "298px",
    border: "1px solid rgb(207, 217, 222)",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      border: "2px solid",
      borderColor: " #3F51B5",
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();
  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3F51B5",
      fontFamily: "sans-serif",
    },
    "& .MuiFormLabel-root": {
      color: "rgb(90, 106, 119)",
    },
    "& .MuiFilledInput-root.Mui-disabled": {
      backgroundColor: "#F7F9F9",
      borderColor: "#fff",
    },
    "& .MuiFormLabel-root.Mui-disabled": {
      color: "#AEB6BC",
    },
    "& .MuiInputBase-root.Mui-disabled": {
      color: "#AEB6BC",
    },
  },
})(RedditTextField);

const InputField = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      props.passData(enteredValue);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredValue]);

  return (
    <form>
      <CssTextField
        disabled={props.disable}
        label={props.label}
        variant="filled"
        id={`${props.label}-input`}
        type={props.type}
        defaultValue={props.default}
        onChange={(event) => setEnteredValue(event.target.value)}
        inputProps={{ maxLength: `${props.maxLength}` }}
        value={props.value}
      />
    </form>
  );
};

export default InputField;
