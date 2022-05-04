import React, { useState } from "react";
import SignUpBackground from "./MailBack";
import Phone from "./Phone";
import TrackOption from "./TrackOption";

const SignInPage = () => {
    const [nextClicked, setNextClicked] = useState(false);

    const handleClick = (click) => {
        setNextClicked(click);
    };

    return (
        <SignUpBackground>
            {!nextClicked && <Phone handleButtonClick={handleClick} />}
            {nextClicked && <TrackOption />}
        </SignUpBackground>
    );
};

export default SignInPage;