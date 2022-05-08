import React, { useState } from "react";
import SignUpBackground from "./MailBack";
import Mail from "./Mail";
import TrackOption from "./TrackOption";
import AddPhone from "./AddPhone";
import Verify from "./PhoneVerify"
import Password from "./Password"

const SignUpPage = () => {
    const [nextClicked, setNextClicked] = useState(false);
    const [nextClicked2, setNextClicked2] = useState(false);
    const [nextClicked3, setNextClicked3] = useState(false);
    const [nextClicked4, setNextClicked4] = useState(false);

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

    return (
        <SignUpBackground>
            {!nextClicked && <Mail handleButtonClick={handleClick} />}
            {nextClicked && !nextClicked2 && <TrackOption handleButtonClick={handleClick2}/>}
            {nextClicked && nextClicked2 && !nextClicked3 && <AddPhone handleButtonClick={handleClick4} />}
            {nextClicked && nextClicked2 && nextClicked3  && !nextClicked4&& <Verify handleButtonClick={handleClick}/>}
            {nextClicked && nextClicked2 && nextClicked3 && nextClicked4 &&  <Password handleButtonClick={handleClick} />}
        </SignUpBackground>
    );
};

export default SignUpPage;