import "./UploadPage.scss";
import React, { useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import UploadImage from "../../assets/Images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/Icons/publish.svg"
const { v4: uuid } = require("uuid");

function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

function handleSubmit (event) {

  event.preventDefault();
  const newVideo = {
    id: uuid(),
    title: title,
    channel: "Kevin Lin",
    views: "1",
    likes: "1",
    duration: "10:00", 
    description: description,
    image: "Upload-video-preview.jpg",
    timestamp: Date.now(),
    video: "https://project-2-api.herokuapp.com/stream",
    comments:[], 
  }  

  axios.post(`http://localhost:8080/videos/`, newVideo);
  alertMessage()
};

function handleChangeTitle(event) {
  setTitle(event.target.value);
} 

function handleChangeDescription(event) {
  setDescription(event.target.value);
} 

function alertMessage() {
  alert("Upload successful!");
}

  return (
    <>
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
                className="upload-form upload-form__title"
                type="text"
                name="title"
                value={title}
                onChange={handleChangeTitle}
                placeholder="Add a title to your video"
              />
            </div>
            <h2 className="subheader subheader__silver">
              ADD A VIDEO DESCRIPTION
            </h2>
            <div className="upload-form-container">
              <input
                className="upload-form upload-form__description"
                type="text"
                name="description"
                value={description}
                onChange={handleChangeDescription}
                placeholder="Add a description to your video"
              />
            </div>
          </div>
        </div>
        <hr className="hr__removed-mobile"></hr>
        <div className="upload-footer">
          <h4 className="label-button label-button__upload-tablet">CANCEL</h4>
          <Link to="/">
            <button className="button" type="submit" onClick={handleSubmit}>
              <img
                className="button__icon"
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
