import * as React from 'react';

export const TracksList = ({ tracks, isPlayingSelectedTrack }) => {
    return (
        <ul className="tracks-list">
            {tracks.map(track => (
                <li key={track.trackId}>
                    <button type="button" onClick={() => isPlayingSelectedTrack(track)}>
                        <span> {track.name}</span>
                        <span>{track.artistName}</span>
                    </button>
                </li>
            ))}
        </ul>
    );
};
