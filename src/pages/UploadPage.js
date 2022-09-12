import React from "react";
import "./UploadPage.scss";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import UploadImage from "../assets/Images/Upload-video-preview.jpg";
import PublishIcon from "../assets/Icons/publish.svg"
function UploadPage() {
  function alertMessage() {
    alert("Upload successful!");
  }
  return (
    <>
      <Navbar />
      <hr className="hr__upload" />
      <div className="upload-container">
        <h1 className="upload-heading page-header"> Upload Video</h1>{" "}
        <hr className="hr__removed-mobile" />
        <div className="upload-content-container">
          <div className="upload-thumbnail-container">
            <h2 className="subheader subheader__silver">VIDEO THUMBNAIL</h2>
            <div className="upload-image-container">
              <img
                src={UploadImage}
                className="upload-image"
                alt="upload-thumbnail"
              />
            </div>
          </div>
          <div className="upload-details-container">
            <h2 className="subheader subheader__silver">TITLE YOUR VIDEO</h2>
            <div className="upload-form-container">
              <input
                type="text"
                className="upload-form upload-form__title"
                placeholder="Add a title to your video"
              />
            </div>
            <h2 className="subheader subheader__silver">
              {" "}
              ADD A VIDEO DESCRIPTION
            </h2>
            <div className="upload-form-container">
              <input
                type="text"
                className="upload-form upload-form__description"
                placeholder="Add a description to your video"
              />
            </div>
          </div>
        </div>
        <hr className="hr__removed-mobile"></hr>
        <div className="upload-footer">
          {" "}
          <h4 className="label-button label-button__upload-tablet">CANCEL</h4>
          <Link to="/">
            <button className="button" onClick={alertMessage}>
              <img
                className="button-icon"
                src={PublishIcon}
                alt="upload icon"
              />
              <h4 className="label-button">PUBLISH</h4>
            </button>
          </Link>
          <h4 className="label-button label-button__upload-mobile">CANCEL</h4>
        </div>
      </div>
    </>
  );
}

export default UploadPage;
