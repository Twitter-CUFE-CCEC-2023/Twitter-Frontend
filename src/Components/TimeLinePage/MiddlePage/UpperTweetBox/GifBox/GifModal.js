import React from "react";
import classes from "./GifModal.module.css";
import x from "../../../../../Assets/icons/close.png";
import SearchGifs from "./SearchGifs";
import GifCategory from "./GifCategory";
import agree from "../../../../../Assets/Gif/Agree.gif";
import awww from "../../../../../Assets/Gif/Awww.gif";
import applause from "../../../../../Assets/Gif/applause.png";
import dance from "../../../../../Assets/Gif/dance.png";
import dealWithIt from "../../../../../Assets/Gif/deal with it.gif";
import DoNotWant from "../../../../../Assets/Gif/do not want.png";
import Eww from "../../../../../Assets/Gif/Eww.gif";
import eyeRoll from "../../../../../Assets/Gif/eye roll.png";

export default function GifModal(props) {
  return (
    <React.Fragment>
      <div className={classes.background} onClick={props.onHide}></div>
      <div className={classes.body}>
        <div className={classes.header}>
          <img
            className={classes["header-x"]}
            src={x}
            onClick={props.onHide}
          ></img>
          <div className={classes["search-div"]}>
            <SearchGifs></SearchGifs>
          </div>
        </div>
        <div className={classes.message}>
          <GifCategory name="agree" image={agree}></GifCategory>
          <GifCategory name="applause" image={applause}></GifCategory>
          <GifCategory name="awww" image={awww}></GifCategory>
          <GifCategory name="dance" image={dance}></GifCategory>
          <GifCategory name="deal with it" image={dealWithIt}></GifCategory>
          <GifCategory name="do not want" image={DoNotWant}></GifCategory>
          <GifCategory name="Eww" image={Eww}></GifCategory>
          <GifCategory name="eye roll" image={eyeRoll}></GifCategory>
        </div>
      </div>
    </React.Fragment>
  );
}
