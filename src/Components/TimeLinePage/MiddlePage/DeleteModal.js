import React from 'react'
import classes from './DeleteModal.module.css'
import instance from "../../axios";

function DeleteModal(props) {

    async function deleteTweet(){
        props.setIsDeleted(true);
        props.setShowDelete(false)
        let response;
        try{
            response = await instance.delete("/status/tweet/delete", {data: {id: props.tweetId}});
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div onClick={(e) => {props.setShowDelete(false);}} className={classes.background}>
        <div className={classes.modal} onClick = {(e) => e.stopPropagation()}>
            <div>
                <h2 className={classes.header}>Delete Tweet?</h2>
                <p className={classes.text}>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results.</p>
            </div>
            <div className={classes.deleteButton} onClick = {deleteTweet}>Delete</div>
            <div className={classes.cancelButton} onClick = {() => {props.setShowDelete(false)}}>Cancel</div>
        </div>
    </div>
  )
}

export default DeleteModal