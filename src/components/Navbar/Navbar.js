import React from "react";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import UserImage from "../../assets/Images/Mohan-muruge.jpg";
import UploadIcon from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container navbar__padding">
          <Link to="/">
            <div className="navbar__container_logo">
              <img src={Logo} alt="Logo" className="navbar__logo" />
            </div>
          </Link>
          <div className="navbar__container_right_tablet">
            <div className="navbar__container_middle">
              <div className="navbar__container_search">
                <input
                  type="text"
                  className="navbar__search"
                  placeholder="Search"
                />
              </div>
              <div className="navbar__container_user_image_mobile">
                <img className="navbar_user_image_mobile" src={UserImage} alt="user" />
              </div>
            </div>
            <Link to="/upload">
              <button className="button">
                <img
                  className="button__icon"
                  src={UploadIcon}
                  alt="upload icon"
                />
                <h4 className="label-button">UPLOAD</h4>
              </button>
            </Link>
            <div className="navbar__container_user_image_tablet">
              <img className="navbar_user_image_tablet" src={UserImage} alt="user" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
