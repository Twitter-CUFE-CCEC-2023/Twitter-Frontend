import React from 'react'
import classes from './ProfileData.module.css'
import ProfileHeader from './ProfileHeader'

function ProfileData() {
  return (
    <div className={classes.profileDataContainer}>
        <div className={classes.header}>
        <ProfileHeader></ProfileHeader>
        </div>
    </div>
  )
}

export default ProfileData