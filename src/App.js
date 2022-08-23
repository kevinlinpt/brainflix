import "./App.scss";
import "./styles/partials/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import videoDetails from "./data/video-details.json";
import videoListData from "./data/videos.json";
import Navbar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import CommentSection from "./components/CommentSection/CommentSection";
import VideosList from "./components/VideosList/VideosList";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function App() {
  const [currentVideoId, setCurrentVideo] = useState(videoDetails[0].id);
  console.log(currentVideoId);

  return (
    <Router>
      <Navbar />
      <VideoPlayer currentVideoId={currentVideoId} />
      <div className="desktop-container">
        <div className="desktop-left-container">
          <VideoDetails currentVideoId={currentVideoId} />
          <CommentSection
            currentVideoId={currentVideoId}
            setCurrentVideo={setCurrentVideo}
          />
        </div>
        <div className="desktop-right-container">
          <div className="vertical-divider">
            <VideosList
              currentVideoId={currentVideoId}
              setCurrentVideo={setCurrentVideo}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
