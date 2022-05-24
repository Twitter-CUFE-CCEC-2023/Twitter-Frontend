import React from 'react'
import classes from './MoreButton.module.css'
import buttonClasses from "./LeftButton.module.css";
import MoreOutlinedIcon from "@material-ui/icons/MoreOutlined";
import { NavLink } from 'react-router-dom';

import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import LaunchIcon from '@material-ui/icons/Launch';
import InputOutlinedIcon from '@material-ui/icons/InputOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
/**
 * More Button Implemented on its own to show the list when it is clicked
 */
function MoreButton() {
    let loggedUser = JSON.parse(localStorage.getItem("UserInfo"));
    const [hidden, setHidden] = React.useState(true);

    React.useEffect(() => {
        document.body.addEventListener("click", hide, true);
    }, []);

    function hide(event) {
        var isClickInsideElement = document.getElementById("moreList") ? document.getElementById("moreList").contains(event.target) : false;
        if (!isClickInsideElement) {
            setHidden(true);
        }
    }

    return (
        <div className= {classes.moreButton}>
            <div className={`${buttonClasses.leftButton}`} onClick={() => setHidden((prev) => !prev)}>
                <MoreOutlinedIcon />
                <p className={buttonClasses.title}>More</p>
            </div>
            <div id = "moreList" className={`${classes.moreList} ${hidden && classes.hidden}`}>
                <NavLink to = {`/${loggedUser && loggedUser.username}/topics`} className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice} ${classes.firstChoice}`}>
                    <div className={classes.flex}>
                        <InsertCommentOutlinedIcon className={classes.listIcon}/>
                        <p className={classes.choiceText}>Topics</p>
                    </div>
                </NavLink>
                <NavLink to = "/i/moment_maker" className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice}`}>
                    <div className={classes.flex}>
                    <FlashOnIcon className={classes.listIcon}/>
                    <p className={classes.choiceText}>Moments</p>
                    </div>
                </NavLink>
                <NavLink to = "/i/newsletters" className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice}`}>
                    <div className={classes.flex}>
                    <ChatOutlinedIcon className={classes.listIcon}/>
                    <p className={classes.choiceText}>Newsletters</p>
                    </div>
                </NavLink>
                <NavLink to = "/i/flow/convert_to_professional" className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice}`}>
                    <div className={classes.flex}>
                    <LaunchIcon className={classes.listIcon}/>
                    <p className={classes.choiceText}>Twitter for Professionals</p>
                    </div>
                </NavLink>
                <NavLink to = "/twitter-ads" className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice}`}>
                    <div className={classes.flex}>
                    <InputOutlinedIcon className={classes.listIcon}/>
                    <p className={classes.choiceText}>Twitter Ads</p>
                    </div>
                </NavLink>
                <NavLink to = "/analytics" className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice} ${classes.borderBottom}`}>
                    <div className={classes.flex}>
                    <BarChartIcon className={classes.listIcon}/>
                    <p className={classes.choiceText}>Analytics</p>
                    </div>
                </NavLink>
                <NavLink to = "/settings" className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice}`}>
                    <div className={classes.flex}>
                    <SettingsIcon className={classes.listIcon}/>
                    <p className={classes.choiceText}>Settings And Privacy</p>
                    </div>
                </NavLink>
                <NavLink to = "/help-center" className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice}`}>
                    <div className={classes.flex}>
                    <HelpOutlineOutlinedIcon className={classes.listIcon}/>
                    <p className={classes.choiceText}>Help Center</p>
                    </div>
                </NavLink>
                <NavLink to = "/i/display" className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice}`}>
                    <div className={classes.flex}>
                    <TvOutlinedIcon className={classes.listIcon}/>
                    <p className={classes.choiceText}>Display</p>
                    </div>
                </NavLink>
                <NavLink to = "/i/keyboard-shortcuts" className={`${classes.flex} ${classes.noStyle} ${classes.moreListChoice}  ${classes.lastChoice}`}>
                    <div className={classes.flex}>
                    <AccountCircleOutlinedIcon className={classes.listIcon}/>
                    <p className={classes.choiceText}>Keyboard shortcuts</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default MoreButton