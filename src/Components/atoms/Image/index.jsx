import * as React from 'react';
import Proptype from 'prop-types';

export const Image = ({ imageUrl, alt, className }) => <img src={imageUrl} alt={alt} className={className} />;

Image.Proptype = {
    alt: Proptype.string,
    className: Proptype.string,
    imageUrl: Proptype.string,
};
