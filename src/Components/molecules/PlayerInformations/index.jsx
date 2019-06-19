import * as React from 'react';

export const PlayerInformations = ({ track, name, artistName, album, img, errorMsg }) => {
    return (
        <section className="player-informations">
            <img src={img} alt="album" />
            <p>{name}</p>
            <p>{artistName}</p>
            <p>{album}</p>
        </section>
    );
};
