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
        console.log("Hello");
    }
    return (
        <div onLoad={func}>
            
        </div>
    );
};

export default Mail;
