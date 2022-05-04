
import { NavLink } from "react-router-dom";
import classes from "./PhoneVerify.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButton from "../Buttons/NextButton";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import SignUpBackground from "./MailBack";

const PhoneVerify = () => {
    return (
        // <img
        //     className={classes.twitterBluelogo}
        //     src={twitterBlueLogo}
        //     alt="TwitterLogo"
        // />
        <SignUpBackground>
            <img
                className={classes.twitterBluelogo}
                src={twitterBlueLogo}
                alt="TwitterLogo"
            />
            <NavLink to="/" className={classes.closeIcon}>
                <ClearIcon />
            </NavLink>

            <div className={classes.container}>
                <div className={classes.Minor}>
                <p>We sent you a code</p>
                </div>
                <div className={classes.Minor3}>
                    Enter it below to verify your email.
                </div>
                <input type="text" className={classes.input} placeholder="Verification Code" />
                <div className={classes.Minor4}>
                    <NavLink to="/" >
                        Didn't receive email?
                    </NavLink>
                </div>
                <NextButton/>
            </div>
        </SignUpBackground>
    );
};

export default PhoneVerify;