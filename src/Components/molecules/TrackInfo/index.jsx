import * as React from 'react';

export const TrackInfo = ({ name, artistName, album, img, errorMsg }) => {
    let informations = property => (property ? property : errorMsg);
    return (
        <section className="track-info">
            <img src={img} alt="album" />
            <div>
                <p>{informations(name)}</p>
                <p>{informations(artistName)}</p>
                <p>{informations(album)}</p>
            </div>
        </section>
    );
};
