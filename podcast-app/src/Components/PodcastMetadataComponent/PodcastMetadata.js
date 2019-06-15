import React from "react";
import "./PodcastMetadata.css";

import PodcastLogo from "../../assets/images/podcast-logo.jpg";

function PodcastMetadata() {
  return (
    <div className="podcast-metadata">
      <p>Swift News - June 3rd, 2019</p>
      <img src={PodcastLogo} alt="podcast logo" />
    </div>
  );
}

export default PodcastMetadata;
