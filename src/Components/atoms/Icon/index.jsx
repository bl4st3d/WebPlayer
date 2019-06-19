import * as React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ icon }) => <i className="material-icons">{icon}</i>;

Icon.propTypes = {
    icon: PropTypes.string,
};
