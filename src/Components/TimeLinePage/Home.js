import React from "react";
import "./Home.css"
import LeftSideBar from "./LeftSideBar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";

export default function Home(){
    return(
        <div className="timeLine">
            <LeftSideBar />

            <Feed />

            <RightSideBar/>
        </div>

    )
}