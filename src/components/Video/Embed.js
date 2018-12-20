import React from 'react';
import PropTypes from 'prop-types';

const Embed = ({ classes, title, src }) => (
  <div className="embed-responsive embed-responsive-16by9 pt-5 pb-5">
    <iframe
      className={`embed-responsive-item ${classes}`}
      title={title}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

Embed.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Embed;