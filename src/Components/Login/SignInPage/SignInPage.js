import React, { useState } from "react";
import SignInBackground from "./SignInBackground";
import EnterEmail from "./Components/EnterEmail";
import EnterPassword from "./Components/EnterPassword";

const SignInPage = () => {
  const [nextClicked, setNextClicked] = useState(false);

  const handleClick = (click) => {
    setNextClicked(click);
  };

  return (
    <SignInBackground>
      {!nextClicked && <EnterEmail handleButtonClick={handleClick} />}
      {nextClicked && <EnterPassword />}
    </SignInBackground>
  );
};

export default SignInPage;
