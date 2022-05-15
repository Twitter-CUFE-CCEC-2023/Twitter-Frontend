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

  const handleSetGender = (value) => {
    setGender(value);
  };

  const handleMonthchanged = (value) => {
    setMonth(value);
  };
  const handleDaychanged = (value) => {
    setDay(value);
  };
  const handleYearchanged = (value) => {
    setYear(value);
  };

  const handleClick = (click) => {
    setNextClicked(click);
  };
  const handleClick2 = (click) => {
    setNextClicked2(click);
  };
  const handleClick3 = (click) => {
    setNextClicked3(click);
  };
  const handleClick4 = (click) => {
    setNextClicked4(click);
  };
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
