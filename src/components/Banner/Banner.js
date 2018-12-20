import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ children }) => (
  <div className="banner">
    {children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.array,
  ]).isRequired,
};

export default Banner;