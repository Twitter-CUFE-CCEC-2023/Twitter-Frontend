import ProfileSectionChoice from "./ProfileSectionChoice";
import classes from "./ProfileSectionChoices.module.css";
import user from "../../../Assets/settings-profile/user.png";
import key from "../../../Assets/settings-profile/key.png";
import download from "../../../Assets/settings-profile/download.png";
import people from "../../../Assets/settings-profile/people.png";
import brkoen from "../../../Assets/settings-profile/broken-heart.png";
import { useState } from "react";

function ProfileSectionChoices(props) {
  const choisces = [
    {
      name: "Account information",
      description:
        "see your account information like your phone number and email address",
      image: user,
    },
    {
      name: "Change your password",
      description: "change your password at any time",
      image: key,
    },
    {
      name: "Download an archive of your data",
      description:
        "get insights into the type of information stored for your account",
      image: download,
    },
    {
      name: "TweetDeck Teams",
      description:
        "invite anyone to tweet from this account using the Teams feture in TweetDeck",
      image: people,
    },
    {
      name: "Deactivate your account",
      description: "Find out how you can deactivate your account",
      image: brkoen,
    },
  ];
  function chooseChoiceHandler(name) {
    props.onChangeChosenOption(name);
  }
  return (
    <div className={classes.choices}>
      {choisces.map((choice) => (
        <ProfileSectionChoice
          key={choice.name}
          data={choice}
          onChoose={chooseChoiceHandler}
          onShow={props.onShow}
        ></ProfileSectionChoice>
      ))}
    </div>
  );
}
export default ProfileSectionChoices;
