import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.scss';
import MapMarker from 'assets/image/map-marker.png';

class Map extends Component {
  static propTypes = {
    coordinates: PropTypes.shape({
      longitude: PropTypes.number.isRequired,
      latitude: PropTypes.number.isRequired,
    }),
    classes: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.mapTarget = createRef();
  }
  componentDidMount() {
    const { coordinates } = this.props;
    if (window.google && coordinates) {
      const { longitude, latitude } = coordinates;
      const shapedCoordinates = { lat: latitude, lng: longitude };

      this.map = new window.google.maps.Map(
        this.mapTarget.current,
        {
          center: shapedCoordinates,
          zoom: 15,
          disableDefaultUI: true,
        },
      );

      this.marker = new window.google.maps.Marker({
        position: shapedCoordinates,
        icon: MapMarker,
        map: this.map,
      });
    }
  }
  render() {
    const { classes, buttonText } = this.props
    return (
      <div className={`${styles.container}${classes ? ` ${classes}`: ''}`}>
        <div ref={this.mapTarget} className={styles.map} />
        <div className={styles.mapButton}>
          <button className={`btn btn-primary btn-md rounded-0 ${styles.button}`}>{buttonText}</button></div>
      </div>
    );
  }
}

export default Map;