import React from "react";
import "./LeftButton.css";
import { NavLink } from "react-router-dom";

export default function LeftButton(props){
    return(
        <NavLink to = {`/${props.url}`} className = "navLink">
            <div className={`leftButton ${props.onPage && 'onPage'}`}>
                <props.Icon />
                <p>{props.title}</p>
            </div>
        </NavLink>

    )
}