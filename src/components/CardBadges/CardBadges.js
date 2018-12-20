import React, { Fragment } from 'react'
import { Col } from 'reactstrap';
import Card from 'components/Card/Card';
import CardCarouselBadges from './CardCarouselBadges'

import money from 'assets/image/Money.jpg';
import best from 'assets/image/best-of-2018.jpg';
import badge from 'assets/image/badge-2.jpg'
import badgeSecond from 'assets/image/badge-3.jpg'
import topBadge from 'assets/image/Top.png';
import Media from 'react-media';

const CardBadges = () => (
  <Col xl={12}>
    <Card title={'Auszeichnungen'}>
      <Media query="(max-width: 575.98px)">
        {matches => matches ?
          (
            <CardCarouselBadges slides={[money, topBadge, best, badgeSecond, badge ]}/>
          ):
          (
            <Fragment>
              <img width={75} src={money} className="mr-3" alt="money" />
              <img src={topBadge} className="mx-3" alt="top" />
              <img src={best} className="mx-3" alt="best" />
              <img src={badgeSecond} className="mx-3" alt="badge-second" />
              <img src={badge} className="mr-3" alt="badge" />
            </Fragment>
          )
        }
    </Media>
    </Card>
  </Col>
)

export default CardBadges