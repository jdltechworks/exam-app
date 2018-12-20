import React, { Fragment } from 'react'
import Media from 'react-media';

import MobileTop from './MobileTop';
import MobileMid from './MobileMid';
import MobileBottom from './MobileBottom';

const MobileNavbar = () => (
  <Media query="(max-width: 575.98px)">
      {matches => matches &&
      <Fragment>
        <MobileTop />
        <MobileMid />
        <MobileBottom value={'YF1919054'}/>
      </Fragment>}
  </Media>
)

export default MobileNavbar