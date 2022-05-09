
import { NavLink } from "react-router-dom";
import classes from "./PhoneVerify.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import SignUp from "./Buttons/SignUpComplete";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import InputField from "../InputField";
import Alert from "./Alert/Alert"
const PhoneVerify = () => {
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

            <div className={classes.container}>
                <div className={classes.Minor}>
                <p>We sent you a code</p>
                </div>
                <div className={classes.Minor3}>
                    Enter it below to verify your email.
                </div>
                <InputField
                    label="Verification Code"
                    disable={false}
                    itemName="VerificationCode"
                    maxLength={50}
                />
                <div className={classes.Minor4}>
                    <NavLink to="/Password" >
                        Didn't receive email?
                    </NavLink>
                </div>
                <SignUp/>
            </div>
            {!alert && (
                <div className={classes.alert}>
                    <Alert message="Invalid. Please enter the verification code you received." />
                </div>
            )}
        </div>
    );
};

export default PhoneVerify;