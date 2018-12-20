import React from 'react'
import logo from 'assets/image/logo.png';
import styles from './Mobile.module.scss'

const MobileTop = () => (
  <div className={`${styles.mobileNav} py-1 d-flex justify-content-between align-items-center`}>
    <button className={styles.button}>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </button>
    <img src={logo} alt="site logo" />
    <button className={styles.button}>
      <i className="fa fa-share-alt" aria-hidden="true"></i>
    </button>
  </div>
)

export default MobileTop;

