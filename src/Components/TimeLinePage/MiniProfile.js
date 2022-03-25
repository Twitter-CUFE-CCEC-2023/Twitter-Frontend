import { Button } from '@material-ui/core'
import React from 'react'
import "./MiniProfile.css"

function MiniProfile(props) {
  return (
    <div className='miniProfile'>
        <div className='flex'>
            <img className='miniImg pointer' src={props.profilePic}></img>
            <Button className='miniButton'>Follow</Button>
        </div>
        <div className='userNames'>
            <p className='name pointer'>{props.name}</p>
            <p className='gray pointer'>@{props.userName}</p>
        </div>
        <p className='normalText'>{props.profileDesciption}</p>
        <div className='flex'>
            <p className='normalText'><span className='bold'>{props.following}</span> <span className='gray'>Following &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
            <p className='normalText'><span className='bold'>{props.followers}</span> <span className='gray'>Followers</span></p>
        </div>
    </div>
  )
}

export default MiniProfile