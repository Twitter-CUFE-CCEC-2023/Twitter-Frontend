import React, { useState } from "react";
import SignUpBackground from "./MailBack";
import Mail from "./Mail";
import TrackOption from "./TrackOption";
import AddPhone from "./AddPhone";
import Verify from "./PhoneVerify";
import Password from "./Password";

const SignUpPage = () => {
  // const [stepOne, setStepOne] = useState(true);
  // const [stepTwo, setStepTwo] = useState(false);
  // const [stepThree, setStepThree] = useState(false);
  // const [stepFour, setStepFour] = useState(false);
  // const [stepFive, setStepFive] = useState(false);
  
  
  // const handleSteps = (step) => {
  //   if (step == 1) {
  //     setStepOne(true);
  //     setStepTwo(false);
  //     setStepThree(false);
  //     setStepFour(false);
  //     setStepFive(false);
  //   }
  //   else if (step == 2)
  //   {
  //     setStepOne(false);
  //     setStepTwo(true);
  //     setStepThree(false);
  //     setStepFour(false);
  //     setStepFive(false);
  //   }
  //   else if (step == 3)
  //   {
  //     setStepOne(false);
  //     setStepTwo(false);
  //     setStepThree(true);
  //     setStepFour(false);
  //     setStepFive(false);
  //   }
  //   else if (step == 4)
  //   {
  //     setStepOne(false);
  //     setStepTwo(false);
  //     setStepThree(false);
  //     setStepFour(true);
  //     setStepFive(false);
  //   }
  //   else if ( step == 5 )
  //   {
  //     setStepOne(false);
  //     setStepTwo(false);
  //     setStepThree(false);
  //     setStepFour(false);
  //     setStepFive(true);
  //   }
  // };

  const [nextClicked, setNextClicked] = useState(false);
  const [nextClicked2, setNextClicked2] = useState(false);
  const [nextClicked3, setNextClicked3] = useState(false);
  const [nextClicked4, setNextClicked4] = useState(false);
  const [nextClicked5, setNextClicked5] = useState(false);

  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [gender, setGender] = useState();

  
  /**
     * Used to receive the value of Gender from the drop down list
     * @function handleClick
     * @name handleClick
     * @param {string} value
     */
  const handleSetGender = (value) => {
    setGender(value);
  };
  /**
       * Used to receive the value of Month from the drop down list
       * @function handleClick
       * @name handleClick
       * @param {int} value
       */
  const handleMonthchanged = (value) => {
    setMonth(value);
  };
  /**
     * Used to receive the value of Day from the drop down list
     * @function handleClick
     * @name handleClick
     * @param {int} value
     */
  const handleDaychanged = (value) => {
    setDay(value);
  };
  /**
     * Used to receive the value of Year from the drop down list
     * @function handleClick
     * @name handleClick
     * @param {int} value
     */
  const handleYearchanged = (value) => {
    setYear(value);
  };

  /**
     * Used to see if the button is clicked or not. If clicked, val is true and move to the 2nd page of sign up
     * @function handleClick
     * @name handleClick
     * @param {boolean} click
     */
  const handleClick = (click) => {
    setNextClicked(click);
  };
  /**
     * Used to see if the button is clicked or not. If clicked, val is true and move to the 3rd page of sign up
     * @function handleClick2
     * @name handleClick2
     * @param {boolean} click
     */
  const handleClick2 = (click) => {
    setNextClicked2(click);
  };
  /**
     * Used to see if the button is clicked or not. If clicked, val is true and move to the 4th page of sign up
     * @function handleClick3
     * @name handleClick3
     * @param {boolean} click
     */
  const handleClick3 = (click) => {
    setNextClicked3(click);
  };
  /**
     * Used to see if the button is clicked or not. If clicked, val is true and move to the 5th page of sign up
     * @function handleClick4
     * @name handleClick4
     * @param {boolean} click
     */
  const handleClick4 = (click) => {
    setNextClicked4(click);
  };
  /**
     * Used to see if the button is clicked or not. If clicked, val is true. Useless though sadly
     * @function handleClick5
     * @name handleClick5
     * @param {boolean} click
     */
  const handleClick5 = (click) => {
    setNextClicked5(click);
  };

  return (
    <SignUpBackground>
      {/* {stepOne && !stepTwo && !stepThree && !stepFour && !stepFive && (
        <Mail
          handleButtonClick={handleClick}
          handleSetGenderFn={handleSetGender}
          handleMonthchangedFn={handleMonthchanged}
          handleDaychangedFn={handleDaychanged}
          handleYearchangedFn={handleYearchanged}
          handleStepsFn={handleSteps}
        />
      )} */}
      {!nextClicked && (
        <Mail
          handleButtonClick={handleClick}
          handleSetGenderFn={handleSetGender}
          handleMonthchangedFn={handleMonthchanged}
          handleDaychangedFn={handleDaychanged}
          handleYearchangedFn={handleYearchanged}
        />
      )}
      {nextClicked && !nextClicked2 && (
        <TrackOption handleButtonClick={handleClick2} />
      )}
      {nextClicked && nextClicked2 && !nextClicked3 && (
        <AddPhone handleButtonClick={handleClick3} />
      )}
      {nextClicked && nextClicked2 && nextClicked3 && !nextClicked4 && (
        <Verify handleButtonClick={handleClick4} gender={gender} birth={new Date(year, month - 1, day)} />
      )}
      {nextClicked && nextClicked2 && nextClicked3 && nextClicked4 && (
        <Password handleButtonClick={handleClick5} gender={gender} birth={new Date(year, month - 1, day)} />
      )}
    </SignUpBackground>
  );
};

export default SignUpPage;
