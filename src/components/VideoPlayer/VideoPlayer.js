import React from "react";
import videoDetails from "../../data/video-details.json";
import videoListData from "../../data/videos.json";
import "./VideoPlayer.scss";

function VideoPlayer({ currentVideoId }) {
  let currentVideo = videoDetails.find((video) => video.id === currentVideoId);
  let currentVideoIndex = videoListData.find(
    (video) => video.id === currentVideoId
  );

  return (
    <>
      <div className="video-player-container">
        <video className="video-player" controls poster={currentVideo.image}>
          <source src={currentVideo.video + "?api_key=kevin"}></source>
        </video>
      </div>
    </>
  );
}

export default VideoPlayer;
