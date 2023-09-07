import PropTypes from 'prop-types';
import { PinIcon, WarningIcon } from './Icons';

const ItemDetails = ({ itemInfo }) => {
  const {
    title,
    alert,
    place,
    mag,
    type,
    tsunami,
    url,
    time,
  } = itemInfo;

  return (
    <div className="details-outer">
      <h2>
        <PinIcon />
        {title}
      </h2>
      <p className="details-p">
        <span>Disaster Type: </span>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </p>
      <p className="details-p">
        <span>
          <WarningIcon />
          Alert:
        </span>
        {alert || 'N/A'}
      </p>
      <p className="details-p">
        <span>Place: </span>
        {place}
      </p>
      <p className="details-p">
        <span>Event Occured: </span>
        {new Date(time).toLocaleString()}
      </p>
      <p className="details-p">
        <span>Earthquake Magnitude: </span>
        {mag}
      </p>
      <p className="details-p">
        <span>Tsunamis: </span>
        {tsunami}
      </p>
      <p className="details-p">
        <span>More Info: </span>
        <a className="info-link" href={url} target="_blank" rel="noopener noreferrer">USGS Event Link</a>
      </p>
    </div>
  );
};

ItemDetails.propTypes = {
  itemInfo: PropTypes.shape({
    title: PropTypes.string,
    alert: PropTypes.string,
    mag: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    tsunami: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetails;
