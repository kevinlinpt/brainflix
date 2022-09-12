import React from "react";
import "./VideoPlayer.scss";

function VideoPlayer({ currentVideo }) {
  let activeVideo = currentVideo;
  return (
    <div className="video-player-container">
      <video className="video-player" controls poster={activeVideo.image}>
        <source src={activeVideo.video + "?api_key=kevin"}></source>
      </video>
    </div>
  );
}

export default VideoPlayer;
