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
import agree4 from "../../../../../Assets/Gif/agree/agree4.gif";
import agree5 from "../../../../../Assets/Gif/agree/agree5.gif";
import agree6 from "../../../../../Assets/Gif/agree/agree6.gif";
import agree7 from "../../../../../Assets/Gif/agree/agree7.gif";
import agree8 from "../../../../../Assets/Gif/agree/agree8.gif";
import agree9 from "../../../../../Assets/Gif/agree/agree9.gif";

import applause1 from "../../../../../Assets/Gif/applause/applause1.gif";
import applause2 from "../../../../../Assets/Gif/applause/applause2.gif";
import applause3 from "../../../../../Assets/Gif/applause/applause3.gif";
import applause4 from "../../../../../Assets/Gif/applause/applause4.gif";
import applause5 from "../../../../../Assets/Gif/applause/applause5.gif";
import applause6 from "../../../../../Assets/Gif/applause/applause6.gif";
import applause7 from "../../../../../Assets/Gif/applause/applause7.gif";
import applause8 from "../../../../../Assets/Gif/applause/applause8.gif";
import applause9 from "../../../../../Assets/Gif/applause/saber.gif";

import ReactDOM from "react-dom";
import GifCategoryContent from "./GifCategoryContent";
const Background = (props) => {
  return <div className={classes.background} onClick={props.onHide}></div>;
};
const Body = (props) => {
  const [chosen, setChosen] = useState(undefined);
  const [currentGifs, setCurrentGifs] = useState(undefined);
  return (
    <div className={classes.body}>
      {/* <Modal></Modal> */}
      <div className={classes.header}>
        {chosen == undefined ? (
          <img
            className={classes["header-x"]}
            src={x}
            onClick={props.onHide}
          ></img>
        ) : (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 ${classes["header-x"]} ${classes["profile-section-svg"]}`}
            onClick={() => {
              setChosen(undefined);
            }}
          >
            <g>
              <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
            </g>
          </svg>
        )}
        <div className={classes["search-div"]}>
          <SearchGifs></SearchGifs>
        </div>
      </div>
      {chosen == undefined ? (
        <div className={classes.message}>
          <GifCategory
            onClick={() => {
              setChosen("agree");
              setCurrentGifs([
                agree1,
                agree2,
                agree3,
                agree4,
                agree5,
                agree6,
                agree7,
                agree8,
                agree9,
              ]);
            }}
            name="agree"
            image={agree}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("applause");
              setCurrentGifs([
                applause1,
                applause2,
                applause3,
                applause4,
                applause5,
                applause6,
                applause7,
                applause8,
                applause9,
              ]);
            }}
            name="applause"
            image={applause}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("awww");
              setCurrentGifs([]);
            }}
            name="awww"
            image={awww}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("dance");
              setCurrentGifs([]);
            }}
            name="dance"
            image={dance}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("deal with it");
              setCurrentGifs([]);
            }}
            name="deal with it"
            image={dealWithIt}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("do not want");
              setCurrentGifs([]);
            }}
            name="do not want"
            image={DoNotWant}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("Eww");
              setCurrentGifs([]);
            }}
            name="Eww"
            image={Eww}
          ></GifCategory>
          <GifCategory
            onClick={() => {
              setChosen("eye roll");
              setCurrentGifs([]);
            }}
            name="eye roll"
            image={eyeRoll}
          ></GifCategory>
        </div>
      ) : (
        <div className={classes["message-gif"]}>
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
