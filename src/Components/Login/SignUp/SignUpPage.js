import React, { useState } from "react";
import SignInBackground from "./MailBack";
import Mail from "./Mail";
import TrackOption from "./TrackOption";

const SignInPage = () => {
    const [nextClicked, setNextClicked] = useState(false);

    const handleClick = (click) => {
        setNextClicked(click);
    };

    return (
        <SignInBackground>
            {!nextClicked && <Mail handleButtonClick={handleClick} />}
            {nextClicked && <TrackOption />}
        </SignInBackground>
    );
};

export default SignInPage;