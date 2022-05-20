import React from "react";
import calsses from "./GifCategoryContent.module.css";
export default function GifCategoryContent(props) {
  return (
    <React.Fragment>
      {props.gifs.map((gif, index) => {
        return (
          <img
            key={index}
            src={gif}
            onClick={() => {
              props.onChangeGif(gif);
            }}
          ></img>
        );
      })}
    </React.Fragment>
  );
}
