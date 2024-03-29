import * as React from 'react';
import { Button, Icon } from '../../atoms';

export const PlayerButtons = ({ play, isPlaying, isPlayingPrev, isPlayingNext, tracks }) => (
    <div className="player-buttons">
        <Button onClick={() => isPlayingPrev(tracks)}>
            <Icon icon="skip_previous" />
        </Button>

        <Button onClick={() => play(isPlaying)}>
            <Icon icon={isPlaying ? 'pause' : 'play_arrow'} />
        </Button>

        <Button onClick={() => isPlayingNext(tracks)}>
            <Icon icon="skip_next" />
        </Button>
    </div>
);
