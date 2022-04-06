import React from "react";
import { NavLink } from "react-bootstrap";
import classes from "./TrackOption.module.css"
import ClearIcon from "@material-ui/icons/Clear"
import SignUpBackground from "./MailBack";
import PrivacyAndPolicy from "./PrivacyAndPolicy";
import AddPhoneNext from "../Buttons/AddPhoneNext"

const TrackOption = () => {
    return (
        <SignUpBackground>
            <NavLink to="/" className={classes.closeIcon}>
                <ClearIcon />
            </NavLink>
            <div className={classes.containerStep}>
                <p>Step 2 of 5</p>
            </div>
            <div className={classes.container}>
                <div className={classes.Minor}>
                    <p>
                        Track where you see Twitter content across the web
                    </p>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className={classes.Minor3} for="flexCheckDefault">
                        Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.
                    </label>
                </div>
                <div className={classes.Minor4} for="flexCheckDefault">
                    <PrivacyAndPolicy />
                </div>
                <AddPhoneNext />
            </div>
            



            {/* <Day/> */}

            {/* <TrackOption/> */}



        </SignUpBackground>
    );
};

export default TrackOption