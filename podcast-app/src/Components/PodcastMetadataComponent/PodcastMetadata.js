import React from "react";
import "./PodcastMetadata.css";

import PodcastLogo from "../../assets/images/podcast-logo.png";

function PodcastMetadata() {
  return (
    <div className="podcast-metadata">
      <p>How coding with Swift UI will change the way we make apps?</p>
      <img src={PodcastLogo} alt="podcast logo" />
    </div>
  );
}

export default PodcastMetadata;
