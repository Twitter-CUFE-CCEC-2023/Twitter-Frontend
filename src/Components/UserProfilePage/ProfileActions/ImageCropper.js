import React, { useState, Fragment, useCallback } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import getCroppedImg from "./cropImage";
import classes from "./ImageCropper.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import CheckIcon from "@mui/icons-material/Check";
import { Box, DialogActions, DialogContent, Typography } from "@mui/material";

function ImageCropper(props) {
  //props are selectedImage, setShowCropPage, 
  const [showCropPage, setShowCropPage] = useState(true);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    
    console.log(croppedAreaPixels)
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        props.selectedImage,
        croppedAreaPixels
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
      props.setCropPhotoURL(croppedImage);
      props.setOpenCrop(false);
      // setShowCropPage(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
    props.setCropPhotoURL(false);
    props.setOpenCrop(false);
  }, []);

  let cropPage;
  let aspect;
  if(props.profileOrCover==="cover"){
    aspect=25 / 9;
  }
  else{
    aspect=3/3;
  }


  return (
    <div className={`${props.toShowCropper? classes.cropModal: classes.notShow}`}>
      {props.toShowCropper &&
      <div className={`${classes.cropModal}`}>
      <DialogActions className={`my-0`} sx={{ mx: 3, my: 2 }}>
        <Button className={`${classes.closeButton}`} onClick={onClose}>Cancel</Button>
        <CheckIcon className={`${classes.checkIcon}`} onClick={showCroppedImage} />
      </DialogActions>

      <DialogContent
        dividers
        className={`${classes.cropDialog}`}
        sx={{
          background: "#fff",
          position: "relative",
          width: "auto",
          top: 0,

          minWidth: { sm: 500 },
        }}
      >
        <Cropper
          image={props.selectedImage}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </DialogContent>

      <div className={classes.controls}>
        <div className={classes.sliderContainer}>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            classes={{ root: classes.slider }}
            onChange={(e, zoom) => setZoom(zoom)}
          />
        </div>
      </div>
      </div>}
    </div>
  );
}

export default ImageCropper;
