import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./Mail.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import NextButtonUp from "./Buttons/NextButtonUp";
import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";
import DateOfBirth from "./DateOfBirth";
import InputFieldError from "./InputFieldError"
import InputField from "../InputField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Alert from "./Alert/Alert";
import WrongData from "./InputField/InputField"

const Mail = (props) => {
  const [alert, setAlert] = useState(true);
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [gender, setGender] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [USERname, setUserNAME] = useState();

  const [emailcheck, setEmailCheck] = useState();
  /**
   * Helps to check whether a valid email or not and set the value alert to whether to show error message or not
   * @function handleEmailChecker
   * @name handleEmailChecker
   * @param {boolean} value
   * @module Mail
   */
  const handleEmailChecker = (value) =>{
    setEmailCheck(value);
    setAlert(value);
  }
  /**
   * Sets the string written in username textbox in a variable
   * @function handleuserchange
   * @name handleuserchange
   * @param {boolean} value
   */
  const handleuserchange = (value) => {
    setUserNAME(value);
  }
  /**
   * Used to pass the email value to the function passData in its respective InputField
   * @function handleEmailChange
   * @name handleEmailChange
   * @param {boolean} value 
   */
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  /**
     * Decides whether its the email sign up or phone number sign up form
     * @function usephoneInstead
     * @name usephoneInstead
     */
  const usephoneInstead = () =>
  {
    setPhone(!phone);
  }

  /**
     * Sets the string written in the Name textbox to the variable Name
     * @function SetName
     * @name SetName
     * @param {string} value
     */
  const SetName = (value) =>
  {

    setName(value);
    console.log(value);
  }
  /**
     * Sets the gender choice value in variable Gender
     * @function SetGender
     * @name SetGender
     * @param {string} value
     */
  const SetGender = (value) => {
    props.handleSetGenderFn(value.target.value);
    setGender(value.target.value);

    console.log(value.target.value);
  };
  /**
     * Sets the month choice value in variable Month
     * @function Monthchanged
     * @name Monthchanged
     * @param {string} value
     */
  const Monthchanged = (value) => {
    props.handleMonthchangedFn(value.target.value);
    setMonth(value.target.value);
    console.log(value.target.value);
    //console.log(value.target.value);
  };
  /**
     * Sets the day choice value in variable Day
     * @function Daychanged
     * @name Daychanged
     * @param {string} value
     */
  const Daychanged = (value) => {
    props.handleDaychangedFn(value.target.value);
    setDay(value.target.value);
    console.log(value.target.value);
    //console.log(value.target.value);
  };
  /**
     * Sets the year choice value in variable Year
     * @function Yearchanged
     * @name Yearchanged
     * @param {string} value
     */
  const Yearchanged = (value) => {
    props.handleYearchangedFn(value.target.value);
    setYear(value.target.value);
    console.log(value.target.value);
    //console.log(value.target.value);
  };
  /**
     * Used to see if the button is clicked or not. If clicked, val is true. 
     * @function handleClick
     * @name handleClick
     * @param {boolean} val
     */
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
  let step = 2;
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

      <div className={classes.Minor3} onPointerLeave={SetName} onChange={SetName}   >
        <InputField
          label="Name"
          disable={false}
          itemName="Name"
          maxLength={50}
          passData={SetName}
        // defaultValue={""}
        />
        {/* <InputFieldError label="Name"
          disable={false}
          itemName="Name"
          maxLength={50}
          passData={SetName} /> */}
      </div>

      <p></p>

      <div className={classes.Minor3}>
        {!phone && <InputField
          label="Email address"
          disable={false}
          itemName="Email"
          maxLength={50}
          passData={handleEmailChange}
          value={email}
        />}
        {phone && <InputField
          label="Phone number"
          disable={false}
          itemName="Phone"
          maxLength={50}
        />}
      </div>

      <p></p>

      <div className={classes.Minor3}>
        <InputField
          label="Username"
          disable={false}
          itemName="Username"
          maxLength={50}
          passData={handleuserchange}
          value={USERname}
        />
      </div>

      <div className={classes.content2} onClick={usephoneInstead} >
        {!phone && <p>Use phone instead</p>}
        {phone && <p>Use email instead</p>}
      </div>

      <div className={classes.Gender}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Gender</InputLabel>
          <Select
            onChange={SetGender}
            native
            defaultValue=""
            id="grouped-native-select"
            itemname="Gender"

          >
            <option aria-label="None" value="" />
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>
      </div>

      <p></p>

      <div className={classes.DateOfBirth} style={{ fontWeight: "bold" }}>
        Date of birth{" "}
      </div>

      <div className={classes.Minor3}>
        This will not be shown publicly. Confirm your own age, even if this
        account is for a business, a pet, or something else.
      </div>

      <div className={classes.Minor3}>
        <DateOfBirth
          YearBack={Yearchanged}
          MonthBack={Monthchanged}
          DayBack={Daychanged}
        />
      </div>

      <div className={classes.NextButton}>
        <NextButtonUp
          handleButtonClick={handleClick}
          handleGenderSet={gender}
          handleDaySet={day}
          handleMonthSet={month}
          handleYearSet={year}
          handleEmailChangeFn={handleEmailChecker}
          PhoneCheck={phone}
          Step={step}
        />
      </div>
      {!alert && !phone && (
        <div className={classes.alert}>
          <Alert message="Invalid credentials. Please enter all the data." />
        </div>
      )}
      {!alert && phone && (
        <div className={classes.alert}>
          <Alert message="Invalid Phone Number. Please enter a valid one." />
        </div>
      )}
    </div>
  );
};

export default Mail;
