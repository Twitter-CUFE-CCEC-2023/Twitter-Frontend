import React, { useState, Fragment } from "react";
import classes from "./EditProfileButton.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import coverphoto from "../../../Assets/new-york-city.jpg";
import InputBox from "./InputBox";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import { screen } from "@testing-library/react";
import $ from "jquery";
import { css } from "@emotion/react";

function EditProfileButton() {
  return (
    <Fragment>
      <button
        data-bs-target="#myModal"
        data-bs-toggle="modal"
        className={`${classes.editButton} btn btn-outlined btn-light text-bold p-1 px-3`}
      >
        Edit Profile
      </button>
      <div
        className={` ${classes.editModal} modal fade `}
        tabIndex="-1"
        id="myModal"
      >
        <div className={`${classes.modalDialog} modal-dialog `}>
          <div className={`${classes.modalContent} modal-content p-0`}>
            <div className={`${classes.modalHeader} modal-header pb-3 pt-2 `}>
              <CloseIcon
                className={`${classes.closeIcon} ps-0  me-4`}
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <h5 className={`${classes.modalTitle} col-3 modal-title`}>
                Edit profile
              </h5>
              <button
                className={`${classes.saveButton}   text-bold p-1 pt-0 px-3 `}
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Save
              </button>
            </div>
            <div className={`${classes.modalBody} modal-body py-0 px-1`}>
              <div className={`${classes.coverPhotoEdit}`}>
                <img src={coverphoto} alt="" className={` img-fluid py-0`} />
                <CameraEnhanceOutlinedIcon
                  className={`${classes.coverEditor}`}
                />
                <div className={`${classes.profileImageContainer}`}>
                  <img
                    className={`${classes.profilePhotoEdit} img-fluid`}
                    src="https://pbs.twimg.com/profile_images/1492532221110104067/_3ozwoyh_400x400.jpg"
                    alt=""
                  />
                  <CameraEnhanceOutlinedIcon
                    className={`${classes.photoEditor}`}
                  />
                </div>
              </div>
              <form action="">
                <InputBox inputName="Name" inputValue="عمرو اكا زيكا" label="nameLabel" labelID="'#nameID'" pID='nameID'></InputBox>
                <InputBox inputName="Bio" label="bioLabel" labelID='"#bioID"' pID='bioID'></InputBox>
                <InputBox inputName="Location" label="location" labelID='"#locID"' pID='locID'></InputBox>
                <InputBox inputName="Website" labelID='"#webID"' pID='webID'></InputBox>
              </form>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditProfileButton;
