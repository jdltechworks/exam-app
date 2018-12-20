import React from 'react'
import { Row, Col } from 'reactstrap';
import Map from 'components/Map/Map';
import Card from 'components/Card/Card';
import styles from './CardMap.module.scss';

const CardMap = () => (
  <Col xl={12}>
  <Card>
    <Row className="d-flex flex-column-reverse flex-sm-column-reverse flex-md-row flex-lg-row">
      <Col sm={12} xl={6} className="px-0 px-sm-2 px-md-2 px-lg-2">
        <Map coordinates={{ longitude: 86.211205, latitude: 77.147489 }} buttonText={'KARTE ANZEIGEN'} />
      </Col>
      <Col sm={12} xl={6}>
        <h2 className={styles.header}>Standort</h2>
        <h5 className={styles.subHeader}>Musterfirma GmbH</h5>
        <p>Völklinger Str. 1, 40219 Düsseldorf, Deutschland</p>
      </Col>
    </Row>
  </Card>
</Col>
)

export default CardMap