import React from 'react'
import PropTypes from 'prop-types';
import styles from './CardBadges.module.scss';

export const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={[className, styles.slidePrev].join(' ')}
    style={{ ...style }}
    onClick={onClick}>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
  </div>
)

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

export const NextArrow = ({ className, style, onClick }) => (
  <div
    className={[className, styles.slideNext].join(' ')}
    style={{ ...style }}
    onClick={onClick}>
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
  </div>
)

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};
