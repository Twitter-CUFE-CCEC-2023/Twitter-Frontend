import React,{ useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Phone.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButton from "../Buttons/NextButton";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import SignUpBackground from "./MailBack";
import DateOfBirth from "./DateOfBirth"
import AddPhoneNext from "./Buttons/AddPhoneNext"
import InputField from "../InputField";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Alert from "./Alert/Alert"


const Phone = (props) => {
    const [alert, setAlert] = useState(true);
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [gender, setGender] = useState();
    const SetGender = (value) => {
        setGender(value.target.value);
        console.log(value.target.value);
    };
    const Monthchanged = (value) => {
        setMonth(value.target.value);
        console.log(value.target.value);
        //console.log(value.target.value);
    };
    const Daychanged = (value) => {
        setDay(value.target.value);
        console.log(value.target.value);
        //console.log(value.target.value);
    };
    const Yearchanged = (value) => {
        setYear(value.target.value);
        console.log(value.target.value);
        //console.log(value.target.value);
    };
    const handleClick = (val) => {
        props.handleButtonClick(val);
        setAlert(val);
    };
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
            <div className={classes.Header}>Create your account</div>
            <div className={classes.Minor3}>
                <InputField
                    label="Name"
                    disable={false}
                    itemName="Name"
                    maxLength={50}
                />

                <p></p>

                <InputField
                    label="Phone number"
                    disable={false}
                    itemName="UserPhone"
                    maxLength={50}
                />

                <p></p>

                <InputField
                    label="Username"
                    disable={false}
                    itemName="Username"
                    maxLength={50}
                />
            </div>
            <NavLink to="/Mail" >
                <div className={classes.content2}>
                    <p className={classes.content}>Use email instead</p>
                </div>
            </NavLink>
            <div className={classes.Gender}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Gender</InputLabel>
                    <Select onChange={SetGender} native defaultValue="00" id="grouped-native-select" itemname="Gender">
                        <option aria-label="None" value="" />
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Select>
                </FormControl>
            </div>
            <div className={classes.DateOfBirth} style={{ fontWeight: "bold" }}>
                Date of birth{" "}
            </div>
            <div className={classes.Minor3}>
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </div>
            <div className={classes.Minor3}>
                <DateOfBirth YearBack={Yearchanged} MonthBack={Monthchanged} DayBack={Daychanged} />
            </div>
            <div className={classes.NextButton}>
                <AddPhoneNext handleButtonClick={handleClick} handleGenderSet={gender} handleDaySet={day} handleMonthSet={month} handleYearSet={year}/>
            </div>
            {!alert && (
                <div className={classes.alert}>
                    <Alert message="Invalid credentials. Please enter all the data." />
                </div>
            )}
        </div>
    );
};

export default Phone;
