import * as React from 'react';

import { TrackInfo, TracksList } from '../../molecules';

export const PlayerInformations = props => {
    let { tracks, isPlayingSelectedTrack } = props;
    return (
        <section className="player-informations">
            <TrackInfo {...props} />
            <TracksList tracks={tracks} isPlayingSelectedTrack={isPlayingSelectedTrack} />
        </section>
    );
};
