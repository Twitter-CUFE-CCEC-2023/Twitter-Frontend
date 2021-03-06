import { useEffect, useState } from "react";
import classes from "./PhotosContainer.module.css";
import edit from "../../../../Assets/icons/editing.png";
export default function PhotosContainer(props) {
  // const [photos, setPhotos] = useState(props.photos);
  // useEffect(() => {
  //   setPhotos(props.photos);
  // }, [photos]);
  return (
    <div
      className={`${
        props.isGif
          ? classes["container-photo-gif"]
          : classes["container-photo"]
      } `}
    >
      {/* <div className={classes.void}> */}
      <div className={classes["svg-container"]} onClick={props.onRemove}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`r-jwli3a r-4qtqp9 r-yyyyoo r-1hjwoze r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-12ym1je ${classes["svg"]}`}
        >
          <g>
            <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
          </g>
        </svg>
      </div>
      {!props.isGif && (
        <div className={classes["edit-container"]} onClick={props.onUpdate}>
          <img className={classes["edit"]} src={edit} />
        </div>
      )}
      <img
        src={!props.isGif ? props.photos.data_url : props.photos}
        className={`${props.isGif ? classes["photo-gif"] : classes["photo"]}`}
      />
    </div>
  );
}
