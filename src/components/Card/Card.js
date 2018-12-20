import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import styles from './Card.module.scss';

const CardComponent = ({ title, children, text, list }) => (
  <Card className="my-4 rounded-0">
    <CardBody className="px-3 px-sm-3 px-md-5 px-lg-5 px-xl-5">
      {title && <CardTitle 
        className={`px-0 px-sm-3 px-md-5 px-lg-0 px-xl-0 ${styles.cardTitle}`}>{title}</CardTitle>}
      {text && <CardText className={'px-0 px-sm-3 px-md-0 px-lg-0'}>{text}</CardText>}
      {list && 
        <ul className={`px-0 px-sm-3 px-md-5 px-lg-3 ${styles.cardList}`}>
          {list.map((item, key) => (
            <li key={key} className="mb-3">{item}</li>
          ))}
        </ul>
      }
      { children }
    </CardBody>
  </Card>
)

CardComponent.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  text: PropTypes.string
}

export default CardComponent