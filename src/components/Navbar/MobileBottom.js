import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mobile.module.scss';

const MobileBottom = ({ value }) => (
  <div className={`${styles.mobileBottom} py-2`}>
    <div className="icon-shuffle">
      <i className="fa fa-file" aria-hidden="true"></i>
      <i className="fa fa-file" aria-hidden="true"></i>
    </div>
    <span className={styles.refNumberLabel}>REF.-NR.</span>{' '}<span className={styles.refNumber}>{value}</span>
    <div className={styles.buttonPrevNext}>
      <button><i className="fa fa-chevron-left"></i></button>
      <button><i className="fa fa-chevron-right"></i></button>
    </div>
  </div>
)

MobileBottom.propTypes = {
  value: PropTypes.string.isRequired,
}



export default MobileBottom;