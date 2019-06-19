import * as React from 'react';
import { CLIENT_ID } from '../../../ressources/apiKey';
import { Button } from '../../atoms';
export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            isPlaying: null,
        };
        this.array = [];
        this.player = new Audio();
    }

    componentDidMount() {
        fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&limit=50&tags=rock`)
            .then(res => res.json())
            .then(res => {
                let trackObject = {};
                res.results.map(track => {
                    trackObject = {
                        albumId: track.album_id,
                        albumImage: track.album_image,
                        albumName: track.album_name,
                        artistId: track.artist_id,
                        artisteName: track.artist_name,
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
        this.player.play();
        this.setState({ isPlaying: true });
    };

    isPlaying = bool => {
        !!bool ? this.player.pause() : this.player.play();
        this.setState({ isPlaying: !bool });
    };

    render() {
        let { tracks } = this.state;
        return (
            <div>
                <p>{tracks.length !== 0 ? tracks[0].name : null}</p>
                <p>{tracks.length !== 0 ? tracks[0].artisteName : null}</p>

                <audio
                    controls
                    crossOrigin="anonymous"
                    src={tracks.length !== 0 ? tracks[0].audio : ''}
                    ref={el => (this.player = el)}
                ></audio>
                <Button>prev</Button>
                <Button onClick={() => this.isPlaying(this.state.isPlaying)}>play/stop</Button>
                <Button>next</Button>
            </div>
        );
    }
}
