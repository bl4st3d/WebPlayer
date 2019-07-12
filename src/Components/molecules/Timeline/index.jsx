import * as React from 'react';

export const Timeline = ({ currentTime, cursorTime, duration }) => {
    const button = document.querySelector('#cursor');
    !!button ? (button.style.left = `${100 * cursorTime}%`) : null;

    return (
        <div className="timeline">
            <span>
                <progress id="progressValue" value="0" max="1"></progress>
                <button id="cursor"></button>
            </span>
            <div className="time">
                <p>{currentTime}</p>
                <p>{duration}</p>
            </div>
            <p style={{ color: 'white' }}>{cursorTime}</p>
        </div>
    );
};
