import React from 'react';
import { Col } from 'reactstrap';
import Media from 'react-media';
import styles from './BottomActions.module.scss';

const BottomAction = () => (
  <Media query="(max-width: 575.98px)">
    {match => match && 
      <Col xl={12}>
        <nav className={`nav nav-pills nav-justified ${styles.pills}`}>
          <a className={`nav-item nav-link rounded-0 ${styles.pill} ${styles.pillActive}`} href="/">BEWERBEN</a>
          <a className={`nav-item nav-link rounded-0 ${styles.pill}`} href="/">PER &nbsp;&nbsp;<i className="fa fa-video-camera"></i>&nbsp;&nbsp;&nbsp;BEWERBEN</a>
        </nav>        
      </Col>}
  </Media>
);

export default BottomAction;