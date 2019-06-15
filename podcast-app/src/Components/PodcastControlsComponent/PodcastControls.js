import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./PodcastControls.css";

function PodcastControls() {
  return (
    <div className="podcast-controls">
      <ReactAudioPlayer
        src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-5-4/16399851-44100-2-b1035cac4fd87.m4a"
        controls
        style={{ width: "20vw", outline: "none" }}
      />
    </div>
  );
}

export default PodcastControls;
