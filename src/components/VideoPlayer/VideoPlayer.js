import React from "react";
import "./VideoPlayer.scss";

function VideoPlayer({ currentVideo }) {
  return (
    <div className="video-player">
      <video className="video-player__video" controls poster={currentVideo.image}>
        <source src={currentVideo.video + "?api_key=kevin"}></source>
      </video>
    </div>
  );
}

export default VideoPlayer;
