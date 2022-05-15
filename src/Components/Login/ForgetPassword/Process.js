import React, { useState } from "react";
import SignUpBackground from "../SignUp/MailBack";
import ForgetPasswordForm from "./ForgetPasswordForm";
import Validation from "./Validation";
import NewPassword from "./NewPassword";

const ForgotPasswordProcess = (props) => {
    const [nextClicked, setNextClicked] = useState(false);
    const [nextClicked2, setNextClicked2] = useState(false);
    const [nextClicked3, setNextClicked3] = useState(false);

    const handleClick = (click) => {
        setNextClicked(click);
    };
    const handleClick2 = (click) => {
        if(props.Step){
            setNextClicked2(click);
        }
        else{
            setNextClicked2(false);
        }
    };
    const handleClick3 = (click) => {
        setNextClicked3(click);
    };

    return (
        <SignUpBackground>
            {!nextClicked && (
                <ForgetPasswordForm
                    handleButtonClick={handleClick}
                />
            )}
            {nextClicked && !nextClicked2 && (
                <Validation handleButtonClick={handleClick2} />
            )}
            {nextClicked && nextClicked2 && !nextClicked3 && (
                <NewPassword handleButtonClick={handleClick3} />
            )}
        </SignUpBackground>
    );
};

export default ForgotPasswordProcess;
