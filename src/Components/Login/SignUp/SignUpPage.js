import React, { useState } from "react";
import SignUpBackground from "./MailBack";
import Mail from "./Mail";
import TrackOption from "./TrackOption";
import AddPhone from "./AddPhone";
import Verify from "./PhoneVerify"

const SignUpPage = () => {
    const [nextClicked, setNextClicked] = useState(false);
    const [nextClicked3, setNextClicked3] = useState(false);
    const [nextClicked4, setNextClicked4] = useState(false);
    const handleClick = (click) => {
        setNextClicked(click);
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
            {nextClicked && !nextClicked3 && <TrackOption handleButtonClick={handleClick3}/>}
            {nextClicked && nextClicked3 && <AddPhone handle={()=>{console.log("hello")}}  />}
            {nextClicked && nextClicked3 && !nextClicked4 && <Verify handleButtonClick={handleClick}/>}
        </SignUpBackground>
    );
};

export default SignUpPage;