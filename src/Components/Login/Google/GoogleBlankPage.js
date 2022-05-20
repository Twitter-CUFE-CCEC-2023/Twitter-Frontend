import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./Mail.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButtonUp from "./Buttons/NextButtonUp";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import DateOfBirth from "./DateOfBirth";
import InputField from "../InputField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Alert from "./Alert/Alert";
import WrongData from "./InputField/InputField"

const Mail = (props) => {
    
    const func = () => {
        axios
            .post("/auth/gauth", {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                if (response.status === 200) {
                    if (response.status === 200) {
                        localStorage.setItem(
                            "UserInfo",
                            JSON.stringify(response.data.user)
                        );
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
                    }
                }
            })
            .catch((err) => {});
    }
    return (
        <div onLoad={func}>
            
        </div>
    );
};

export default Mail;
