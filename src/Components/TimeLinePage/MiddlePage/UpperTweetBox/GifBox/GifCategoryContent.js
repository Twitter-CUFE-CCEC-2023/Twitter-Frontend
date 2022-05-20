import React from "react";
import classes from "./GifCategoryContent.module.css";
export default function GifCategoryContent(props) {
  return (
    <React.Fragment>
      {props.gifs.map((gif, index) => {
        return (
          <img
            key={index}
            src={gif}
            onClick={() => {
              props.onChangeGif(gif, false, gif);
            }}
            className={classes.gif}
          ></img>
        );
      })}
    </React.Fragment>
  );
}
