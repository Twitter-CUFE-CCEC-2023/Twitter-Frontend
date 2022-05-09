import React, { useState } from "react";
import SignUpBackground from "./MailBack";
import Phone from "./Phone";
import TrackOption from "./TrackOption";
import Password from "./Password";
import Verify from "./PhoneVerify"
const SignInPage = () => {
    const [nextClicked, setNextClicked] = useState(false);
    const [nextClicked2, setNextClicked2] = useState(false);
    const [nextClicked3, setNextClicked3] = useState(false);

    const handleClick = (click) => {
        setNextClicked(click);
    };
    const handleClick2 = (click) => {
        setNextClicked2(click);
    }
    const handleClick3 = (click) => {
        setNextClicked3(click);
    }
    return (
        <SignUpBackground>
            {!nextClicked && <Phone handleButtonClick={handleClick} />}
            {nextClicked && !nextClicked2 && <TrackOption handleButtonClick={handleClick2} />}
            {nextClicked && nextClicked2 && !nextClicked3 && <Password handleButtonClick={handleClick3}/>}
            {nextClicked && nextClicked2 && nextClicked3 && <Verify />}
        </SignUpBackground>
    );
};

export default SignInPage;