import React from "react";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import videoDetails from "../../data/video-details.json";
import videoListData from "../../data/videos.json";
import "./VideoDetails.scss";

function VideoDetails({ currentVideoId }) {
  let currentVideoDetails = videoDetails.find(
    (video) => video.id === currentVideoId
  );
  // retrieve date in ISO 8601 Format and store in variable; Convert to readable string format in datePostedReadable
  const datePostedISO = new Date(currentVideoDetails.timestamp);
  const datePostedReadable =
    ("0" + (datePostedISO.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + datePostedISO.getDate()).slice(-2) +
    "/" +
    datePostedISO.getFullYear();
  return (
    <div className="video-details-container">
      <div className="video-title">
        <h1>{currentVideoDetails.title}</h1>
      </div>
      <div className="line-break">
        {" "}
        <hr />
      </div>

      <div className="video-info-container">
        <div className="video-info-left-container">
          {" "}
          <h2 className="channel-name subheader">
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
            <img src={viewsIcon} className="viewsIcon" />
            <h2 className="channel-views body-copy body-copy__silver">
              {" "}
              {currentVideoDetails.views}
            </h2>
          </div>
          <div className="video-likes-container">
            <img src={likesIcon} className="likesIcon" />
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
