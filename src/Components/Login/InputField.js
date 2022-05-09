import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStylesReddit = makeStyles(() => ({
  root: {
    "& label.MuiFocused ": {
      color: "red",
    },
    width: "440px",
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
      borderColor: "var(--twitterBlue)",
    },
    "@media (max-width: 700px)": {
      width: "79vw",
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
      color: "var(--twitterBlue)",
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
      if (props.itemName) {
        localStorage.setItem(props.itemName, JSON.stringify(enteredValue));
      }
      props.passData(enteredValue);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredValue, props.itemName]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const username = JSON.parse(localStorage.getItem("userEmailOrName"));
      if (username === "") {
        props.handleButtonClick(false);
      } else {
        props.handleButtonClick(true);
      }
    }
  };

  return (
    <form onKeyPress={handleKeyPress}>
      {/* <form> */}
      <CssTextField
        disabled={props.disable}
        label={props.label}
        variant="filled"
        id={`${props.label}-input`}
        type={props.type}
        defaultValue={props.default}
        onChange={(event) => setEnteredValue(event.target.value)}
        inputProps={{ maxLength: `${props.maxLength}` }}
      />
    </form>
  );
};

export default InputField;
