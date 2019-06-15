import React from 'react';

import PodcastMetadata from '../PodcastMetadataComponent/PodcastMetadata';
import PodcastControls from '../PodcastControlsComponent/PodcastControls';

function PodcastOverlay() {
    return (
        <div className="podcast-overlay">
            <PodcastMetadata />
            <PodcastControls />
        </div>
    );
}

export default PodcastOverlay;