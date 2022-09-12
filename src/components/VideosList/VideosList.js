import React from "react";
import "./VideosList.scss";
import { Link } from "react-router-dom";

function VideosList({ currentVideo, videoList }) {
  return (
    <>
      <div className="videolist-container">
        <h2 className="videolist-label subheader subheader__silver">
          NEXT VIDEOS
        </h2>
        {videoList
          .filter((video) => video.id !== currentVideo.id)
          .map((video) => {
            return (
              <Link to={`/videos/${video.id}`} key={video.id}>
                <div
                  className="videolist-video-container"
                >
                  <div className="videolist-image-container">
                    <img
                      className="videolist-poster"
                      src={video.image}
                      alt="video poster"
                    />
                  </div>
                  <div className="videolist-info-container">
                    <div className="videolist-title subheader">
                      {video.title}
                    </div>
                    <div className="channel-name body-copy">
                      {video.channel}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default VideosList;
