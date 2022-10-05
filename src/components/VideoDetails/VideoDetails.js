import React from "react";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import moment from "moment";

import "./VideoDetails.scss";

function VideoDetails({ currentVideo }) {
  // retrieve date in ISO 8601 Format and convert to readable string format in datePostedReadable in relative time using moment.js
  const datePostedReadable = moment(currentVideo.timestamp)
    .startOf("minutes")
    .fromNow();
  return (
    <div className="video-details">
      <div className="video-details__title">
        <h1 className="page-header">{currentVideo.title}</h1>
      </div>
      <div className="line-break">
        <hr />
      </div>

      <div className="video-details__info">
        <div className="video-details__info_left">
          <h2 className="video-details__info_left_channel subheader subheader__bold">
            By {currentVideo.channel}
          </h2>
          <h2 className="video-details__info_left_date body-copy body-copy__silver">
            {datePostedReadable}
          </h2>
        </div>
        <div className="video-details__info_right">
          <div className="video-details__info_right_views_container">
            <img src={viewsIcon} className="video-details__info_right_views_icon" alt="views icon" />
            <h2 className="video-details__info_right_views body-copy body-copy__silver">
              {currentVideo.views}
            </h2>
          </div>
          <div className="video-details__info_right_likes_container">
            <img src={likesIcon} className="video-details__info_right_likes_icon" alt="likes icon" />
            <h2 className="video-details__info_right_likes body-copy body-copy__silver">
              {currentVideo.likes}
            </h2>
          </div>
        </div>
      </div>
      <div className="line-break__tablet">
        <hr />
      </div>
      <div className="video-details__description body-copy">
        {currentVideo.description}
      </div>
    </div>
  );
}

export default VideoDetails;
