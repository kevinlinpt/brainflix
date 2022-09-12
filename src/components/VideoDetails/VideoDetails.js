import React from "react";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import moment from "moment";

import "./VideoDetails.scss";

function VideoDetails({ currentVideo }) {
  let currentVideoDetails = currentVideo;
  // retrieve date in ISO 8601 Format and convert to readable string format in datePostedReadable in relative time using moment.js
  const datePostedReadable = moment(currentVideoDetails.timestamp)
    .startOf("minutes")
    .fromNow();
  return (
    <div className="video-details-container">
      <div className="video-title">
        <h1 className="page-header">{currentVideoDetails.title}</h1>
      </div>
      <div className="line-break">
        {" "}
        <hr />
      </div>

      <div className="video-info-container">
        <div className="video-info-left-container">
          {" "}
          <h2 className="channel-name subheader subheader__bold">
            {" "}
            By {currentVideoDetails.channel}
          </h2>
          <h2 className="date-posted body-copy body-copy__silver">
            {datePostedReadable}
          </h2>
        </div>
        <div className="video-info-right-container">
          <div className="video-views-container">
            {" "}
            <img src={viewsIcon} className="viewsIcon" alt="views icon" />
            <h2 className="channel-views body-copy body-copy__silver">
              {" "}
              {currentVideoDetails.views}
            </h2>
          </div>
          <div className="video-likes-container">
            <img src={likesIcon} className="likesIcon" alt="likes icon" />
            <h2 className="channel-likes body-copy body-copy__silver">
              {" "}
              {currentVideoDetails.likes}
            </h2>
          </div>
        </div>
      </div>
      <div className="line-break__tablet">
        {" "}
        <hr />
      </div>
      <div className="video-description body-copy">
        {" "}
        {currentVideoDetails.description}
      </div>
    </div>
  );
}

export default VideoDetails;
