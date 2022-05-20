import React, { useEffect, useState } from "react";
import axios from "../../axios";
const Mail = (props) => {
    
    const func = () => {
        axios
            .post("/auth/gauth", {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log(response);
                    //let authentication = response.user;
                    
                }
                else if (response.status === 500)
                {
                    console.log("Failed");
                    console.log(response.status);
                }
            })
            .catch((err) => {});
    }
    return (
        <div onLoad={func}>
            
        </div>
    );
};

export default Mail;
