import React from "react";
import "./RightSideBar.css"
import SearchBar from "./SearchBar";
import WhatsHappening from "./WhatsHappening";

export default function RightSideBar(){
    return(
        <div className="rightSideBar">
            <SearchBar/>
            <WhatsHappening />
        </div>
    )
}