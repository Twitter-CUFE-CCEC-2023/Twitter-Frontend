import { useEffect, useState } from "react";
import classes from "./PhotosContainer.module.css";
export default function PhotosContainer(props) {
  // const [photos, setPhotos] = useState(props.photos);
  // useEffect(() => {
  //   setPhotos(props.photos);
  // }, [photos]);
  return (
    <div className={classes.container}>
      <div className={classes["container-photo"]}>
        {props.photos.map((photo, index) => {
          <img src={photo.data_url} alt="" width="100" key={index} />;
        })}
      </div>
      ;
    </div>
  );
}
