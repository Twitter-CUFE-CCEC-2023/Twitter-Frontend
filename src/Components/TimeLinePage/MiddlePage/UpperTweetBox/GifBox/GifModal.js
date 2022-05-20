import React, { useState } from "react";
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

import agree1 from "../../../../../Assets/Gif/agree/agree1.gif";
import agree2 from "../../../../../Assets/Gif/agree/agree2.gif";
import agree3 from "../../../../../Assets/Gif/agree/agree3.gif";

import ReactDOM from "react-dom";
import GifCategoryContent from "./GifCategoryContent";
import Modal from "../../../../UI/Modal";
const Background = (props) => {
  return <div className={classes.background} onClick={props.onHide}></div>;
};
const Body = (props) => {
  const [chosen, setChosen] = useState(undefined);
  const [currentGifs, setCurrentGifs] = useState([agree1, agree2, agree3]);
  return (
    <div className={classes.body}>
      {/* <Modal></Modal> */}
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
      {chosen == undefined ? (
        <div className={classes.message}>
          <GifCategory
            onClick={() => {
              setChosen("agree");
            }}
            name="agree"
            image={agree}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("applause");
            }}
            name="applause"
            image={applause}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("awww");
            }}
            name="awww"
            image={awww}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("dance");
            }}
            name="dance"
            image={dance}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("deal with it");
            }}
            name="deal with it"
            image={dealWithIt}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("do not want");
            }}
            name="do not want"
            image={DoNotWant}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("Eww");
            }}
            name="Eww"
            image={Eww}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("eye roll");
            }}
            name="eye roll"
            image={eyeRoll}
          ></GifCategory>
        </div>
      ) : (
        <div className={classes.message}>
          <GifCategoryContent
            gifs={currentGifs}
            onChangeGif={props.onChangeGif}
          ></GifCategoryContent>
        </div>
      )}
    </div>
  );
};
export default function GifModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Background onHide={props.onHide}></Background>,
        document.getElementById("background")
      )}
      {ReactDOM.createPortal(
        <Body onHide={props.onHide} onChangeGif={props.onChangeGif}></Body>,
        document.getElementById("body")
      )}
    </React.Fragment>
  );
}
