import * as React from 'react';

export const Timeline = ({ currentTime, duration }) => (
    <div className="timeline">
        <span>
            <progress id="progressValue" value="0" max="1"></progress>
        </span>
        <div className="time">
            <p>{currentTime}</p>
            <p>{duration}</p>
        </div>
    </div>
);
