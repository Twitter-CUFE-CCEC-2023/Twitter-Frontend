import React, { Fragment } from "react";
import classes from "./EditProfileButton.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import coverphoto from "../../../Assets/new-york-city.jpg";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import { screen } from "@testing-library/react";

function EditProfileButton() {
  var resWidth=screen.width;
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
          <div
            className={`${classes.modalContent} modal-content p-0`}
          >
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
            <div
              className={`${classes.modalBody} modal-body py-0 px-1`}
            >
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
                </div>
                <CameraEnhanceOutlinedIcon
                  className={`${classes.photoEditor}`}
                />
              </div>
              <div className={`${classes.nameInput} row mt-5 mb-2`}>
                <div className={`col form-group `}>
                  <input
                    type="text"
                    className={`${classes.inputfield} form-control ms-2 me-2 pb-0`}
                  />
                </div>
              </div>
              <div className={`${classes.nameInput} row mt-4 mb-2`}>
                <div className={`col form-group `}>
                  <textarea
                    type="text"
                    className={` form-control ms-2 me-2`}
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className={`${classes.nameInput} row mt-4 mb-2`}>
                <div className={`col form-group `}>
                  <input
                    type="text"
                    className={`${classes.inputfield} form-control ms-2 me-2 pb-0`}
                  />
                </div>
              </div>
              <div className={`${classes.nameInput} row mt-4 mb-2`}>
                <div className={`col form-group `}>
                  <input
                    type="text"
                    className={`${classes.inputfield} form-control ms-2 me-2 pb-0`}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditProfileButton;
