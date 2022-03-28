import React from "react";
import classes from "./Home.module.css"
import LeftSideBar from "./LeftSideBar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";

export default function Home(){
    return(
        <div className={classes.timeLine}>
            <LeftSideBar />

            <Feed />

            <RightSideBar/>
        </div>

    )
}