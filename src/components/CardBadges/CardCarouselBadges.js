import React from 'react'
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { PrevArrow, NextArrow } from './Arrows';
import styles from './CardBadges.module.scss';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
};

const CardCarouselBadges = ({ slides }) => (
  <Slider {...settings}>
    {slides && slides.map((slide, key) => (
      <div className="slide-wrapper py-4" key={key}>
        <img className={`mx-auto ${styles.Slides}`} src={slide} alt={`slide-${key}`} />
      </div>
    ))}
  </Slider>
);

CardCarouselBadges.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default CardCarouselBadges;