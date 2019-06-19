import * as React from 'react';
import { CLIENT_ID } from '../../../ressources/apiKey';
import { PlayerButtons, PlayerInformations } from '../../molecules';
import { Button } from '../../atoms';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            isPlaying: null,
            isShowingInfo: false,
        };
        this.array = [];
        this.player = new Audio();
    }

    componentDidMount() {
        fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&limit=50&tags=rock`)
            .then(res => res.json())
            .then(res => {
                let trackObject = {};
                res.results.map((track, index) => {
                    trackObject = {
                        index,
                        albumId: track.album_id,
                        albumImage: track.album_image,
                        albumName: track.album_name,
                        artistId: track.artist_id,
                        artistName: track.artist_name,
                        audio: track.audio,
                        duration: track.duration,
                        trackId: track.id,
                        image: track.image,
                        name: track.name,
                        releaseDate: track.releasedate,
                    };
                    return this.array.push(trackObject);
                });
            })
            .then(() => this.setState({ tracks: this.array }))
            .then(() => this.initAudio());
    }

    initAudio = () => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        this.source = audioCtx.createMediaElementSource(this.player);
        this.analyser = audioCtx.createAnalyser();
        this.source.connect(this.analyser);
        this.analyser.connect(audioCtx.destination);
        this.player.autoplay = true;
        this.setState({ isPlaying: true, track: { ...this.state.tracks[0] } });

        this.player.play();
    };

    isPlaying = bool => {
        !!bool ? this.player.pause() : this.player.play();
        this.setState({ isPlaying: !bool });
    };

    getTrackIndex = tracks => {
        let array = tracks;
        return array.find((track, index) => index === this.state.track.index);
    };

    isPlayingPrev = tracks => {
        if (this.getTrackIndex(tracks).index !== 0) {
            this.setState({ track: tracks[parseInt(this.getTrackIndex(tracks).index - 1)] });
        }
    };

    isPlayingNext = tracks => {
        this.setState({ track: tracks[parseInt(this.getTrackIndex(tracks).index + 1)] });
    };

    isShowingInfo = bool => {
        this.setState({ isShowingInfo: !bool });
    };

    render() {
        let { tracks, track, isPlaying, isShowingInfo } = this.state;
        let errorMsg = 'No audio found';

        if (tracks.length !== 0 && track) {
            return (
                <main className="player-page">
                    <Button onClick={() => this.isShowingInfo(isShowingInfo)}>Menu</Button>

                    {isShowingInfo && (
                        <PlayerInformations
                            track={track}
                            name={track.name}
                            artistName={track.artistName}
                            album={track.albumName}
                            img={track.albumImage}
                            errorMsg={errorMsg}
                        />
                    )}

                    <audio
                        controls
                        crossOrigin="anonymous"
                        src={track ? track.audio : ''}
                        ref={el => (this.player = el)}
                    ></audio>

                    <PlayerButtons
                        play={this.isPlaying}
                        isPlaying={isPlaying}
                        isPlayingPrev={this.isPlayingPrev}
                        isPlayingNext={this.isPlayingNext}
                        tracks={tracks}
                    />
                </main>
            );
        } else {
            return null;
        }
    }
}

export { Player };