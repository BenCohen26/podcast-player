import React from 'react';

import PodcastMetadata from '../PodcastMetadataComponent/PodcastMetadata';

function PodcastOverlay() {
    return (
        <div className="podcast-overlay">
            <PodcastMetadata />
        </div>
    );
}

export default PodcastOverlay;