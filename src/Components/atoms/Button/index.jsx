import * as React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ className, onClick, children }) => (
    <button className={className} onClick={onClick}>
        {children}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onClick: PropTypes.func,
};
