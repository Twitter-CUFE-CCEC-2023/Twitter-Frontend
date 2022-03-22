import React from "react";
import "./FeedTweet.css";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import TweetAtrribute from "./TweetAtrribute";

export default function FeedTweet(props){
    return (
        <div className="feedTweet">
            <img className="profilePic" alt = "profile" src={props.profilePic}></img>
            <div className="tweet">
                <div className="user">
                    <h2>{props.name}</h2>
                    <p className="gray">&nbsp;@{props.userName}</p>
                    <p className="gray">&nbsp;. 12h</p>  {/*placeholder */}
                </div>
                <p>{props.text}</p>
                <div className="attributes">
                    <TweetAtrribute Icon = {ChatBubbleOutlineOutlinedIcon} num = {props.replies} color = "b" tooltip = "Reply"/>
                    <TweetAtrribute Icon = {LoopOutlinedIcon} num = {props.retweets} color = "g" tooltip = "Retweet"/>
                    <TweetAtrribute Icon = {FavoriteBorderOutlinedIcon} FilledIcon = {FavoriteIcon} num = {props.likes} color = "r" tooltip = "Like"/>
                    <TweetAtrribute Icon = {ShareOutlinedIcon} color = "b" tooltip = "Share"/>
                </div>
            </div>
        </div>
    )
}