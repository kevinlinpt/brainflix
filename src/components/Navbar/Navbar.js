import React from "react";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import UserImage from "../../assets/Images/Mohan-muruge.jpg";
import UploadIcon from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="navbar ">
        <div className="navbar-container navbar-padding">
          <Link to="/">
            <div className="navbar-logo">
              <img src={Logo} alt="Logo" className="Logo" />
            </div>
          </Link>
          <div className="right-container-tablet">
            <div className="middle-container">
              <div className="search-box-container">
                <input
                  type="text"
                  className="search-box"
                  placeholder="Search"
                />
              </div>
              <div className="user-image-container">
                <img className="avatar__mobile" src={UserImage} alt="user" />
              </div>
            </div>
            <button className="button">
              <img className="button-icon" src={UploadIcon} alt="upload icon" />
              <h4 className="label-button">UPLOAD</h4>
            </button>
            <div className="user-image-container__tablet">
              <img className="avatar__tablet" src={UserImage} alt="user" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
