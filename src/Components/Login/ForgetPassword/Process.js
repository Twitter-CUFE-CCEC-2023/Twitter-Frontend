import React, { useState } from "react";
import SignUpBackground from "../SignUp/MailBack";
import ForgetPasswordForm from "./ForgetPasswordForm";
import Validation from "./Validation";
import NewPassword from "./NewPassword";

const ForgotPasswordProcess = (props) => {
    const [nextClicked, setNextClicked] = useState(false);
    const [nextClicked2, setNextClicked2] = useState(false);
    const [nextClicked3, setNextClicked3] = useState(false);
    /**
     * Used to see if the button is clicked or not. If clicked, val is true and move to the 2nd page of forgetting password process
     * @function handleClick
     * @name handleClick
     * @param {boolean} click
     */
    const handleClick = (click) => {
        setNextClicked(click);
    };
    /**
     * Used to see if the button is clicked or not. If clicked, val is true and move to the 3rd/last page of forgetting password process
     * @function handleClick2
     * @name handleClick2
     * @param {boolean} click
     */
    const handleClick2 = (click) => {
        if(props.Step){
            setNextClicked2(click);
        }
        else{
            setNextClicked2(false);
        }
    };
    /**
     * Used to see if the button is clicked or not. If clicked, val is true. 
     * @function handleClick3
     * @name handleClick3
     * @param {boolean} click
     */
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
