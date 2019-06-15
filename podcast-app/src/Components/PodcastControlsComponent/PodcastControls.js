import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./PodcastControls.css";

function PodcastControls() {
  return (
    <div className="podcast-controls">
      <ReactAudioPlayer
        className="player"
        controls
        style={{ width: "20vw", outline: "none" }}
      />
    </div>
  );
}

export default PodcastControls;
