import React, { useState, Fragment } from "react";
import classes from "./EditProfileButton.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CloseIcon from "@mui/icons-material/Close";
import InputBox from "./InputBox";
import ImageUploader from "./ImageUploader";
import instance from "../../axios";
//import { useNextMonthDisabled } from "@mui/lab/internal/pickers/hooks/date-helpers-hooks";

function EditProfileButton(props) {
  const [fileData, setFileData] = useState();
  const currentuser = JSON.parse(localStorage.getItem("UserInfo"));
  const [croppedCoverPhoto, setCroppedCoverPhoto] = useState(
    currentuser.cover_image_url
      ? currentuser.cover_image_url
      : "https://jannaschreier.files.wordpress.com/2012/03/website-header-blue-grey-background.jpg"
  );
  const [croppedProfilePhoto, setCroppedProfilePhoto] = useState(
    currentuser.profile_image_url
      ? currentuser.profile_image_url
      : "https://www.glidden.com/cms/getmedia/9500a596-cfc5-483d-8d53-28fff52a0444/room-swatch_smoke-grey__90bg-30_073.jpg"
  );
  const [name, setName] = useState(currentuser.name);
  const [bio, setBio] = useState(currentuser.bio);
  const [website, setWebsite] = useState(currentuser.website);
  const [location, setLocation] = useState(currentuser.location);
  const [birth_date, setBirthDate] = useState(
    currentuser.birth_date.slice(0, 10)
  );
  console.log(birth_date);
  console.log(currentuser.name);
  const editCover = (editedcover) => {
    setCroppedCoverPhoto(editedcover);
  };
  const editProfilePhoto = (editedprofile) => {
    setCroppedProfilePhoto(editedprofile);
  };
  const resetModal = () => {
    setCroppedCoverPhoto(
      currentuser.cover_image_url
        ? currentuser.cover_image_url
        : "https://jannaschreier.files.wordpress.com/2012/03/website-header-blue-grey-background.jpg"
    );
    setCroppedProfilePhoto(
      currentuser.profile_image_url
        ? currentuser.profile_image_url
        : "https://www.glidden.com/cms/getmedia/9500a596-cfc5-483d-8d53-28fff52a0444/room-swatch_smoke-grey__90bg-30_073.jpg"
    );
  };
  const onSaveEdits = async () => {
    //convert blob to file
    const profileFile = await fetch(croppedProfilePhoto)
      .then((r) => r.blob())
      .then(
        (blobFile) => new File([blobFile], "file.jpeg", { type: "image/jpeg" })
      );
    const coverFile = await fetch(croppedCoverPhoto)
      .then((r) => r.blob())
      .then(
        (blobFile) => new File([blobFile], "file.jpeg", { type: "image/jpeg" })
      );

    let formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("website", website);
    formData.append("location", location);
    formData.append("birth_date", birth_date);
    formData.append("media", profileFile);
    formData.append("media", coverFile);

    instance
      .put(`/user/update-profile`, formData)
      .then((res) => {
        props.setData(res.data.user);
        console.log("response on update", res.data.user);
        let localStorageData = {
          name: res.data.user.name,
          bio: res.data.user.bio,
          website: res.data.user.website,
          location: res.data.user.location,
          birth_date: res.data.user.birth_date,
          profile_image_url: res.data.user.profile_image_url,
          cover_image_url: res.data.user.cover_image_url,
          username: res.data.user.username,
        };
        console.log("send data", localStorageData);

        //reload page
        if (
          currentuser.profile_image_url !== res.data.user.profile_image_url ||
          currentuser.name !== res.data.user.name
        ) {
          window.location.reload();
        }
        localStorage.setItem("UserInfo", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeNameVal = (value) => {
    setName(value);
    console.log(value);
  };
  const changeBioVal = (value) => {
    setBio(value);
  };
  const changeWebsiteVal = (value) => {
    setWebsite(value);
  };
  const changeLocationVal = (value) => {
    setLocation(value);
  };

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
                onClick={resetModal}
              />
              <h5 className={`${classes.modalTitle} col-3 modal-title`}>
                Edit profile
              </h5>
              <button
                className={`${classes.saveButton}   text-bold p-1 pt-0 px-3 `}
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onSaveEdits}
              >
                Save
              </button>
            </div>

            <div className={`${classes.modalBody} modal-body py-0 px-1`}>
              <ImageUploader
                profileOrCover="cover"
                className={classes.coverCropUploader}
                editPhoto={editCover}
                croppedPhoto={croppedCoverPhoto}
              ></ImageUploader>
              <ImageUploader
                profileOrCover="profile"
                className={classes.profileCropUploader}
                editPhoto={editProfilePhoto}
                croppedPhoto={croppedProfilePhoto}
              ></ImageUploader>
              <div className={`${classes.coverPhotoEdit} row`}>
                <img
                  width="596"
                  height="198"
                  src={croppedCoverPhoto}
                  alt=""
                  className={`${classes.coverImage} img-fluid py-0`}
                />

                <div className={`${classes.profileImageContainer}`}>
                  <img
                    className={`${classes.profilePhotoEdit} img-fluid`}
                    src={croppedProfilePhoto}
                    alt=""
                  />
                </div>
              </div>

              <form action="">
                <InputBox
                  inputName="Name"
                  inputValue={currentuser.name}
                  onChangeVal={changeNameVal}
                ></InputBox>
                <InputBox
                  inputName="Bio"
                  inputValue={currentuser.bio}
                  onChangeVal={changeBioVal}
                ></InputBox>
                <InputBox
                  inputName="Location"
                  inputValue={currentuser.location}
                  onChangeVal={changeLocationVal}
                ></InputBox>
                <InputBox
                  inputName="Website"
                  inputValue={currentuser.website}
                  onChangeVal={changeWebsiteVal}
                ></InputBox>
                <label for="birthday" className={`${classes.birthdayLabel}`}>
                  Birth date:
                </label>
                <br />
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={birth_date}
                  max="2021-01-01"
                  onChange={(e) => {
                    setBirthDate(e.target.value.toString());
                    console.log(e.target.value.toString());
                  }}
                  className={`${classes.birthdayInput}`}
                ></input>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditProfileButton;
