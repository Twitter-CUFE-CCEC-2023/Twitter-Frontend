import React from "react";
import classes from "./LeftButton.module.css";
import { NavLink } from "react-router-dom";

export default function LeftButton(props){
    return(
        <NavLink to = {`/${props.url}`} className = {classes.navLink}>
            <div className={`${classes.leftButton} ${props.onPage && classes.onPage}`}>
                {!props.onPage && <props.Icon />}
                {props.onPage && <props.IconActive />}
                <p className={classes.title}>{props.title}</p>
            </div>
        </NavLink>

    )
}