import React, { useState, useCallback, useRef, Fragment } from "react";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import ImageUploading from "react-images-uploading";
import classes from "./ImageUploader.module.css";
import ImageCropper from "./ImageCropper";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function ImageUploader(props) {
  const maxNumber = 100;
  const [images, setImages] = React.useState([]);
  const [showCropper, setShowCropper] = useState(true);

  //after cropping
  const [croppedPhoto, setCroppedPhoto] = useState("");

  const [selectedImage, setSelectedImage] = useState("");
  const onChange = (imageList, addUpdateIndex) => {
    console.log("entered");
    images[0] = {};
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setShowCropper(true);
    console.log("entered");
  };

  const setOpenCrop = (value) => {
    setShowCropper(false);
  };
  const setCropPhotoURL = (croppedPhoto) => {
    if (croppedPhoto === false) {
      props.editPhoto(props.croppedPhoto);
      console.log("no photos");
    } else {
      props.editPhoto(croppedPhoto);
    }
  };
  return (
    <Fragment>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ onImageUpload, dragProps }) => (
          // write your building UI
          <Fragment>
            <CameraEnhanceOutlinedIcon
              className={`${props.profileOrCover==="cover"? classes.coverEditor:classes.profileEditor}`}
              onClick={onImageUpload}
              {...dragProps}
            />
          </Fragment>
        )}
      </ImageUploading>

      {images[0] && (
        <ImageCropper
          selectedImage={images[0].data_url}
          setOpenCrop={setOpenCrop}
          setCropPhotoURL={setCropPhotoURL}
          toShowCropper={showCropper}
          profileOrCover={props.profileOrCover}
        />
      )}
    </Fragment>
  );
}

export default ImageUploader;
