import React from 'react'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import classes from './FeedTweetMore.module.css'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import FiberPinOutlinedIcon from '@material-ui/icons/FiberPinOutlined';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import DeleteModal from './DeleteModal';

import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';

import instance from '../../axios';

function FeedTweetMore(props) {
    let loggedUser = JSON.parse(localStorage.getItem("UserInfo"));
    const[listHidden, setListHidden] = React.useState(true)
    const[showDelete, setShowDelete] = React.useState(false)
    function toggleList(e) {
        e.stopPropagation();
        setListHidden(!listHidden);
    }

    document.body.addEventListener("click", hide, true);

    function hide(event) {
        var isClickInsideElement;

        let elements = document.getElementsByName("ListItem");
        for (var i = 0; i < elements.length; i++) {
        isClickInsideElement = elements[i].contains(event.target);
        if (isClickInsideElement) {
            return;
        }
        }
        setListHidden(true);
    }

    function follow(){
        if(props.isFollowing){
            if(props.setFollowingSet)
            {
                props.setFollowingSet((prev) => {
                let newFollowingSet = new Set(prev);
                newFollowingSet.delete(props.userName);
                return newFollowingSet;
            });}
            instance.post("/user/unfollow",  {"username": props.userName} ).then(res => { console.log(res.data)});
        }
        else{
            if(props.setFollowingSet)
            {
                props.setFollowingSet((prev) => {
                let newFollowingSet = new Set(prev);
                newFollowingSet.add(props.userName);
                return newFollowingSet;
            });}
            instance.post("/user/follow", {"username": props.username}).then(res => { console.log(res.data)}); 

        }
        props.setIsFollowing(prev => !prev); 
        setListHidden(true);
    }

    return (
        <div>
            <div onClick={toggleList}>
                <MoreHorizIcon className={classes.icon}/>
            </div>
            {loggedUser && loggedUser.username === props.userName &&
            <div className={classes.position}>
                <div name = "ListItem" onClick={(e) => e.stopPropagation()} className={`${classes.list} ${listHidden && classes.hidden}`}>
                    <div onClick={() => setShowDelete(true)} className={`${classes.listItem} ${classes.delete}`}>
                        <DeleteOutlineOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Delete</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <FiberPinOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Pin to your profile</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <PlaylistAddOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Add/remove @{props.userName} from Lists</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <ChatBubbleOutlineOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Change who can reply</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <CodeOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Embed Tweet</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <BarChartOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>View Tweet Analytics</p>
                    </div>
                </div>
            </div>}
            <div onClick={(e) => e.stopPropagation()}>
                {showDelete && <DeleteModal setIsDeleted = {props.setIsDeleted} tweetId = {props.tweetId} setShowDelete = {setShowDelete}/>}
            </div>
            {loggedUser && loggedUser.username !== props.userName &&
            <div className={classes.position}>
                <div name = "ListItem" onClick={(e) => e.stopPropagation()} className={`${classes.list} ${listHidden && classes.hidden}`}>
                    <div className={`${classes.listItem}`}>
                        <SentimentDissatisfiedOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Not Interested in this Tweet</p>
                    </div>
                    <div onClick={follow} className={`${classes.listItem}`}>
                        <PermIdentityOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>{props.isFollowing && `Unfollow @${props.userName}`}{!props.isFollowing && `Follow @${props.userName}`}</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <PlaylistAddOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Add/remove @{props.userName} from Lists</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <VolumeOffOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Mute @{props.userName}</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <BlockOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Block @{props.userName}</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <CodeOutlinedIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Embed Tweet</p>
                    </div>
                    <div className={`${classes.listItem}`}>
                        <OutlinedFlagIcon className={classes.liIcon}/>
                        <p className={classes.liText}>Report Tweet</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default FeedTweetMore