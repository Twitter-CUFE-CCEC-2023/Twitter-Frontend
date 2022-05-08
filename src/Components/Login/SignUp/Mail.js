import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./Mail.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButtonUp from "./Buttons/NextButtonUp"
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import SignUpBackground from "./MailBack";
import Day from "./DayTest"
import InputField from "../InputField";


const Mail = (props) => {
    const [alert, setAlert] = useState(true);
    const [day, setDay] = useState(true);
    const [month, setMonth] = useState(true);
    const [year, setYear] = useState(true);

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
    useEffect(() => {
        setTimeout(() => {
            setDay(true);
        }, 5000);
    }, [day]);
    useEffect(() => {
        setTimeout(() => {
            setMonth(true);
        }, 5000);
    }, [month]);
    useEffect(() => {
        setTimeout(() => {
            setYear(true);
        }, 5000);
    }, [year]);
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
            <div className={classes.Header}>Create your account</div>
            {/* <div className={classes.upperContainer}> 
            <div className={classes.container}> */}

            <div className={classes.Minor3}>
                <InputField
                    label="Name"
                    disable={false}
                    itemName="Name"
                    maxLength={50}
                />
            </div>
            <p>

            </p>
            <div className={classes.Minor3}>
            <InputField
                label="Email address"
                disable={false}
                itemName="Email"
                maxLength={50}
            />
            </div>

            <NavLink to="/Phone">
                <div className={classes.content2}>
                    Use phone instead
                </div>
            </NavLink>
            <div className={classes.DateOfBirth} style={{ fontWeight: "bold" }}>
                Date of birth{" "}
            </div>
            <div className={classes.Minor3}>
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </div>
            <div className={classes.Minor3}>
                <Day />
            </div>

            {/* <div className={classes.button}> */}
            <div className={classes.NextButton}>
            <NextButtonUp handleButtonClick={handleClick} />
            </div>
            {/* </div> */}
            
        </div>
    );
};

export default Mail;
