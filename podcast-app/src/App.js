import React from "react";
import "./App.css";

import PodcastOverlay from "./Components/PodcastOverlayComponent/PodcastOverlay";

function App() {
  return (
    <div className="App">
      <div className="header">
        <p>PODCAST PLAYER</p>
      </div>
      <PodcastOverlay />
    </div>
  );
}

export default App;
