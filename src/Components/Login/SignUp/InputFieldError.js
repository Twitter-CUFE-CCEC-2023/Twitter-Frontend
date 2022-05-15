// // export default function InputFieldError() {
// //     const classes = useStyles();

// //     const [input, setInput] = useState("")

// //     const onChangeHandler = (event) => {
// //         setInput(event.target.value)
// //     }

// //     return (
// //         <form className={classes.root} noValidate autoComplete="off">
// //             <div>
// //                 <TextField

// //                 />
// //             </div>
// //         </form>
// //     );
// // }

// import React, { useEffect, useState } from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

// const useStylesReddit = makeStyles(() => ({
//     root: {
//         "& label.MuiFocused ": {
//             color: "red",
//         },
//         width: "440px",
//         border: "1px solid rgb(207, 217, 222)",
//         overflow: "hidden",
//         borderRadius: 4,
//         backgroundColor: "#fff",
//         "&:hover": {
//             backgroundColor: "#fff",
//         },
//         "&$focused": {
//             backgroundColor: "#fff",
//             border: "2px solid",
//             borderColor: "var(--twitterBlue)",
//         },
//         "@media (max-width: 700px)": {
//             width: "79vw",
//         },
//     },
//     focused: {},
// }));

// function RedditTextField(props) {
//     const classes = useStylesReddit();
//     return (
//         <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
//     );
// }

// const CssTextField = withStyles({
//     root: {
//         "& label.Mui-focused": {
//             color: "var(--twitterBlue)",
//             fontFamily: "sans-serif",
//         },
//         "& .MuiFormLabel-root": {
//             color: "rgb(90, 106, 119)",
//         },
//         "& .MuiFilledInput-root.Mui-disabled": {
//             backgroundColor: "#F7F9F9",
//             borderColor: "#fff",
//         },
//         "& .MuiFormLabel-root.Mui-disabled": {
//             color: "#AEB6BC",
//         },
//         "& .MuiInputBase-root.Mui-disabled": {
//             color: "#AEB6BC",
//         },
//     },
// })(RedditTextField);

// const InputFieldError = (props) => {
//     const [enteredValue, setEnteredValue] = useState("");

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (props.itemName) {
//                 localStorage.setItem(props.itemName, JSON.stringify(enteredValue));
//             }
//             props.passData(enteredValue);
//         }, 100);
//         return () => {
//             clearTimeout(timer);
//         };
//     }, [enteredValue, props.itemName]);

//     const handleKeyPress = (event) => {
//         if (event.key === "Enter") {
//             event.preventDefault();
//             const username = JSON.parse(localStorage.getItem("userEmailOrName"));
//             if (username === "") {
//                 props.handleButtonClick(false);
//             } else {
//                 props.handleButtonClick(true);
//             }
//         }
//     };

//     return (
//         <form onKeyPress={handleKeyPress} noValidate autoComplete="off">
//             {/* <form> */}
//             <CssTextField
//                 disabled={props.disable}
//                 label={props.label}
//                 variant="filled"
//                 id={`${props.label}-input`}
//                 type={props.type}
//                 defaultValue={props.default}
//                 onChange={(event) => setEnteredValue(event.target.value)}
//                 inputProps={{ maxLength: `${props.maxLength}` }}

//                 error={enteredValue.length === 0 ? true : false}
//                 helperText={enteredValue.length === 0 ? "Incorrect entry." : ""}
//             />
//         </form>
//     );
// };

// export default InputFieldError;


import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function ValidationTextFields() {
    const classes = useStyles();

    const [input, setInput] = useState("")

    const onChangeHandler = (event) => {
        setInput(event.target.value)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    error={input.length === 0 ? true : false}
                    id="outlined-error-helper-text"
                    label="Email"
                    // defaultValue="Hello World"
                    helperText={input.length === 0 ? "Incorrect entry." : ""}
                    variant="outlined"
                    onChange={onChangeHandler}
                />
            </div>
        </form>
    );
}
