import React, { Fragment } from 'react';
import Banner from 'components/Banner/Banner';
import BannerImage from 'assets/image/banner.jpg';
import Card from 'components/Card/Card';
import { Container, Row, Col } from 'reactstrap';
import Embed from 'components/Video/Embed';
import CardMap from 'components/CardMap/CardMap';
import data from 'data/data.json';
import CardBadges from 'components/CardBadges/CardBadges';
import MobileNavbar from 'components/Navbar/Mobile';
import BottomAction from 'components/BottomActions/BottomActions';
const { text, listItems } = data;

const App = () => (
  <Fragment>
    <MobileNavbar />
    <Container>
      <Row>
        <Col xl={12} className="px-0">
          <Banner>
            <img src={BannerImage} className="img-fluid" alt="banner" />
          </Banner>
        </Col>
        <Col xl={12}>
          <Card title={text.title} text={text.description}/>
          {listItems && listItems.map(({ title, list }, key) => (
            <Card key={key} title={title} list={list}/>
          ))}
        </Col>
        <Col xl={12}>
          <Embed title={'company title'} classes={'mb-5'} src={'https://www.youtube.com/embed/Q6vv5Z9rGSI'} />
        </Col>
        <CardMap />
        <CardBadges />
        <BottomAction />
      </Row>
    </Container>
  </Fragment>
);

export default App;
