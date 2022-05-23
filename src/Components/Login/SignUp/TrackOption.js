import React, { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import classes from "./TrackOption.module.css"
import ClearIcon from "@material-ui/icons/Clear"
import SignUpBackground from "./MailBack";
import PrivacyAndPolicy from "./PrivacyAndPolicy";
import AddPhoneNext from "../Buttons/AddPhoneNext"

const TrackOption = (props) => {
    // const [alert, setAlert] = useState(true);

    const handleClick = (val) => {
        props.handleButtonClick(val);
        // setAlert(val);
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setAlert(true);
    //     }, 5000);
    // }, [alert]);
    return (
        
        <div>
            <NavLink to="/" className={classes.closeIcon}>
                <ClearIcon />
            </NavLink>
            <div className={classes.containerStep}>
                {/* <p>Step 2 of 5</p> */}
                Step 2 of 5
            </div>
            <div className={classes.container}>
                <div className={classes.Minor}>
                    <p>
                        Track where you see Twitter content across the web
                    </p>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className={classes.Minor3} htmlFor="flexCheckDefault">
                        Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.
                    </label>
                </div>
                <div className={classes.Minor4} htmlFor="flexCheckDefault">
                    <PrivacyAndPolicy />
                </div>
                <div className={classes.NextButton}>
                    <AddPhoneNext handleButtonClick={handleClick}/>
                </div>
            </div>
        </div>
    );
};

export default TrackOption