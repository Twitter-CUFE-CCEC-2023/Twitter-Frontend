import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./Password.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import PasswordNext from "./Buttons/SignUpComplete"
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import InputField from "../InputField";
import Alert from "./Alert/Alert"
import axios from "../../axios";

const Mail = (props) => {
    // useEffect(() => {
    //     const Name = JSON.parse(localStorage.getItem("Name"));
    //     const PW = JSON.parse(localStorage.getItem("Password"));
    //     const Email = JSON.parse(localStorage.getItem("Email"));
    //     const phone = JSON.parse(localStorage.getItem("PhoneNumber"));
    //     const Username = JSON.parse(localStorage.getItem("Username"));

    //     let userObject = {
    //         email: Email,
    //         username: Username,
    //         password: PW,
    //         name: Name,
    //         gender: props.gender,
    //         birth_date: props.birth,
    //     };

    //     console.log(userObject);

    //     if (phone.length !== 0) {
    //         userObject["phone_number"] = phone;
    //     }

    //     axios
    //         .post("/auth/signup", userObject, {
    //             headers: { "Content-Type": "application/json" },
    //         })
    //         .then((response) => {
    //             console.log(response);
    //             if (response.status === 200) {
    //                 localStorage.setItem("UserInfo", JSON.stringify(response.data.user));
    //                 localStorage.removeItem("Name");
    //                 localStorage.removeItem("Password");
    //                 localStorage.removeItem("PhoneNumber");
    //                 localStorage.removeItem("Username");
    //             }
    //         })
    //         .catch((err) => { });
    // }, []);
    const [alert, setAlert] = useState(true);

    const handleClick = (val) => {
        props.handleButtonClick(val);
        setAlert(val);
    };
    //Use above for day month and year to gain their value
    useEffect(() => {
        setTimeout(() => {
            setAlert(true);
        }, 5000);
    }, [alert]);
    return (
        <div>
            <img
                className={classes.twitterBluelogo}
                src={twitterBlueLogo}
                alt="TwitterLogo"
            />
            <NavLink to="/" className={classes.closeIcon}>
                <ClearIcon />
            </NavLink>
            <div className={classes.Header}>You'll need a password</div>
            {/* <div className={classes.upperContainer}> 
            <div className={classes.container}> */}

            <div className={classes.Minor3}>
                <InputField
                    label="Password"
                    disable={false}
                    itemName="Password"
                    type="password"
                    maxLength={50}
                />
            </div>

            {/* <div className={classes.button}> */}
            <div className={classes.NextButton}>
                <PasswordNext handleButtonClick={handleClick}/>
            </div>
            {/* </div> */}
            {!alert && (
                <div className={classes.alert}>
                    <Alert message="Invalid password. Please enter a valid password." />
                </div>
            )}
        </div>
    );
};

export default Mail;
