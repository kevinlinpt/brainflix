import React, { useState } from "react";
import "./VideosList.scss";
import videoDetails from "../../data/video-details.json";
import videoListData from "../../data/videos.json";

function VideosList({ currentVideoId, setCurrentVideo }) {
  const [videoList, setVideoList] = useState(videoListData);
  const selectVideo = (id) => {
    setCurrentVideo(id);
  };
  console.log(videoList);
  console.log(videoDetails);
  return (
    <>
      <div className="videolist-container">
        <h2 className="videolist-label subheader subheader__silver">
          NEXT VIDEOS
        </h2>
        {videoList
          .filter((video) => video.id !== currentVideoId)
          .map((video) => {
            return (
              <div
                className="videolist-video-container"
                key={video.id}
                onClick={() => selectVideo(video.id)}
              >
                <div className="videolist-image-container">
                  <img className="videolist-poster" src={video.image} />
                </div>
                <div className="videolist-info-container">
                  <div className="videolist-title subheader">{video.title}</div>
                  <div className="channel-name body-copy">{video.channel}</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default VideosList;
