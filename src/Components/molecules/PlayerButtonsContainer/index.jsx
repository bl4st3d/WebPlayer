import * as React from 'react';
import { Timeline, PlayerButtons } from '../../molecules';

export const PlayerButtonsContainer = ({
    currentTime,
    duration,
    play,
    isPlaying,
    isPlayingPrev,
    isPlayingNext,
    tracks,
}) => {
    return (
        <section className="player-buttons-container">
            <Timeline currentTime={currentTime} duration={duration} />
            <PlayerButtons
                isPlaying={isPlaying}
                isPlayingPrev={isPlayingPrev}
                isPlayingNext={isPlayingNext}
                play={play}
                tracks={tracks}
            />
        </section>
    );
};
