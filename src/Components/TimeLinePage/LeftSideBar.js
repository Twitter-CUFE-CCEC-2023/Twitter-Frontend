import React from "react"
import "./LeftSideBar.css"
import TweetButton from "./TweetButton";
import LeftButton from "./LeftButton";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import LocalPostOfficeOutlinedIcon from '@material-ui/icons/LocalPostOfficeOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import { Twitter } from "@material-ui/icons";

export default function LeftSideBar(){
    return(
        <div className="leftSideBar">
            <TwitterIcon className="twitterIcon"/>
            <LeftButton Icon = {HomeIcon} url = "home" title = "Home" onPage = {true}/>
            <LeftButton Icon = {SearchOutlinedIcon} url = "explore" title = "Explore"/>
            <LeftButton Icon = {NotificationsNoneOutlinedIcon} url = "notifications" title = "Notifications"/>
            <LeftButton Icon = {LocalPostOfficeOutlinedIcon} url = "messages" title = "Messages"/>
            <LeftButton Icon = {BookmarkBorderOutlinedIcon} url = "i/bookmarks" title = "Bookmarks"/>
            <LeftButton Icon = {ListAltOutlinedIcon} url = "profileName/lists" title = "Lists"/> {/* profile name is the logged in user in the future*/}
            <LeftButton Icon = {PermIdentityOutlinedIcon} url = "profileName" title = "Profile"/>
            <LeftButton Icon = {MoreOutlinedIcon} url = "home" title = "More"/> {/* need to add the functionality of more */}
            <TweetButton />

        </div>
    )
}