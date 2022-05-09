import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { LoginContext } from "../../login-context";
import axios from "../axios";

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
  const loginCtx = useContext(LoginContext);
  const history = useHistory();

  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.handleLoadingfn(true);

      const username = JSON.parse(localStorage.getItem("userEmailOrName"));
      const password = values.password;

      if (localStorage.getItem("isMock") !== "true") {
        // Backend request
        let authentication = {
          email_or_username: username,
          password: password,
        };
        axios
          .post("/auth/login", authentication, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            if (response.status === 200) {
              localStorage.setItem(
                "UserInfo",
                JSON.stringify(response.data.user)
              );
              // localStorage.removeItem("userEmailOrName");
              if (response.data.user.role === "User") {
                loginCtx.login(
                  false,
                  response.data.access_token,
                  response.data.token_expiration_date
                );
                history.push("/home");
                localStorage.removeItem("userEmailOrName");
              } else if (response.data.user.role === "Admin") {
                loginCtx.login(
                  true,
                  response.data.access_token,
                  response.data.token_expiration_date
                );
                history.push("/admin");
                localStorage.removeItem("userEmailOrName");
              }
            } else {
              props.handleLoginClickfn(false);
            }
            props.handleLoadingfn(false);
          })
          .catch((err) => {
            props.handleLoadingfn(false);
            if (err.response.status === 401) {
              props.handleLoginClickfn(false);
            }
          });
      } else {
        // Mocking API
        fetch("http://localhost:3000/auth")
          .then((response) => response.json())
          .then((data) => {
            if (data.email === username && data.password === password) {
              localStorage.setItem("UserInfo", JSON.stringify(data.user));
              if (data.user.role === "User") {
                loginCtx.login(false, data.access_token, 360000);
                history.push("/home");
                localStorage.removeItem("userEmailOrName");
              } else if (data.user.role === "Admin") {
                loginCtx.login(true, data.access_token, 360000);
                history.push("/admin");
                localStorage.removeItem("userEmailOrName");
              }
            } else {
              props.handleLoginClickfn(false);
            }
            props.handleLoadingfn(false);
          })
          .catch(() => {
            props.handleLoadingfn(false);
            props.handleLoginClickfn(false);
          });
      }
    }
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
            onKeyPress={handleKeyPress}
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
