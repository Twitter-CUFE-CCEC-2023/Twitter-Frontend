import React, { useContext } from 'react'
import classes from './LogoutModal.module.css'
import TwitterIcon from "@material-ui/icons/Twitter";
import { LoginContext } from "../../../login-context";

function LogoutModal(props) {

    const loginCtx = useContext(LoginContext);

    function LogOut(){
        loginCtx.logout();
    }

    return (
        <div className={classes.background} onClick = {() => props.setShowLogout(false)}>
            <div className={classes.modal} onClick = {(e) => e.stopPropagation()}>
                <TwitterIcon className={classes.icon} />
                <div>
                    <h2 className={classes.header}>Log out of Twitter?</h2>
                    <p className={classes.text}>You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.</p>
                </div>
                <div className={classes.logoutButton} onClick = {LogOut}>Log out</div>
                <div className={classes.cancelButton} onClick = {() => props.setShowLogout(false)}>Cancel</div>
            </div>
        </div>
    )
}

export default LogoutModal