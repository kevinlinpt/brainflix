import "./HomePage.scss";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../components/VideoDetails/VideoDetails";
import VideosList from "../components/VideosList/VideosList";
import CommentSection from "../components/CommentSection/CommentSection";

function Home() {
  const { videoId } = useParams();
  const url = "https://project-2-api.herokuapp.com";
  const apikey = "?api_key=d57a1262-8ffe-4caf-ae86-05a0a1ae45ea"; 

  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    axios.get(`${url}/videos/${apikey}`).then((response) => {
      setVideoList(response.data);
    });
  }, []);

  const currentVideoId = videoId || videoList[0]?.id;

  useEffect(() => {
    if (currentVideoId) {
      axios
        .get(`${url}/videos/${currentVideoId}/${apikey}`)
        .then((response) => setCurrentVideo(response.data));
    }
  }, [currentVideoId]);

  if (videoList === null || currentVideo === null) {
    return;
  }
  return (
    <>
      <Navbar />
      {videoList.length > 0 ? (
        <VideoPlayer currentVideo={currentVideo} />
      ) : (
        <h1>Loading...</h1>
      )}
      <div className="desktop-container">
        <div className="desktop-left-container">
          <VideoDetails currentVideo={currentVideo} />
          <CommentSection
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
            url = {url}
            apikey={apikey}
            currentVideoId={currentVideoId}
          />
        </div>
        <div className="desktop-right-container">
          <div className="vertical-divider">
            <VideosList currentVideo={currentVideo} videoList={videoList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
