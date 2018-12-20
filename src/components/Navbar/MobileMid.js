import React from 'react'
import styles from './Mobile.module.scss';

const MobileMid = () => (
  <nav className={`py-2 nav nav-pills nav-justified ${styles.pills}`}>
    <a className={`nav-item nav-link rounded-0 ${styles.navItem} active`} href="/">ANZEIGE</a>
    <a className="nav-item nav-link rounded-0" href="/">FIRMENPROFIL</a>
  </nav>
);

export default MobileMid;