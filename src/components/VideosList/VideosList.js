import React from "react";
import "./VideosList.scss";
import { Link } from "react-router-dom";

function VideosList({ currentVideo, videoList }) {
  return (
    <>
      <div className="videolist">
        <h2 className="videolist__label subheader subheader__silver">
          NEXT VIDEOS
        </h2>
        {videoList
          .filter((video) => video.id !== currentVideo.id)
          .map((video) => {
            return (
              <Link to={`/videos/${video.id}`} key={video.id}>
                <div
                  className="videolist__video"
                >
                  <div className="videolist__video_image_container">
                    <img
                      className="videolist__video_image"
                      src={video.image}
                      alt="video poster"
                    />
                  </div>
                  <div className="videolist__info">
                    <div className="videolist__info_type_title subheader">
                      {video.title}
                    </div>
                    <div className="videolist__info_type_channel body-copy">
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
