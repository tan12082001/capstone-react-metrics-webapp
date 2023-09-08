import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ForwardIcon, SirenIcon } from './Icons';

const EachItem = ({ item, id }) => {
  const {
    title,
    mag,
  } = item;
  return (
    <div className="each-card">
      <div className="forward">
        <Link to={`/items/${id}`}>
          <ForwardIcon />
        </Link>
      </div>
      <div className="card-info">
        <p className="card-title">{title}</p>
        <p className="card-mag">
          <SirenIcon />
          {mag}
        </p>
      </div>
    </div>
  );
};

EachItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mag: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default EachItem;
